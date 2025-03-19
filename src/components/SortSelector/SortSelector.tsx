import styles from "./SortSelector.module.scss";
import { Fragment } from "react/jsx-runtime";
import ComboBox from "../UI/ComboBox";
import FiltersSkeleton from "../FiltersSkeleton/FiltersSkeleton";

type ItemsType = { id: number; name: string };

const SortSelector = () => {
  const items: ItemsType[] = [
    { id: 1, name: "Relevance" },
    { id: 2, name: "Name" },
    { id: 3, name: "Release Date" },
    { id: 4, name: "Popularity" },
    { id: 5, name: "Average Rating" },
  ];

  const onSelectItem = (e: ItemsType) => {
    console.log(e);
  };

  return (
    <div className={styles.SortSelector}>
      {/* <FiltersSkeleton /> */}
      <ComboBox<ItemsType>
        preFix="Order by: "
        title={"Relevance"}
        items={items}
        onSelectItem={onSelectItem}
      />
    </div>
  );
};

export default SortSelector;
