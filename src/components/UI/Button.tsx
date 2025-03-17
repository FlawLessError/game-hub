import styles from "./Button.module.scss";

import { ComponentPropsWithoutRef } from "react";

type ButtonProps = { className: string } & ComponentPropsWithoutRef<"button">;

const Button = (props: ButtonProps) => {
  const { className, ...rest } = props;

  return <button className={`${className} ${styles.button}`} {...rest} />;
};

export default Button;
