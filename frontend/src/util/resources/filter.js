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
