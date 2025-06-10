import { computeRangeFromPageIndex } from "@/util/pagination";
import { useState } from "react";
computeRangeFromPageIndex;

export function usePaginator(pageSize) {
  const [itemDisplayRange, setItemDisplayRange] = useState(computeRangeFromPageIndex(0, pageSize));

  function goToPage(index) {
    setItemDisplayRange(computeRangeFromPageIndex(index, pageSize));
  }

  return {
    itemDisplayRange,
    goToPage
  };
}
