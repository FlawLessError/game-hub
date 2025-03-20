import { useAppSelector } from "../../store/hooks";
import styles from "./DynamicHeading.module.scss";

const DynamicHeading = () => {
  const stateData = useAppSelector((state) => state.gameQueries);
  let title = "Games";

  if (stateData.genre?.name && stateData.platform?.name) {
    title = stateData.genre?.name + " Games for " + stateData.platform?.name;
  } else if (stateData.platform?.name) {
    title = "Games for " + stateData.platform.name;
  } else if (stateData.genre?.name) {
    title = stateData.genre.name + " Games";
  }

  return <h1 className={styles.heading}>{title}</h1>;
};

export default DynamicHeading;
