import styles from "./GenresPanel.module.scss";

import useGenres from "../../hooks/useGerners";
import imageCrop from "../../services/image-crop";
import { changeGenre, GenreType } from "../../store/gameQueries-slice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Button from "../UI/Button";
import GenresPanelSkeleton from "./GenresPanelSkeleton";
import ExitButton from "../ExitButton/ExitButton";
// import { useState } from "react";

type Props = {
  className: string;
};

const GenresPanel = ({ className }: Props) => {
  const { data, error, isLoading } = useGenres();
  // const [isVisible, setVisible] = useState(false);
  const genreId = useAppSelector((state) => state.gameQueries.genreId);
  const dispatch = useAppDispatch();

  const handleChangeGenre = (genreId: GenreType) => {
    dispatch(changeGenre(genreId));
  };

  if (error) return null;
  if (isLoading) return <GenresPanelSkeleton className={className} />;

  return (
    <aside className={`flow-content ${className} ${styles.asideContainer}`}>
      <div className="container" data-type="wide">
        <div className={styles.heading}>
          <h2>Genres</h2>
          <ExitButton onSetVisible={() => {}} />
        </div>
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
      </div>
    </aside>
  );
};

export default GenresPanel;
