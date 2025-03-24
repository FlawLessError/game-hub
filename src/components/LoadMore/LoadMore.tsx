import styles from "./LoadMore.module.scss";

import Button from "../UI/Button";
import { ComponentPropsWithRef, ReactNode } from "react";

type Props = { children: ReactNode } & ComponentPropsWithRef<"button">;

const LoadMore = ({ children, ...rest }: Props) => {
  return (
    <Button className={styles.LoadMore} data-type="primary" {...rest}>
      {children}
    </Button>
  );
};

export default LoadMore;
