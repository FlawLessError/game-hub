import styles from "./ErrorMessage.module.scss";

type Props = {
  title: string;
  message: string;
};

const ErrorMessage = ({ title, message }: Props) => {
  return (
    <div className={`${styles.ErrorMessage} flow-content`}>
      <h1>{title}</h1>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
