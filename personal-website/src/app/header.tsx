import Link from "next/link"
import styles from "./header.module.scss"

export default function Header() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href="/projects/">Projects</Link>
                </li>
                <li>
                    <Link href='/legal/privacy/'>Privacy Policy</Link>
                </li>
                <li>
                    <Link href='/support/'>Support</Link>
                </li>
            </ul>
        </nav>
    )
}
