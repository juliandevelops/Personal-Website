import React from "react";
import styles from "./Section.module.scss";

type SectionProps = {
  id?: string;
  label: string;
  title: string;
  children: React.ReactNode;
};

export function SectionBody({ children }: { children: React.ReactNode }) {
  return <div className={styles.sectionBody}>{children}</div>;
}

export default function Section({ id, label, title, children }: SectionProps) {
  return (
    <section className={styles.section} id={id}>
      <div className={styles.sectionHeader}>
        <p className={styles.sectionLabel}>{label}</p>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}
