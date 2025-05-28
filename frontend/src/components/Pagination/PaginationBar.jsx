import { useEffect, useState } from "react";
import styles from "./PaginationBar.module.css";
import { computePageIndex, computePageArrangement } from "@/util/pagination";
import PageButton from "./PageButton.jsx";

const maxVisiblePages = 5;

function PaginationBar({ firstItemIndex, totalNumberOfItems, itemsPerPage, onChangePage }) {
  const [currentPageIndex, setCurrentPageIndex] = useState(computePageIndex(firstItemIndex, itemsPerPage));

  const [arrangement, setArrangement] = useState(
    computePageArrangement(firstItemIndex, totalNumberOfItems, itemsPerPage, maxVisiblePages)
  );

  useEffect(() => {
    setCurrentPageIndex(computePageIndex(firstItemIndex, itemsPerPage));
    setArrangement(computePageArrangement(firstItemIndex, totalNumberOfItems, itemsPerPage, maxVisiblePages));
  }, [firstItemIndex, itemsPerPage, totalNumberOfItems]);

  function attemptChangePage(pageIndex) {
    const minPage = 0;
    const maxPage = Math.ceil(totalNumberOfItems / itemsPerPage);

    if (pageIndex >= minPage && pageIndex < maxPage) {
      onChangePage(pageIndex);
    }
  }

  return (
    <div className="w-fit ml-auto mr-auto flex flex-row gap-2 my-4">
      <button className={styles.page_button} onClick={() => attemptChangePage(currentPageIndex - 1)}>
        ⬅️
      </button>

      {arrangement.map((n) => {
        return (
          <PageButton
            key={n}
            number={n}
            isCurrent={currentPageIndex === n}
            onClick={() => attemptChangePage(n)}
          ></PageButton>
        );
      })}

      <button className={styles.page_button} onClick={() => attemptChangePage(currentPageIndex + 1)}>
        ➡️
      </button>
    </div>
  );
}

export default PaginationBar;
