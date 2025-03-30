import styles from "./ExpendableText.module.scss";

import { useState } from "react";
import Button from "../UI/Button";

type Props = {
  children: string;
};

const ExpendableText = ({ children }: Props) => {
  const limit = 300;
  const [expended, setExpended] = useState(children.length < limit);
  const text = expended ? children : children.slice(0, limit) + "...";

  if (children.length === 0)
    return (
      <div>
        <p className={styles.expendableText}>No Description</p>
      </div>
    );

  if (children.length < limit)
    return (
      <div>
        <p className={styles.expendableText}>{children}</p>
      </div>
    );

  return (
    <div className="flow-content">
      <p className={styles.expendableText}>{text}</p>
      <Button data-type="primary" onClick={() => setExpended((prev) => !prev)}>
        {expended ? "Show less" : "Show more"}
      </Button>
    </div>
  );
};

export default ExpendableText;
