import styles from "./SwiperPads.module.scss";

import Button from "../UI/Button";
import { useSwiper } from "swiper/react";
import { BsFillCaretRightFill } from "react-icons/bs";
import { useEffect, useState } from "react";

const RightButton = () => {
  const swiper = useSwiper();

  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    const updateState = () => setIsEnd(swiper.isEnd);
    swiper.on("slideChange", updateState);
    return () => swiper.off("slideChange", updateState);
  }, [swiper]);

  if (isEnd) return null;

  return (
    <Button
      className={styles.button}
      data-type="right"
      onClick={() => swiper.slideNext()}
    >
      <BsFillCaretRightFill />
    </Button>
  );
};

export default RightButton;
