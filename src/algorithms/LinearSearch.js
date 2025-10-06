
export default function* LinearSearch(array, target = null) {
    // if no target is provided, pick a random one from array
    if (target === null && array.length > 0) {
        target = array[Math.floor(Math.random() * array.length)];
    }

    for (let i = 0; i < array.length; i++) {
        // highlight the current element being checked
        yield { type: "compare", indices: [i], array: [...array] };

        if (array[i] === target) {
            // found target
            yield { type: "found", indices: [i], array: [...array] };
            yield { type: "complete", indices: [], array: [...array] };
            return;
        }
    }

    // if not found
    yield { type: "notFound", indices: [], array: [...array] };
    yield { type: "complete", indices: [], array: [...array] };
}
