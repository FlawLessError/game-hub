import styles from "./GameDetails.module.scss";
import { Game } from "../../entities/Game";
import { Link } from "react-router-dom";

const GameDetails = (props: Game) => {
  return (
    <>
      <div className={styles.GameDetails}>
        {props.parent_platforms && (
          <div>
            <h3 className={styles.heading}>Platforms</h3>
            <ul>
              {props.parent_platforms.map((parent, i) => (
                <li key={parent.platform.id}>
                  {parent.platform.name}
                  {props.parent_platforms[i + 1] && ","}
                </li>
              ))}
            </ul>
          </div>
        )}

        {props.genres && (
          <div>
            <h3 className={styles.heading}>Genres</h3>
            <ul>
              {props.genres.map((genre, i) => (
                <li key={genre.id}>
                  {genre.name}
                  {props.genres[i + 1] && ","}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <h3 className={styles.heading}>Release Date</h3>
          <span>{props.released || "TBA"}</span>
        </div>

        {props.developers && (
          <div>
            <h3 className={styles.heading}>Developer</h3>
            <ul>
              {props.developers.map((dev, i) => (
                <li key={dev.id}>
                  {dev.name} {props.developers[i + 1] && ","}
                </li>
              ))}
            </ul>
          </div>
        )}

        {props.publishers && (
          <div>
            <h3 className={styles.heading}>Publisher</h3>
            <ul>
              {props.publishers.map((pub) => (
                <li key={pub.id}>{pub.name}</li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <h3 className={styles.heading}>Age rating</h3>
          <span>{props.esrb_rating?.name || "Not Rated"}</span>
        </div>

        {props.tags && (
          <div>
            <h3 className={styles.heading}>Tags</h3>
            <ul>
              {props.tags.map((tag, i) => (
                <li key={tag.id}>
                  {tag.name}
                  {props.tags[i + 1] && ","}
                </li>
              ))}
            </ul>
          </div>
        )}

        {props.website && (
          <div>
            <h3 className={styles.heading}>Website</h3>
            <Link to={props.website} target="_">
              {props.website}
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default GameDetails;
