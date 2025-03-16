import styles from "./GenresPanel.module.scss";

import useGenres from "../../hooks/useGerners";
import imageCrop from "../../services/image-crop";

type Props = {
  className: string;
};

const GenresPanel = ({ className }: Props) => {
  const { data, error, loading } = useGenres();

  return (
    <aside className={`${className} ${styles.panel}`}>
      <ul className="flow-content">
        {data.map((genre) => (
          <li key={genre.id} className={styles.genre}>
            <img
              src={imageCrop(genre.image_background)}
              alt=""
              aria-hidden="true"
            />
            <p className={styles.title}>{genre.name}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default GenresPanel;
