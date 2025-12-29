import styles from "./page.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.background}>
        <div className={styles.profile}>
          <Image
            src="/me.jpg"
            alt="A Portrait of myself"
            width={150}
            height={150}
            className={styles.avatar}
          />
          <h1>Julian Schumacher</h1>
          <h2>Cyber Security Student</h2>
        </div>
        <div className={styles.links}>
          <div className={styles.outerLinkDiv}>
            <h3>Socials</h3>
            <p>Let&rsquo;s connect</p>
            <div className={styles.innerLinkDiv}>
              <ul>
                <li>
                  <Link href="https://github.com/juliandevelops" target="_blank">
                    Github
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/julian-schumacher-b6005021a/"
                    target="_blank"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  < Link href="https://x.com/julian_develops" target="_blank">
                    X
                  </Link>
                </li>
                <li>
                  <Link href="https://instagram.com/juliandevelops" target="_blank">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.patreon.com/juliandevelops"
                    target="_blank"
                  >
                    Patreon
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.outerLinkDiv}>
            <h3>Other Links</h3>
            <p>Projects and Connections</p>
            <div className={styles.innerLinkDiv}>
              <ul>
                <li>
                  <Link href="https://v3s.tech" target="_blank">
                    Virtual Safety & Security Systems
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://juliandevelops.com"
                    target="_blank"
                  >
                    Julian Develops
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://apps.apple.com/de/developer/julian-schumacher/id1681063160"
                    target="_blank"
                  >
                    App Store
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://play.google.com/store/apps/developer?id=Julian+Schumacher"
                    target="_blank"
                  >
                    Play Store
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div >
    </main >
  );
}
