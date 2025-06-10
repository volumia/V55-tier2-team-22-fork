export function useFilterAndSort(allResources, filterer, sorter) {
  function filterAndSortResources() {
    let recs = filterer(allResources);
    recs = sorter(recs);
    return recs;
  }

  return {
    filterAndSortResources
  };
}
