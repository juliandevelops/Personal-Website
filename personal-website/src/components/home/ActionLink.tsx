import React from "react";
import styles from "./ActionLink.module.scss";

type ActionLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export default function ActionLink({
  variant = "primary",
  className,
  ...props
}: ActionLinkProps) {
  const classes = [styles.button, styles[variant], className]
    .filter(Boolean)
    .join(" ");

  return <a className={classes} {...props} />;
}
