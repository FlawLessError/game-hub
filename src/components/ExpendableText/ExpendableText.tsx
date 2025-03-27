import { useState } from "react";
import Button from "../UI/Button";

type Props = {
  children: string;
};

const ExpendableText = ({ children }: Props) => {
  const limit = 300;
  const [expended, setExpended] = useState(children.length < limit);
  const text = expended ? children : children.slice(0, limit) + "...";

  return (
    <div className="flow-content">
      <p>{text}</p>
      <Button data-type="primary" onClick={() => setExpended((prev) => !prev)}>
        {expended ? "Show less" : "Show more"}
      </Button>
    </div>
  );
};

export default ExpendableText;
