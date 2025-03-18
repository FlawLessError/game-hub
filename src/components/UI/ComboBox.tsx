import styles from "./ComboBox.module.scss";
import { RiArrowDropDownLine } from "react-icons/ri";

import { CSSTransition } from "react-transition-group";

import { useEffect, useRef, useState } from "react";

type Props = {
  title: string;
  items: unknown[];
};

const ComboBox = (props: Props) => {
  const [title, setTitle] = useState(props.title);
  const [itemsVisible, setItemsVisible] = useState(false);
  const nodeRef = useRef<HTMLUListElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const item = document.getElementsByClassName("item");

  const handleClickedButton = () => {
    if (itemsVisible) {
      setItemsVisible(false);
    } else {
      setItemsVisible(true);
    }
  };
  const handleChangeItem = (item: string) => {
    setTitle(item);
    setItemsVisible(false);
  };

  useEffect(() => {
    const ClickAway = (e: MouseEvent) => {
      if (e.target !== btnRef.current) {
        setItemsVisible(false);
      }
    };

    const TabKeyFocus = (e: KeyboardEvent) => {
      if (
        e.shiftKey &&
        e.key === "Tab" &&
        document.activeElement === btnRef.current
      )
        setItemsVisible(false);
      if (e.key === "Tab" && document.activeElement === item[item.length - 1])
        setItemsVisible(false);
    };

    window.addEventListener("click", ClickAway);

    window.addEventListener("keydown", TabKeyFocus);

    return () => {
      window.removeEventListener("click", ClickAway);
      window.removeEventListener("keydown", TabKeyFocus);
    };
  }, [itemsVisible, item]);

  return (
    <div className={`${styles.ComboBox} flow-content`}>
      <button
        ref={btnRef}
        role="combobox"
        aria-labelledby="comboBoxTitle"
        aria-controls="listBox1"
        aria-expanded={itemsVisible}
        onClick={handleClickedButton}
      >
        <span id="comboBoxTitle">{title}</span>
        <span className={styles.icon} data-type={!itemsVisible && "spinned"}>
          <RiArrowDropDownLine />
        </span>
      </button>
      <CSSTransition
        nodeRef={nodeRef}
        in={itemsVisible}
        timeout={100}
        classNames={{
          enter: styles.enter,
          enterActive: styles.enterActive,
          exit: styles.exit,
          exitActive: styles.exitActive,
        }}
        unmountOnExit
        mountOnEnter
      >
        <ul ref={nodeRef} role="listbox" id="listBox1" className={styles.items}>
          {props.items.map((item) => (
            <li
              tabIndex={0}
              className="item"
              key={item}
              onClick={() => handleChangeItem(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </CSSTransition>
    </div>
  );
};

export default ComboBox;
