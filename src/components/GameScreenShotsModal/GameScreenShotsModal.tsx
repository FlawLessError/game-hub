import styles from "./GameScreenShotsModal.module.scss";

import useGameScreenShots from "../../hooks/useGameScreenShots";

import { Swiper, SwiperSlide } from "swiper/react";
import { Zoom, Pagination, EffectCreative } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/zoom";

import LeftButton from "./LeftButton";
import RightButton from "./RightButton";
import ExitButton from "../ExitButton/ExitButton";

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
          <ExitButton onSetVisible={onSetVisisble} />
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
