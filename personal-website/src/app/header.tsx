'use client';

import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    return (
        <header>
            {pathname !== "/" && (
                <a href="/" style={{ textDecoration: "underline" }}>
                    &larr; Back to Home
                </a>
            )}
        </header>
    );
}
