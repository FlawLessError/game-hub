import styles from "./GenresPanel.module.scss";

import useGenres from "../../hooks/useGerners";
import imageCrop from "../../services/image-crop";
import GenresPanelSkeleton from "./GenresPanelSkeleton";
import Button from "../UI/Button";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { changeGameQuery, GenreType } from "../../store/gameQueries-slice";

type Props = {
  className: string;
};

const GenresPanel = ({ className }: Props) => {
  const { data, error, isLoading } = useGenres();
  const stateData = useAppSelector((state) => state.gameQueries);
  const dispatch = useAppDispatch();

  const handleChangeGenre = (genreId: GenreType) => {
    dispatch(changeGameQuery({ ...stateData, genreId }));
  };

  if (error) return null;
  if (isLoading) return <GenresPanelSkeleton className={className} />;

  return (
    <aside className={`flow-content ${className}`}>
      <h2 className={styles.heading}>Genres</h2>
      <div className={styles.panel}>
        <ul className="flow-content">
          {data?.results.map((genre) => (
            <li key={genre.id} className={styles.genre}>
              <Button
                data-type="link"
                className={`${styles.title} ${stateData.genreId === genre.id && styles.scaleUp}`}
                onClick={() => handleChangeGenre(genre.id)}
              >
                <img
                  src={imageCrop(genre.image_background)}
                  alt=""
                  aria-hidden="true"
                />
                {genre.name}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default GenresPanel;
