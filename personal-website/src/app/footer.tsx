import Link from "next/link";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.columns}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Elsewhere</h3>
            <ul>
              <li>
                <Link href="https://juliandevelops.com">juliandevelops.com</Link>
              </li>
              <li>
                <Link href="https://github.com/juliandevelops">
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="https://linkedin.com">LinkedIn</Link>
              </li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Socials</h3>
            <ul>
              <li>
                <Link href="https://instagram.com/jules.idle">Instagram</Link>
              </li>
              <li>
                <Link href="https://x.com/julesidle">X</Link>
              </li>
              <li>
                <Link href="https://tiktok.com/julesidle">TikTok</Link>
              </li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Housekeeping</h3>
            <ul>
              <li>
                <Link href="mailto:support@julianschumacher.dev?subject=Support Request [via Website]&body=[Support request triggered by website footer]">
                  Support request
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy">Privacy</Link>
              </li>
              <li>
                <Link href="/status">Site status</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.colophon}>
          <p>© 2026 Julian Schumacher</p>
          <p>
            Set in IBM Plex Serif &amp; IBM Plex Sans · Built with Next.js ·{" "}
            <Link href="/status">Work in progress</Link>
          </p>
          <p>Generative AI was used to assist in the creation of this website.</p>
        </div>
      </div>
    </footer>
  );
}
