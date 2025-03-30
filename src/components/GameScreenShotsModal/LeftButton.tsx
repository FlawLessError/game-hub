import styles from "./SwiperPads.module.scss";

import Button from "../UI/Button";
import { useSwiper } from "swiper/react";
import { BsFillCaretLeftFill } from "react-icons/bs";
import { useEffect, useState } from "react";

const LeftButton = () => {
  const swiper = useSwiper();

  const [isBeginning, setIsEnd] = useState(swiper.isBeginning);

  useEffect(() => {
    const updateState = () => setIsEnd(swiper.isBeginning);
    swiper.on("slideChange", updateState);
    return () => swiper.off("slideChange", updateState);
  }, [swiper]);

  if (isBeginning) return null;

  return (
    <Button
      className={styles.button}
      data-type="left"
      onClick={() => swiper.slidePrev()}
    >
      <BsFillCaretLeftFill />
    </Button>
  );
};

export default LeftButton;
