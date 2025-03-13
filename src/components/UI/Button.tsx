import styles from "./Button.module.scss";

import { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button">;

const Button = ({ ...rest }: ButtonProps) => {
  return <button className={styles.button} {...rest} />;
};

export default Button;
