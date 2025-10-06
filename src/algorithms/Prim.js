// Prim's Algorithm (MST) with generator
export default function* Prim(adjList, startNode) {
  const visited = new Set();
  const mstEdges = [];
  const pq = [];

  // Start from the startNode
  visited.add(startNode);

  // Add edges from startNode to PQ
  for (const [neighbor, weight] of Object.entries(adjList[startNode] || {})) {
    pq.push({ from: startNode, to: neighbor, weight });
  }

  yield { 
    type: "start", 
    visited: [...visited], 
    mstEdges: [...mstEdges], 
    pq: [...pq] 
  };

  while (pq.length > 0) {
    // sort PQ by weight (min edge first)
    pq.sort((a, b) => a.weight - b.weight);
    const { from, to, weight } = pq.shift();

    if (visited.has(to)) continue;

    visited.add(to);
    mstEdges.push({ from, to, weight });

  yield { 
    type: "visit", 
    node: to, 
    from,    // edge from
    to,      // edge to
    weight, 
    visited: [...visited], 
    mstEdges: [...mstEdges], 
    pq: [...pq] 
};

    // add edges from "to" node
    for (const [neighbor, w] of Object.entries(adjList[to] || {})) {
      if (!visited.has(neighbor)) {
        pq.push({ from: to, to: neighbor, weight: w });
        yield { 
          type: "enqueue", 
          from: to, 
          to: neighbor, 
          weight: w, 
          visited: [...visited], 
          mstEdges: [...mstEdges], 
          pq: [...pq] 
        };
      }
    }
  }

  yield { type: "complete", visited: [...visited], mstEdges: [...mstEdges] };
}
