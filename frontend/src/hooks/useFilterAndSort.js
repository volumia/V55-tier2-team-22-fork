export function filterByTextAndTags(resources, searchTerm, selectedTags, tagMap) {
  return resources.filter((resource) => {
    // Filter by search term
    const matchesSearch = !searchTerm || resource.name.toLowerCase().includes(searchTerm.toLowerCase());

    // Filter by tags
    const matchesTags =
      selectedTags.length === 0 ||
      (() => {
        const resourceTagNames = (resource.appliedTags || []).map((id) => tagMap[id]);
        return selectedTags.some((tag) => resourceTagNames.includes(tag));
      })();

    return matchesSearch && matchesTags;
  });
}

export function sortByTitleOrDate(resources, sortBy, sortOrder) {
  return resources.sort((a, b) => {
    let aValue = sortBy === "title" ? a.name.toLowerCase() : a.createdAt;
    let bValue = sortBy === "title" ? b.name.toLowerCase() : b.createdAt;

    if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
    if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });
}

function useFilterAndSort(allResources, filterer, sorter) {
  function filterAndSortResources() {
    let recs = filterer(allResources);
    recs = sorter(recs);
    return recs;
  }

  return {
    filterAndSortResources
  };
}

export default useFilterAndSort;
