import styles from "./GameGrid.module.scss";

import useGames from "../../hooks/useGames";
import DynamicHeading from "../DynamicHeading/DynamicHeading";
import GameCard from "../GameCard/GameCard";
import GameCardSkeleton from "../GameCardSkeleton/GameCardSkeleton";
import PlatformSelect from "../PlatformSelect/PlatformSelect";
import SortSelector from "../SortSelector/SortSelector";
import LoadMore from "../LoadMore/LoadMore";
import { useEffect, useRef } from "react";

type Props = {
  className: string;
};

const GameGrid = ({ className }: Props) => {
  const mainRef = useRef<HTMLElement>(null);
  const loadRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const options = {
      root: window.document,
      rootMargin: "0px",
      threshold: 0,
    };

    const intersectionCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLButtonElement;
          target.click();
        }
      });
    };

    const observer = new IntersectionObserver(intersectionCallback, options);
    if (loadRef.current) observer.observe(loadRef.current);

    // NOTE: It does rerender.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadRef.current]);

  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGames();

  const skeletonCards: number[] = new Array(8).fill(0).map((_, i) => i + 1);

  if (error) return <h1 className={styles.error}>{error.message}</h1>;

  return (
    <main ref={mainRef} className={`${className} flow-content`}>
      <DynamicHeading />
      <div className={styles.filters}>
        <PlatformSelect />
        <SortSelector />
      </div>
      <ul className={`auto-fill-columns`}>
        {isLoading &&
          skeletonCards.map((skel) => (
            <li key={skel}>
              <GameCardSkeleton />
            </li>
          ))}
        {!isLoading &&
          data?.pages.map((page) =>
            page.results.map((game) => (
              <li key={game.id}>
                <GameCard game={game} />
              </li>
            )),
          )}
      </ul>
      {hasNextPage && (
        <LoadMore
          ref={loadRef}
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
        >
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </LoadMore>
      )}
    </main>
  );
};

export default GameGrid;
