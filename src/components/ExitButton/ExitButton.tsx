import styles from "./ExitButton.module.scss";
import { IoMdExit } from "react-icons/io";
import Button from "../UI/Button";

type Props = {
  onSetVisible: () => void;
};

const ExitButton = ({ onSetVisible }: Props) => {
  return (
    <Button
      onClick={() => onSetVisible()}
      data-type="primary"
      className={styles.exitButton}
    >
      <IoMdExit />
    </Button>
  );
};

export default ExitButton;
