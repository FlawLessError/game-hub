import useGenres from "../../hooks/useGerners";
import usePlatform from "../../hooks/usePlatforms";
import { useAppSelector } from "../../store/hooks";
import styles from "./DynamicHeading.module.scss";

const DynamicHeading = () => {
  const stateData = useAppSelector((state) => state.gameQueries);
  const { data: dataG } = useGenres();
  const genreName = dataG?.results.find(
    (genre) => genre.id === stateData.genreId,
  )?.name;
  const { data: dataP } = usePlatform();
  const platformName = dataP?.results.find(
    (platform) => platform.id === stateData.platformId,
  )?.name;

  let title = "Games";

  if (genreName && platformName) {
    title = genreName + " Games for " + platformName;
  } else if (platformName) {
    title = "Games for " + platformName;
  } else if (genreName) {
    title = genreName + " Games";
  }

  return <h1 className={styles.heading}>{title}</h1>;
};

export default DynamicHeading;
