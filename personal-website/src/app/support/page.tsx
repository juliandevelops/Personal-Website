import Link from "next/link";

export const metadata = {
    title: 'Julian Schumacher - Support',
    description: 'Get support for my projects and more',
}

export default function Support() {
    return (
        <main>
            <h1>Support</h1>
            <p>If you need support, you can reach the support via <a
                href="mailto:support@julianschumacher.dev?subject=Support Request">E-mail</a>.</p>
            <p>For information regarding current issues, problems and projects, please first refer to <a
                href="https://github.com/Julessh05">Github</a>.</p>
            <p>If you search for further information regarding a specific project, please refer to that project&rsquo;s
                Github Repository and it&rsquo;s issues. You can find the projects <Link href={"/projects"}>here</Link>.
            </p>
        </main>
    )
}
