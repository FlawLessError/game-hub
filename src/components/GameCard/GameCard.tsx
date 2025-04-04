import styles from "./GameCard.module.scss";

import { Link } from "react-router-dom";
import { Game } from "../../entities/Game";
import PlatformsIcons from "./PlatformsIcons";
import CriticScore from "./CriticScore";
import imageCrop from "../../services/image-crop";

type Props = {
  game: Game;
};

const GameCard = ({ game }: Props) => {
  return (
    <div className={styles.gameCard}>
      {imageCrop(game.background_image) ? (
        <div className={styles.img}>
          <img src={imageCrop(game.background_image)!} alt="" />
        </div>
      ) : (
        <div className={styles.img}></div>
      )}
      <div className={`${styles.info} flow-content`}>
        <div className={styles.platforms_metric}>
          <PlatformsIcons
            platforms={game.parent_platforms?.map(({ platform }) => platform)}
          />
          {game.metacritic && <CriticScore metacritic={game.metacritic} />}
        </div>
        <Link to={`games/${game.slug}`} className={styles.title}>
          {game.name}
        </Link>
      </div>
    </div>
  );
};

export default GameCard;
