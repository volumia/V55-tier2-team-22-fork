import { useEffect, useState } from "react";
import styles from "./PaginationBar.module.css";
import { computePageIndex, computePageArrangement } from "@/util/pagination";
import PageButton from "./PageButton.jsx";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

function PaginationBar({ firstItemIndex, totalItems, pageSize, maxVisiblePageButtons, onChangePage }) {
  const [currentPageIndex, setCurrentPageIndex] = useState(computePageIndex(firstItemIndex, pageSize));

  const [arrangement, setArrangement] = useState(
    computePageArrangement(firstItemIndex, totalItems, pageSize, maxVisiblePageButtons)
  );

  useEffect(() => {
    setCurrentPageIndex(computePageIndex(firstItemIndex, pageSize));
    setArrangement(computePageArrangement(firstItemIndex, totalItems, pageSize, maxVisiblePageButtons));
  }, [firstItemIndex, pageSize, totalItems, maxVisiblePageButtons]);

  function attemptChangePage(pageIndex) {
    const minPage = 0;
    const maxPage = Math.ceil(totalItems / pageSize);

    if (pageIndex >= minPage && pageIndex < maxPage) {
      onChangePage(pageIndex);
    }
  }

  if (arrangement == null) {
    return null;
  }

  return (
    <div className="w-fit ml-auto mr-auto flex flex-row gap-2 my-4">
      <button className={styles.page_button} onClick={() => attemptChangePage(currentPageIndex - 1)}>
        <FaAngleLeft></FaAngleLeft>
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
        <FaAngleRight></FaAngleRight>
      </button>
    </div>
  );
}

export default PaginationBar;
