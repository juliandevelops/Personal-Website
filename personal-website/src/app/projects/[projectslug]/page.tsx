import { permanentRedirect } from "next/navigation";

export default async function ProjectSlugRedirect({ params }: { params: Promise<{ projectslug: string }> }) {
    const { projectslug } = await params;
    permanentRedirect(`https://juliandevelops.com/work/projects/${projectslug}`);
}
