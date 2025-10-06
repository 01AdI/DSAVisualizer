// src/components/algorithms/MergeSort.js

export default function* MergeSort(arr) {
  let array = [...arr]; // clone so we don't mutate props
  const n = array.length;

  function* merge(start, mid, end) {
    let left = array.slice(start, mid + 1);
    let right = array.slice(mid + 1, end + 1);

    let i = 0, j = 0, k = start;

    while (i < left.length && j < right.length) {
      // highlight comparison
      yield { type: "compare", indices: [k], array: [...array] };

      if (left[i] <= right[j]) {
        array[k] = left[i];
        i++;
      } else {
        array[k] = right[j];
        j++;
      }

      yield { type: "swap", indices: [k], array: [...array] };
      k++;
    }

    while (i < left.length) {
      array[k] = left[i];
      yield { type: "swap", indices: [k], array: [...array] };
      i++;
      k++;
    }

    while (j < right.length) {
      array[k] = right[j];
      yield { type: "swap", indices: [k], array: [...array] };
      j++;
      k++;
    }

    // mark this whole section sorted
    yield { type: "markSorted", indices: Array.from({ length: end - start + 1 }, (_, idx) => start + idx), array: [...array] };
  }

  function* mergeSortHelper(start, end) {
    if (start >= end) return;
    const mid = Math.floor((start + end) / 2);

    yield* mergeSortHelper(start, mid);
    yield* mergeSortHelper(mid + 1, end);
    yield* merge(start, mid, end);
  }

  yield* mergeSortHelper(0, n - 1);

  yield { type: "complete", array: [...array] };
}
