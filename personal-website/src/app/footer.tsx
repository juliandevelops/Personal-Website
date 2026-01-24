import Link from "next/link"
import Image from "next/image"
import styles from "./footer.module.scss"

export default function Footer() {
    return (
        <footer>
            <p>© 2026 Julian Schumacher. All rights reserved.</p>
            <p style={{ color: "#B0892E" }}>
                <Link href="/status">Info:</Link>
                Personal site in progress — updates are happening.
            </p>
            <div className={styles.links}>
                <div className={styles.linkColumn}>
                    <h3>Other websites</h3>
                    <div className={styles.linkRow}>
                        <Image
                            src="/juliandevelops_icon.png"
                            alt="Juliandevelops Icon"
                            width={12.5}
                            height={12.5}
                            style={{ borderRadius: "50%" }}
                        />
                        <Link href="https://juliandevelops.com">juliandevelops.com</Link>
                    </div>
                </div>
                <div className={styles.linkColumn}>
                    <h3>Work</h3>
                    <div className={styles.linkRow}>
                        <Image
                            src="/socials/github_icon.svg"
                            alt="GitHub Icon"
                            height={12.5}
                            width={12.5}
                        />
                        <Link href="https://github.com/juliandevelops">@juliandevelops</Link>
                    </div>
                    <div className={styles.linkRow}>
                        <Image
                            src="/socials/linkedin_icon.png"
                            alt="LinkedIn Icon"
                            width={12.5}
                            height={12.5}
                        />
                        <Link href="https://linkedin.com">Julian Schumacher</Link>
                    </div>
                </div>
                <div className={styles.linkColumn}>
                    <h3>Socials</h3>
                    <div className={styles.linkRow}>
                        <Image
                            src="/socials/instagram_icon.svg"
                            alt="Instagram Icon"
                            width={12.5}
                            height={12.5}
                        />
                        <Link href="https://instagram.com/jules.idle">@jules.idle</Link>
                    </div>
                    <div className={styles.linkRow}>
                        <Image
                            src="/socials/x_icon.png"
                            alt="X Icon"
                            width={12.5}
                            height={12.5}
                        />
                        <Link href="https://x.com/julesidle">@julesidle</Link>
                    </div>
                    <div className={styles.linkRow}>
                        <Image
                            src="/socials/tiktok_icon.png"
                            alt="TikTok Icon"
                            width={12.5}
                            height={12.5}
                        />
                        <Link href="https://tiktok.com/julesidle">@julesidle</Link>
                    </div>
                </div>
            </div>
            <div>
                <Link href="mailto:support@julianschumacher.dev?subject=Support Request [via Website]&body=[Support request triggered by website footer]">Support request</Link>
                <Link href="/legal/privacy">Privacy Policy</Link>
            </div>
            <div>
                <p>Generative AI was used to assist in the creation of this website.</p>
            </div>
        </footer >
    )
}
