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
  const { data, error, loading } = useGenres();
  const stateData = useAppSelector((state) => state.gameQueries);
  const dispatch = useAppDispatch();

  const handleChangeGenre = (genre: GenreType) => {
    dispatch(changeGameQuery({ ...stateData, genre }));
  };

  if (error) return null;
  if (loading) return <GenresPanelSkeleton className={className} />;

  return (
    <aside className={`flow-content ${className}`}>
      <h2 className={styles.heading}>Genres</h2>
      <div className={styles.panel}>
        <ul className="flow-content">
          {data.map((genre) => (
            <li key={genre.id} className={styles.genre}>
              <Button
                data-type="link"
                className={`${styles.title} ${stateData.genre?.id === genre.id && styles.scaleUp}`}
                onClick={() => handleChangeGenre(genre)}
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
