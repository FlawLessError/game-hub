import styles from "./GenresPanel.module.scss";

import useGenres from "../../hooks/useGerners";
import imageCrop from "../../services/image-crop";
import { changeGenre, GenreType } from "../../store/gameQueries-slice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Button from "../UI/Button";
import GenresPanelSkeleton from "./GenresPanelSkeleton";

type Props = {
  className: string;
};

const GenresPanel = ({ className }: Props) => {
  const { data, error, isLoading } = useGenres();
  const genreId = useAppSelector((state) => state.gameQueries.genreId);
  const dispatch = useAppDispatch();

  const handleChangeGenre = (genreId: GenreType) => {
    dispatch(changeGenre(genreId));
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
                className={`${styles.title} ${genreId === genre.id && styles.scaleUp}`}
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
