import { changeSortOrder } from "../../store/gameQueries-slice";
import { useAppDispatch } from "../../store/hooks";
import ComboBox from "../UI/ComboBox";
import styles from "./SortSelector.module.scss";

type ItemsType = { id: number; value: string; name: string };

const SortSelector = () => {
  const dispatch = useAppDispatch();

  const items: ItemsType[] = [
    { id: 1, value: "", name: "Relevance" },
    { id: 2, value: "-added", name: "Date Added" },
    { id: 3, value: "name", name: "Name" },
    { id: 4, value: "-released", name: "Release Date" },
    { id: 5, value: "-metacritic", name: "Popularity" },
    { id: 6, value: "-rating", name: "Average Rating" },
  ];

  const onSelectItem = (id: number) => {
    dispatch(
      changeSortOrder(items.find((item) => item.id === id)?.value || ""),
    );
  };

  return (
    <div className={styles.SortSelector}>
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
