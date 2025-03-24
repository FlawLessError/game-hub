import styles from "./SortSelector.module.scss";
import ComboBox from "../UI/ComboBox";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { changeGameQuery } from "../../store/gameQueries-slice";

type ItemsType = { id: number; value: string; name: string };

const SortSelector = () => {
  const stateData = useAppSelector((state) => state.gameQueries);
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
      changeGameQuery({
        ...stateData,
        sortOrder: items.find((item) => item.id === id)?.value || "",
      }),
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
