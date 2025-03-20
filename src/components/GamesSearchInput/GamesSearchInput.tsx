import styles from "./GamesSearchInput.module.scss";

import { FaSearch } from "react-icons/fa";

const GamesSearchInput = () => {
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.search}
        type="search"
        aria-label="search games"
        placeholder="Search Games..."
      />
      <div className={styles.icon}>
        <FaSearch />
      </div>
    </div>
  );
};

export default GamesSearchInput;
