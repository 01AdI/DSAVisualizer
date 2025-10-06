// Dijkstra's Algorithm with generator
export default function* Dijkstra(adjList, startNode) {
    // Distances map: shortest distance from startNode
    const distances = {};
    const visited = new Set();

    // Initialize all distances as Infinity
    for (let node in adjList) {
        distances[node] = Infinity;
    }
    distances[startNode] = 0;

    // Priority queue (array) -> each element { node, distance }
    let pq = [{ node: startNode, distance: 0 }];

    yield { type: "start", node: startNode, queue: [...pq], visited: [], distances: { ...distances } };

    while (pq.length > 0) {
        // Pick node with smallest distance
        pq.sort((a, b) => a.distance - b.distance);
        const { node } = pq.shift();

        if (!visited.has(node)) {
            visited.add(node);

            yield {
                type: "visit",
                node,
                queue: [...pq],
                visited: [...visited],
                distances: { ...distances }
            };

            // Explore neighbors
            for (let neighbor in adjList[node] || {}) {
                let weight = adjList[node][neighbor]; // edge weight
                let newDist = distances[node] + weight;

                if (newDist < distances[neighbor]) {
                    distances[neighbor] = newDist;
                    pq.push({ node: neighbor, distance: newDist });

                    yield {
                        type: "enqueue",
                        from: node,
                        to: neighbor,
                        queue: [...pq],
                        visited: [...visited],
                        distances: { ...distances }
                    };
                }
            }
        }
    }

    yield { type: "complete", visited: [...visited], distances: { ...distances } };
}
