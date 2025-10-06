export  default function* SelectionSort(inputArray){
    const a = inputArray.slice();
    const n = a.length;

    for (let i = 0; i < n - 1; ++i) {

        // Assume the current position holds
        // the minimum element
        let min_idx = i;

        // Iterate through the unsorted portion
        // to find the actual minimum

        for (let j = i + 1; j < n; ++j) {
            yield { type: "compare", indices: [j, min_idx], array: a.slice() };

            if (a[j] < a[min_idx]) {

                // Update min_idx if a smaller
                // element is found
                min_idx = j; 
            }
        }

        // Move minimum element to its
        // correct position
       [a[i], a[min_idx]] = [a[min_idx], a[i]];
       yield { type: "swap", indices: [i, min_idx], array: a.slice() };


        yield { type: "markSorted", index: i, array: a.slice() };
    }
     yield { type: "complete", array: a.slice() };
}