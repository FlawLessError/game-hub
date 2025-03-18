import styles from "./PlatformSelect.module.scss";

import usePlatforms from "../../hooks/usePlatforms";
import ComboBox from "../UI/ComboBox";
import PlatformSelectSkeleton from "./PlatformSelectSkeleton";

const PlatformSelect = () => {
  const { data, error, loading } = usePlatforms();
  if (error) return null;
  return (
    <div className={styles.platforms}>
      {loading && <PlatformSelectSkeleton />}
      {!loading && (
        <ComboBox
          title={"Platforms"}
          items={data.map((platform) => platform.name)}
        />
      )}
    </div>
  );
};

export default PlatformSelect;
