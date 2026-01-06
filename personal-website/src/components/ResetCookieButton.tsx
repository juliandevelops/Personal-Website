"use client";

import styles from "./ResetCookieButton.module.scss";

export default function ResetCookieButton({ callback }: { callback: () => void }) {
    return (
        <button className={styles.resetButton} onClick={callback}>
            Reset Cookies
        </button>
    );
}
