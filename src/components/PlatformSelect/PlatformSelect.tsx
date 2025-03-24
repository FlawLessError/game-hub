import styles from "./PlatformSelect.module.scss";

import usePlatform, { Platform } from "../../hooks/usePlatforms";
import ComboBox from "../UI/ComboBox";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import FiltersSkeleton from "../FiltersSkeleton/FiltersSkeleton";
import { changeGameQuery, PlatformType } from "../../store/gameQueries-slice";

const PlatformSelect = () => {
  const { data, error, isLoading } = usePlatform();
  const stateData = useAppSelector((state) => state.gameQueries);
  const dispatch = useAppDispatch();

  const onSelectItem = (platformId: PlatformType) => {
    dispatch(changeGameQuery({ ...stateData, platformId }));
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

export default PlatformSelect;
