import Link from "next/link";

export const metadata = {
    title: 'Julian Schumacher - Support',
    description: 'Get support for my projects and more',
}

export default function Support() {
    return (
        <main>
            <h1>Support</h1>
            <p>
                Need help or have a question? Feel free to send me an{" "}
                <a href="mailto:support@julianschumacher.dev?subject=Support Request">
                    email
                </a>.
            </p>
            <p>
                For technical topics and current projects, the fastest updates are on{" "}
                <a href="https://github.com/Julessh05">GitHub</a>.
            </p>
            <p>
                For professional collaboration, please use my{" "}
                <Link href="https://juliandevelops.com">professional website</Link>.
            </p>
        </main>
    )
}
