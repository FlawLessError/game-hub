import React from "react";
import styles from "./PlatformSelect.module.scss";

import usePlatform from "../../hooks/usePlatforms";
import { Platform } from "../../entities/Platform";
import { useAppDispatch } from "../../store/hooks";
import ComboBox from "../UI/ComboBox";

import { changePlatform, PlatformType } from "../../store/gameQueries-slice";
import FiltersSkeleton from "../FiltersSkeleton/FiltersSkeleton";

const PlatformSelect = () => {
  const { data, error, isLoading } = usePlatform();
  const dispatch = useAppDispatch();

  const onSelectItem = (platformId: PlatformType) => {
    dispatch(changePlatform(platformId));
  };

  if (error) return null;
  return (
    <div className={styles.platforms}>
      {isLoading && <FiltersSkeleton />}
      {!isLoading && (
        <ComboBox<Platform>
          title={"Platform"}
          items={data!.results.map((platform) => platform)}
          onSelectItem={onSelectItem}
        />
      )}
    </div>
  );
};

export default React.memo(PlatformSelect);
