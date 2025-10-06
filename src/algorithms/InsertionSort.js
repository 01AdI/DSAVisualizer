export  default function* InsertionSort(inputArray){
    
    const a = inputArray.slice();
    const n = a.length;
  
    for (let i = 1; i < n; ++i) {
        let key = a[i];
        let j = i - 1;

        yield { type: "compare", indices: [j, i], array: a.slice() };
        while (j >= 0 && a[j] > key) 
        {
        yield { type: "swap", indices: [j, j + 1], array: a.slice() };
            a[j + 1] = a[j];
            j = j - 1;

            if (j >= 0) {
                yield { type: "compare", indices: [j, i], array: a.slice() };
            }
        }
        a[j + 1] = key;
        yield { type: "markSorted", indices: Array.from({ length: i + 1 }, (_, idx) => idx), array: a.slice() };
    }

      yield { type: "complete", array: a.slice() };
}
