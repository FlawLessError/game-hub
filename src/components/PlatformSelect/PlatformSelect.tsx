import styles from "./PlatformSelect.module.scss";

import usePlatforms, { Platforms } from "../../hooks/usePlatforms";
import ComboBox from "../UI/ComboBox";
import { useAppDispatch } from "../../store/hooks";
import { changePlatform } from "../../store/platform-slice";
import FiltersSkeleton from "../FiltersSkeleton/FiltersSkeleton";

const PlatformSelect = () => {
  const { data, error, loading } = usePlatforms();
  const dispatch = useAppDispatch();

  const onSelectItem = (item: Platforms) => {
    dispatch(changePlatform(item.id));
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
