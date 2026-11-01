'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './QuickInfoBanner.module.scss';
import type { ConsentValue } from '@/objects/cookieStore';

export default function QuickInfoBanner({
    currentValue, setCallback
}: { currentValue: ConsentValue | null, setCallback: (value: ConsentValue) => void }) {
    const [reopened, setReopened] = useState(false);

    if (currentValue && !reopened) {
        return (
            <button
                className={styles.infoButton}
                onClick={() => setReopened(true)}
                aria-label="Open cookie settings"
                title="Cookie settings"
            >
                i
            </button>
        );
    }

    return (
        <div className={styles.banner} role="region" aria-label="Cookie consent">
            <div className={styles.inner}>
                <div className={styles.content}>
                    <h3>Cookies</h3>
                    <p>
                        This site only sets technically necessary cookies to remember your
                        choice about this banner. No advertising or tracking cookies are used.
                    </p>
                    <p>
                        Optionally, with your consent, I load Vercel Speed Insights to measure
                        page performance. Details in the{' '}
                        <Link href="/legal/privacy">privacy policy</Link>.
                    </p>
                </div>
                <div className={styles.actions}>
                    <button
                        className={styles.secondaryButton}
                        onClick={() => setCallback('essential')}
                    >
                        Essential only
                    </button>
                    <button
                        className={styles.primaryButton}
                        onClick={() => setCallback('all')}
                    >
                        Accept all
                    </button>
                </div>
            </div>
        </div>
    );
}
