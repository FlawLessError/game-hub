import styles from "./GenresPanel.module.scss";

import useGenres from "../../hooks/useGerners";
import imageCrop from "../../services/image-crop";
import GenresPanelSkeleton from "./GenresPanelSkeleton";
import Button from "../UI/Button";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { changeGenre } from "../../store/genre-slice";

type Props = {
  className: string;
};

const GenresPanel = ({ className }: Props) => {
  const { data, error, loading } = useGenres();
  const dispatch = useAppDispatch();
  const genreId = useAppSelector((state) => state.genreId);

  if (error) return null;
  if (loading) return <GenresPanelSkeleton className={className} />;

  return (
    <aside className={`${className} ${styles.panel}`}>
      <ul className="flow-content">
        {data.map((genre) => (
          <li key={genre.id} className={styles.genre}>
            <Button
              data-type="link"
              className={`${styles.title} ${genreId === genre.id && styles.scaleUp}`}
              onClick={() => dispatch(changeGenre(genre.id))}
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
    </aside>
  );
};

export default GenresPanel;
