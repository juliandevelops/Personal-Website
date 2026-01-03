import Link from "next/link";

export const metadata = {
    title: 'Julian Schumacher - Website Status',
    description: 'Current status of the Julian Schumacher website',
    keywords: [
        "Website Status",
        "Julian Schumacher Website Status",
        "Website Maintenance",
        "Website Updates",
        "Website Information",
        "Site Status",
        "Website Construction",
        "Website Development Status"
    ],
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

export default function StatusPage() {
    return (
        <main>
            <h1>Website Status</h1>
            <p>
                This website is still in construction.
                Some features may not work as intended on some devices or browsers.
                If you encounter any issues, please feel free to <a href="/contact">contact me</a>.
                The most recent state of development can be found on <Link href="https://github.com/juliandevelops/personal-website" target="_blank">GitHub</Link>.
            </p>
            <h1>System Status</h1>
            <p>
                Currently no system is self-hosted, so no status information is available.
            </p>
        </main>
    );
}
