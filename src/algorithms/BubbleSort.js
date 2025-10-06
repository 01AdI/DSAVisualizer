export  default function* BubbleSort(inputArray) {
  const a = inputArray.slice();
  const n = a.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // comparing j and j+1
      yield { type: "compare", indices: [j, j + 1], array: a.slice() };
      if (a[j] > a[j + 1]) {
        // swap in generator's internal array
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        yield { type: "swap", indices: [j, j + 1], array: a.slice() };
      }
    }
    // mark largest element as sorted
    yield { type: "markSorted", index: n - i - 1, array: a.slice() };
  }
  yield { type: "complete", array: a.slice() };
}

