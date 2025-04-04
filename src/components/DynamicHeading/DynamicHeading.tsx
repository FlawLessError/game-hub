import useGenres from "../../hooks/useGerners";
import usePlatform from "../../hooks/usePlatforms";
import { useAppSelector } from "../../store/hooks";
import styles from "./DynamicHeading.module.scss";

const DynamicHeading = () => {
  const genreId = useAppSelector((state) => state.gameQueries.genreId);
  const platformId = useAppSelector((state) => state.gameQueries.platformId);

  const { data: genres } = useGenres();
  const genre = genres?.results.find((genre) => genre.id === genreId);

  const { data: platforms } = usePlatform();
  const platform = platforms?.results.find(
    (platform) => platform.id === platformId,
  );

  let title = "Games";

  if (genre?.name && platform?.name) {
    title = genre.name + " Games for " + platform.name;
  } else if (platform?.name) {
    title = "Games for " + platform.name;
  } else if (genre?.name) {
    title = genre.name + " Games";
  }

  return <h1 className={styles.heading}>{title}</h1>;
};

export default DynamicHeading;
