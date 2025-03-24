import styles from "./Button.module.scss";

import { ComponentPropsWithRef } from "react";

type ButtonProps = { className?: string } & ComponentPropsWithRef<"button">;

const Button = (props: ButtonProps) => {
  const { className, ...rest } = props;

  return <button className={`${className} ${styles.button}`} {...rest} />;
};

export default Button;
