export default function* QuickSort(arr, low = 0, high = arr.length - 1) {
    const a = arr.slice(); // copy the array

    // Internal generator for partition
    function* partition(low, high) {
        const pivot = a[high];
        let i = low - 1;

        for (let j = low; j <= high - 1; j++) {
            yield { type: "compare", indices: [j, high], array: a.slice() };

            if (a[j] < pivot) {
                i++;
                [a[i], a[j]] = [a[j], a[i]];
                yield { type: "swap", indices: [i, j], array: a.slice() };
            }
        }

        [a[i + 1], a[high]] = [a[high], a[i + 1]];
        yield { type: "swap", indices: [i + 1, high], array: a.slice() };

        return i + 1;
    }

    // Recursive QuickSort generator
    function* quickSortRec(low, high) {
        if (low < high) {
            // Partition the array
            const partitionGen = partition(low, high);
            let partResult = partitionGen.next();
            while (!partResult.done) {
                yield partResult.value;
                partResult = partitionGen.next();
            }
            const pi = partResult.value; // pivot index

            // Mark pivot as sorted
            yield { type: "markSorted", index: pi, array: a.slice() };

            // Recursively sort left and right subarrays
            yield* quickSortRec(low, pi - 1);
            yield* quickSortRec(pi + 1, high);
        } else if (low === high) {
            // Single element is already sorted
            yield { type: "markSorted", index: low, array: a.slice() };
        }
    }

    yield* quickSortRec(low, high);

    // Finally, mark all as complete
    yield { type: "complete", array: a.slice() };
}
