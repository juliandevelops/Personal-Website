import styles from "./page.module.scss"

export const metadata = {
    title: "Imprint — Julian Schumacher",
    description: "Legal notice (imprint) of julianschumacher.dev pursuant to § 5 TDDDG.",
};

export default function Imprint() {
    return (
        <main className={styles.main}>
            <h1>Imprint</h1>

            <h2 className={styles.heading}>Information pursuant to § 5 TDDDG</h2>
            <p className={styles.address}>
                Julian Schumacher<br />
                Herrenberger Straße 72<br />
                71069 Sindelfingen<br />
                Germany
            </p>

            <h2 className={styles.heading}>Contact</h2>
            <p>
                Email: <a href="mailto:support@julianschumacher.dev">support@julianschumacher.dev</a>
            </p>

            <h2 className={styles.heading}>Responsible for content pursuant to § 18 (2) MStV</h2>
            <p>
                Julian Schumacher, address as above.
            </p>

            <h2 className={styles.heading}>Dispute resolution</h2>
            <p>
                I am not willing or obliged to participate in dispute resolution proceedings
                before a consumer arbitration board (§ 36 VSBG).
            </p>

            <h2 className={styles.heading}>Liability for content and links</h2>
            <p>
                As a service provider, I am responsible for my own content on these pages
                according to general legislation. However, I am not obliged to monitor
                transmitted or stored third-party information or to investigate circumstances
                that indicate illegal activity.
            </p>
            <p>
                Liability for the content of linked pages lies solely with their operators.
                At the time of linking, no legal violations were apparent; if I become aware
                of any, I will remove the link immediately.
            </p>
        </main>
    )
}
