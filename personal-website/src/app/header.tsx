"use client";

import { usePathname } from "next/navigation";
import styles from "./header.module.scss";

export default function Header() {
  const pathname = usePathname();
  return (
    pathname !== "/" && (
      <header className={styles.header}>
        <a href="/" className={styles.backLink}>
          &larr; Back to Home
        </a>
      </header>
    )
  );
}
