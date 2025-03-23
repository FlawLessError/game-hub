import styles from "./PlatformSelect.module.scss";

import usePlatforms, { Platforms } from "../../hooks/usePlatforms";
import ComboBox from "../UI/ComboBox";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import FiltersSkeleton from "../FiltersSkeleton/FiltersSkeleton";
import { changeGameQuery } from "../../store/gameQueries-slice";

const PlatformSelect = () => {
  const { data, error, isLoading } = usePlatforms();
  const stateData = useAppSelector((state) => state.gameQueries);
  const dispatch = useAppDispatch();

  const onSelectItem = (item: Platforms) => {
    dispatch(changeGameQuery({ ...stateData, platform: item }));
  };

  if (error) return null;
  return (
    <div className={styles.platforms}>
      {isLoading && <FiltersSkeleton />}
      {!isLoading && (
        <ComboBox<Platforms>
          title={"Platforms"}
          items={data!.results.map((platform) => platform)}
          onSelectItem={onSelectItem}
        />
      )}
    </div>
  );
};

export default PlatformSelect;
