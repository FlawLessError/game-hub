import styles from "./GameCard.module.scss";

import { Link } from "react-router-dom";
import { Game } from "../../hooks/useGames";
import PlatformsIcons from "./PlatformsIcons";

type Props = {
  game: Game;
};

const GameCard = ({ game }: Props) => {
  return (
    <div className={styles.gameCard}>
      <img src={game.background_image} alt="" />
      <div className={`${styles.info} flow-content`}>
        <div className={styles.platforms_metric}>
          <PlatformsIcons
            platforms={game.parent_platforms.map(({ platform }) => platform)}
          />
          <p
            data-type={
              game.metacritic >= 70
                ? "good"
                : game.metacritic >= 40
                  ? "ok"
                  : "bad"
            }
          >
            {game.metacritic}
          </p>
        </div>
        <Link to="#" className={styles.title}>
          {game.name}
        </Link>
      </div>
    </div>
  );
};

export default GameCard;
