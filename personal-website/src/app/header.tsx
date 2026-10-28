import Link from "next/link";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          Julian Schumacher
        </Link>
        <nav className={styles.nav}>
          <Link href="/thoughts">Thoughts</Link>
          <a href="https://juliandevelops.com">Professional site</a>
        </nav>
      </div>
    </header>
  );
}
