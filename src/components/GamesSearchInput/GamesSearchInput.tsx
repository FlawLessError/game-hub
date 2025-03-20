import { FormEvent, useRef } from "react";
import styles from "./GamesSearchInput.module.scss";

import { FaSearch } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { changeGameQuery } from "../../store/gameQueries-slice";

const GamesSearchInput = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const stateData = useAppSelector((state) => state.gameQueries);
  const dispatch = useAppDispatch();

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(
      changeGameQuery({ ...stateData, searchQuery: searchRef.current!.value }),
    );
  };

  return (
    <form onSubmit={handleSearchSubmit} className={styles.searchContainer}>
      <input
        ref={searchRef}
        className={styles.search}
        type="search"
        aria-label="search games"
        placeholder="Search Games..."
      />
      <div className={styles.icon}>
        <FaSearch />
      </div>
    </form>
  );
};

export default GamesSearchInput;
