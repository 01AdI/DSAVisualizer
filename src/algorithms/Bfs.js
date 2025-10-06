// Breadth First Search (BFS) traversal with generator
export default function* BFS(adjList, startNode) {
    const visited = new Set();
    const queue = [startNode];

    yield { type: "start", node: startNode, queue: [...queue], visited: [] };

    while (queue.length > 0) {
        const node = queue.shift();

        if (!visited.has(node)) {
            visited.add(node);

            // visiting node
            yield { type: "visit", node, queue: [...queue], visited: [...visited] };

            // enqueue neighbors
            for (let neighbor of adjList[node] || []) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor);
                    yield { type: "enqueue", from: node, to: neighbor, queue: [...queue], visited: [...visited] };
                }
            }
        }
    }

    yield { type: "complete", visited: [...visited] };
}
