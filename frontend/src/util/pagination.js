export function computePageIndex(firstIndex, itemsPerPage) {
  return Math.floor(firstIndex / itemsPerPage);
}

export function computePageArrangement(firstItemIndex, totalNumberOfItems, itemsPerPage, maxNumberOfPages) {
  const centerPageIndex = computePageIndex(firstItemIndex, itemsPerPage);
  const arrangement = [centerPageIndex];

  let numberOfPreviousPages = centerPageIndex;
  const itemsRemaining = totalNumberOfItems - firstItemIndex - itemsPerPage;
  let numberOfNextPages = Math.ceil(itemsRemaining / itemsPerPage);
  const totalPages = numberOfPreviousPages + numberOfNextPages + 1;

  let pagesToAdd = Math.min(totalPages, maxNumberOfPages) - 1;
  let addLeft = true;

  while (pagesToAdd > 0) {
    if (addLeft && numberOfPreviousPages > 0) {
      const firstNumber = arrangement[0] - 1;
      arrangement.unshift(firstNumber);
      numberOfPreviousPages--;
      pagesToAdd--;
    }

    if (!addLeft && numberOfNextPages > 0) {
      const lastNumber = arrangement[arrangement.length - 1] + 1;
      arrangement.push(lastNumber);
      numberOfNextPages--;
      pagesToAdd--;
    }

    addLeft = !addLeft;
  }

  return arrangement;
}
