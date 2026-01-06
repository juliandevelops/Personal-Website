import fs from "node:fs"
import path from "node:path";
import Link from "next/link";

export const metadata = {
    title: 'Julian Schumacher - Thoughts',
    description: 'Read my latest thoughts',
    keywords: [
        "Julian Schumacher Thoughts",
        "Personal Thoughts",
        "Developer Thoughts",
    ],
    formatDetection: {
        email: true,
        address: true,
        telephone: true,
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
}

class ThoughtsEntryDetails {
    title: string
    identifier: string
    previewText: string

    constructor(title: string, identifier: string, previewText: string) {
        this.title = title;
        this.identifier = identifier;
        this.previewText = previewText;
    }
}

export default async function Thoughts() {
    const thoughtsEntryFiles: string[] = fs.readdirSync("./public/thoughts");
    const thoughtsEntryNames: string[] = [];
    const thoughtsEntryPreviews: string[] = [];
    thoughtsEntryFiles.forEach(async (fileName) => {
        const fullPath: string = path.join("./public/thoughts/", fileName);
        const fileContents: string = fs.readFileSync(fullPath, "utf8");
        const headline: string = fileContents.split("\n")[0].replace("# ", "");
        const preview: string = fileContents.split("\n").slice(1, 4).join(" ");
        thoughtsEntryNames.push(headline)
        thoughtsEntryPreviews.push(preview)
    });
    const thoughtsEntries: ThoughtsEntryDetails[] = [];
    for (let i: number = 0; i < thoughtsEntryNames.length; i++) {
        thoughtsEntries.push(
            new ThoughtsEntryDetails(
                thoughtsEntryNames[i],
                thoughtsEntryFiles[i].replace(".md", ""),
                thoughtsEntryPreviews[i]
            )
        );
    }
    return (
        <main>
            <h1>Thoughts</h1>
            {thoughtsEntryFiles.length === 0 ? (
                <p>Currently no thoughts published yet.</p>
            ) : (
                <div className="stack">
                    {thoughtsEntries.map((details) => (
                        <Link
                            href={`/thoughts/${details.identifier}`}
                            key={details.identifier}
                        >
                            <h2>{details.title}</h2>
                            <p>{details.previewText}</p>
                        </Link>
                    ))}
                </div>
            )
            }
            <p>Stay tuned for updates!</p>
        </main>
    )
}
