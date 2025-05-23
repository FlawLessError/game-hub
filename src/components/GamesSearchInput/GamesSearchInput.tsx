import { FormEvent, useRef } from "react";
import styles from "./GamesSearchInput.module.scss";

import { FaSearch } from "react-icons/fa";
import { changeSearchQuery } from "../../store/gameQueries-slice";
import { useAppDispatch } from "../../store/hooks";
import { useNavigate } from "react-router-dom";

const GamesSearchInput = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(changeSearchQuery(searchRef.current!.value));
    searchRef.current!.value = "";
    navigate("/");
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
