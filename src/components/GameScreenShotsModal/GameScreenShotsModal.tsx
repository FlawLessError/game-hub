import styles from "./GameScreenShotsModal.module.scss";

import useGameScreenShots from "../../hooks/useGameScreenShots";

import { IoMdExit } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Zoom, Pagination, EffectCreative } from "swiper/modules";

import "../../../node_modules/swiper/swiper.scss";
import "../../../node_modules/swiper/modules/navigation.scss";
import "../../../node_modules/swiper/modules/pagination.scss";
import "../../../node_modules/swiper/modules/zoom.scss";

import Button from "../UI/Button";
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";

type Props = {
  slug: string;
  index: number;
  onSetVisisble: () => void;
};

const GameScreenShotsModal = ({ slug, index, onSetVisisble }: Props) => {
  const { data, error } = useGameScreenShots(slug);

  if (error) return null;

  return (
    <>
      <div className={`${styles.swiperContainer}`}>
        <div className="container" data-type="wide">
          <Button
            onClick={() => onSetVisisble()}
            data-type="primary"
            className={styles.exitButton}
          >
            <IoMdExit />
          </Button>
          <Swiper
            className={styles.swiper}
            effect={"creative"}
            initialSlide={index}
            modules={[Zoom, Pagination, EffectCreative]}
            creativeEffect={{
              prev: {
                translate: [0, 0, -800],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            zoom={true}
            pagination={{
              el: `.${styles.paginationContainer}`,
              clickable: true,
            }}
          >
            <LeftButton />
            {data?.results.map((shot) => (
              <SwiperSlide className={styles.swiperSlide} key={shot.id}>
                <div className="swiper-zoom-container">
                  <img className={styles.screenshot} src={shot.image} alt="" />
                </div>
              </SwiperSlide>
            ))}
            <RightButton />
          </Swiper>
          <div className={styles.paginationContainer} />
        </div>
      </div>
    </>
  );
};

export default GameScreenShotsModal;
