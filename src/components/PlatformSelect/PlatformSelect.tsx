import styles from "./PlatformSelect.module.scss";

import usePlatforms, { Platforms } from "../../hooks/usePlatforms";
import ComboBox from "../UI/ComboBox";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import FiltersSkeleton from "../FiltersSkeleton/FiltersSkeleton";
import { changeGameQuery } from "../../store/gameQueries-slice";

const PlatformSelect = () => {
  const { data, error, loading } = usePlatforms();
  const stateData = useAppSelector((state) => state.gameQueries);
  const dispatch = useAppDispatch();

  const onSelectItem = (item: Platforms) => {
    dispatch(changeGameQuery({ ...stateData, platformId: item.id }));
  };

  if (error) return null;
  return (
    <div className={styles.platforms}>
      {loading && <FiltersSkeleton />}
      {!loading && (
        <ComboBox<Platforms>
          title={"Platforms"}
          items={data.map((platform) => platform)}
          onSelectItem={onSelectItem}
        />
      )}
    </div>
  );
};

export default PlatformSelect;
