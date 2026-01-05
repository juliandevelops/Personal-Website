import React from "react";
import styles from "./InfoCard.module.scss";

type InfoCardProps = {
  title: string;
  description: string;
};

export function InfoCardGrid({ children }: { children: React.ReactNode }) {
  return <div className={styles.grid}>{children}</div>;
}

export default function InfoCard({ title, description }: InfoCardProps) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
