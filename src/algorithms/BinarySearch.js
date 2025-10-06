// algorithms/BinarySearch.js
export default function* BinarySearch(a, target) {
//   const a = inputArray.slice().sort((x, y) => x - y); // must be sorted
  let low = 0;
  let high = a.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    // Highlight the mid index being checked
    yield { type: "compare", indices: [mid], array: a.slice() };

    if (a[mid] === target) {
      // Found
      yield { type: "found", indices: [mid], array: a.slice() };
      yield { type: "complete", array: a.slice() };
      return;
    } else if (a[mid] < target) {
      // Discard left half
      yield {
        type: "discard",
        indices: Array.from({ length: mid - low + 1 }, (_, i) => low + i),
        array: a.slice(),
      };
      low = mid + 1;
    } else {
      // Discard right half
      yield {
        type: "discard",
        indices: Array.from({ length: high - mid + 1 }, (_, i) => mid + i),
        array: a.slice(),
      };
      high = mid - 1;
    }
  }

  // Not found
  yield { type: "notFound", indices: [], array: a.slice() };
  yield { type: "complete", array: a.slice() };
}
