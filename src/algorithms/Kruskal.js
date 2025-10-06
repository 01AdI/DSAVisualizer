// Kruskal's Algorithm with generator
export default function* Kruskal(adjList, startNode) {
  const edges = [];

  // Convert adjList → edge list
  for (const u in adjList) {
    for (const [v, w] of Object.entries(adjList[u])) {
      if (u < v) { // avoid duplicates
        edges.push({ from: u, to: v, weight: w });
      }
    }
  }

  // Sort edges by weight
  edges.sort((a, b) => a.weight - b.weight);

  // DSU / Union-Find
  const parent = {};
  const find = (x) => {
    if (parent[x] !== x) parent[x] = find(parent[x]);
    return parent[x];
  };
  const union = (x, y) => {
    parent[find(x)] = find(y);
  };

  // Initialize parent set
  for (const u in adjList) {
    parent[u] = u;
  }

  const mst = [];

  yield {
    type: "start",
    node: startNode,
    queue: [...edges],
    visited: [],
    mstEdges: []
  };

  // main loop
  for (const { from, to, weight } of edges) {
    if (find(from) !== find(to)) {
      union(from, to);
      mst.push({ from, to, weight });
      yield {
        type: "addEdge",
        from,
        to,
        weight,
        node: startNode,
        visited: [],
        mstEdges: [...mst]
      };
    } else {
      yield {
        type: "skipEdge",
        from,
        to,
        weight,
        node: startNode,
        visited: [],
        mstEdges: [...mst]
      };
    }
  }

  yield {
    type: "complete",
    node: startNode,
    visited: [],
    mstEdges: [...mst]
  };
}
