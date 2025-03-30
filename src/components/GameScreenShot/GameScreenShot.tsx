import styles from "./GameScreenShot.module.scss";

import { TbCarouselHorizontal } from "react-icons/tb";
import useGameScreenShots from "../../hooks/useGameScreenShots";
import GameScreenShotsModal from "../GameScreenShotsModal/GameScreenShotsModal";
import imageCrop from "../../services/image-crop";
import { GameScreenShot as GameScreenShotType } from "../../entities/GameScreenShot";
import { useState } from "react";

type Props = {
  slug: string;
};

const GameScreenShot = ({ slug }: Props) => {
  const { data, error } = useGameScreenShots(slug);
  const [isVisible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);

  const viewAllHandler = (i: number) => {
    setIndex(i);
    setVisible(true);
  };

  const setVisibleHandler = () => {
    setVisible(false);
  };

  if (error) return null;

  const maxShots: GameScreenShotType[] = [];

  if (data?.results) {
    for (let i = 0; i < data.results.length; i++) {
      const shot = data.results[i];
      if (i > 2) continue;
      maxShots.push(shot);
    }
  }

  if (maxShots.length === 0) return null;

  return (
    <div className={styles.miniShots}>
      {maxShots.map((shot, i) => (
        <img
          onClick={() => viewAllHandler(i)}
          className={styles.miniShot}
          src={imageCrop(shot.image)}
          alt=""
        />
      ))}
      <button
        onClick={() => viewAllHandler(0)}
        tabIndex={-1}
        aria-hidden={true}
        className={styles.swiperButton}
      >
        <TbCarouselHorizontal />
        View all
      </button>
      {isVisible && (
        <GameScreenShotsModal
          index={index}
          onSetVisisble={setVisibleHandler}
          slug={slug}
        />
      )}
    </div>
  );
};

export default GameScreenShot;
