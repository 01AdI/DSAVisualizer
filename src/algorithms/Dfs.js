// Depth First Search (DFS) traversal with generator
export default function* DFS(adjList, startNode) {
    const visited = new Set();
    const stack = [startNode];

    yield { type: "start", node: startNode, queue: [...stack], visited: [] };

    while (stack.length > 0) {
        const node = stack.pop(); // DFS uses stack (LIFO)

        if (!visited.has(node)) {
            visited.add(node);

            // visiting node
            yield { type: "visit", node, queue: [...stack], visited: [...visited] };

            // push neighbors to stack (in reverse order if you want left-to-right)
            const neighbors = adjList[node] || [];
            for (let i = neighbors.length - 1; i >= 0; i--) {
                const neighbor = neighbors[i];
                if (!visited.has(neighbor)) {
                    stack.push(neighbor);
                    yield { type: "enqueue", from: node, to: neighbor, queue: [...stack], visited: [...visited] };
                }
            }
        }
    }

    yield { type: "complete", visited: [...visited] };
}
