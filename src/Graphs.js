import { useState, useEffect, useRef } from "react";
import BFS from "./algorithms/Bfs";
import DFS from "./algorithms/Dfs";
import Dijkstra from "./algorithms/Dijkstra";
import Prim from "./algorithms/Prim";
import Kruskal from "./algorithms/Kruskal";

export default function BFSVisualizer({ name }) {
  const [currentNode, setCurrentNode] = useState(null);
  const genref = useRef(null);
  const timeref = useRef(null);
  const [highlight, setHighlight] = useState({ type: null, queue: [], visited: [], distances: {}, mstEdges: [] });
  const [Isvisited, setisvisted] = useState(new Set());
  const [hasStarted, setHasStarted] = useState(false);
  const [hasstop, sethasstop] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(400);
  const [startNode, setStartNode] = useState("");
  const [sliderValue, setSliderValue] = useState(400);
  const [activeEdge, setActiveEdge] = useState(null);
  const [logs, setLogs] = useState([]);



  const algoMap = {
    BFS,
    DFS,
    Dijkstra,
    Prim,
    Kruskal,
  };


  const algoFunc = algoMap[name];

  const weightedGraph = {
    A: { B: 2, C: 4 },
    B: { D: 7, E: 1 },
    C: { F: 3 },
    D: { E: 2 },
    E: { F: 5 },
    F: { A: 8 }
  };

  const unweightedGraph = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: ["F"],
    D: ["E"],
    E: ["F"],
    F: ["A"]
  };

  const graph = (name === "Dijkstra" || name === "Prim" || name === "Kruskal") ? weightedGraph : unweightedGraph;



  const edges = [];

  if (name === "Dijkstra" || name === "Prim" || name === "Kruskal") {
    for (let node in graph) {
      for (let [neighbor, weight] of Object.entries(graph[node])) {
        edges.push({ from: node, to: neighbor, weight });
      }
    }
  }
  else {
    for (let node in graph) {
      for (let neighbor of graph[node]) {
        edges.push({ from: node, to: neighbor });
      }
    }
  }

  const CONTAINER_WIDTH = 1230;
  const CONTAINER_HEIGHT = 600; // or calculate from 80vh
  const RADIUS = 200;

  const CENTER_X = CONTAINER_WIDTH / 2;
  const CENTER_Y = CONTAINER_HEIGHT / 2;
  const nodes = Object.keys(graph).map((node, index, arr) => {
    const angle = (2 * Math.PI * index) / arr.length;
    const x = CENTER_X + RADIUS * Math.cos(angle);
    const y = CENTER_Y + RADIUS * Math.sin(angle);
    return { id: node, x, y };
  });


  function forward() {
    if (!genref.current) {
      if (algoFunc) {
        genref.current = algoFunc(graph, startNode);
      }
      else {
        console.error(`Algorithm ${name} not found`);
      }
    }

    const { value, done } = genref.current.next();

    if (!value || done) {
      clearInterval(timeref.current);
      setHighlight({ type: null, queue: [], visited: [], distances: {}, mstEdges: [] });
      setIsPlaying(false);
      return;

    }


    if (value.type == "start") {

      if (value.distances) {
        setHighlight({ type: value.type, queue: value.queue, visited: value.visited, distances: value.distances })
      }
      else if (value.mstEdges) {
        setHighlight({ type: value.type, queue: value.queue, visited: value.visited, distances: value.distances, mstEdges: value.mstEdges })
      }
      else {
        setHighlight({ type: value.type, queue: value.queue, visited: value.visited })
      }

    }

    else if (value.type == "visit") {

      if (value.distances) {
        setHighlight({ type: value.type, queue: value.queue, visited: value.visited, distances: value.distances })
         if (value.from && value.to) {
          setLogs(prevLogs => [...prevLogs, `${value.from} → ${value.to}`]);
        }
      }
      else if (value.mstEdges) {
        setHighlight({ type: value.type, queue: value.queue, visited: value.visited, distances: {}, mstEdges: value.mstEdges })
         if (value.from && value.to) {
          setLogs(prevLogs => [...prevLogs, `${value.from} → ${value.to}`]);
        }
      }
      else {
        setHighlight({ type: value.type, queue: value.queue, visited: value.visited })
         if (value.from && value.to) {
          setLogs(prevLogs => [...prevLogs, `${value.from} → ${value.to}`]);
        }
      }

      setCurrentNode(value.node)
      setisvisted(prev => new Set([...prev, ...value.visited]));

    }

    else if (value.type == "enqueue") {

      if (value.distances) {
        setHighlight({ type: value.type, queue: value.queue, visited: value.visited, distances: value.distances })
        if (value.from && value.to) {
          setLogs(prevLogs => [...prevLogs, `${value.from} → ${value.to}`]);
        }

      }
      else if (value.mstEdges) {
        setHighlight({ type: value.type, queue: value.queue, visited: value.visited, distances: {}, mstEdges: value.mstEdges })
        if (value.from && value.to) {
          setLogs(prevLogs => [...prevLogs, `${value.from} → ${value.to}`]);
        }

      }
      else {
        setHighlight({ type: value.type, queue: value.queue, visited: value.visited })
        if (value.from && value.to) {
          setLogs(prevLogs => [...prevLogs, `${value.from} → ${value.to}`]);
        }

      }

      setActiveEdge({ from: value.from, to: value.to });
    }
    else if (value.type === "addEdge" || value.type === "skipEdge") {
      // only be available for krushkals algo
      setHighlight({ type: value.type, queue: value.queue, visited: value.visited, distances: value.distances, mstEdges: value.mstEdges })
    }

    else if (value.type == "complete") {
      setisvisted(prev => new Set([...prev, ...value.visited]));
      setHighlight({ type: null, queue: [], visited: [], distances: {}, mstEdges: [] });
      clearInterval(timeref.current);
      setIsPlaying(false);

      setTimeout(() => {
        setisvisted(new Set());
        resetGraph();
      }, 2000);

      return;
    }

  }

  useEffect(() => {

    if (isPlaying) {

      if (!genref.current) {
        if (algoFunc) {
          genref.current = algoFunc(graph, startNode);
        }
        else {
          console.error(`Algorithm ${name} not found`);
        }
      }
      timeref.current = setInterval(forward, speed);

    }

    return () => clearInterval(timeref.current);


  }, [isPlaying, speed]);

  function startGraph() {
    if (!startNode && !(name === "Kruskal")) {
      alert("Please enter a valid number to search for");
      return;
    }

    if (!hasStarted) {

      setHasStarted(true);
      setIsPlaying(true);  // just toggle the state
    }
  }

  function stopGraph() {
    if (hasStarted) {
      if (!hasstop) {
        sethasstop(true);
        setIsPlaying(false); // stop playing
      }

      else {
        sethasstop(false);
        setIsPlaying(true);
      }

    }
  }

  function resetGraph() {
    clearInterval(timeref.current);      // stop any running interval
    setIsPlaying(false);                  // stop playing
    setHighlight({ type: null, queue: [], visited: [], distances: {}, mstEdges: [] });  // clear highlights
    genref.current = null;                // reset generator
    setHasStarted(false);
    sethasstop(false);
    setisvisted(new Set());
    setCurrentNode(null);
    setActiveEdge(null);
    setLogs([]);
    setStartNode("");
  }

  useEffect(() => {

    // reset everything when algo changes
    clearInterval(timeref.current);
    setIsPlaying(false);
    setHighlight({ type: null, queue: [], visited: [], distances: {}, mstEdges: [] });
    genref.current = null;
    setHasStarted(false);
    sethasstop(false);
    setisvisted(new Set());
    setCurrentNode(null);
    setActiveEdge(null);
    setStartNode("");
    setLogs([]);
  }, [name]);

  return (
    <div className="flex flex-col w-[1230px]  py-6 px-3 rounded-md bg-black shadow-xl">
      <div className="relative flex gap-10 items-center justify-between h-[80vh] rounded-md bg-[oklch(0.208_0.042_265.755)]">
        {/* SVG edges */}
        <svg className="absolute bottom-0 top-0 left-0 w-full h-full pointer-events-none">
          {edges.map((edge, idx) => {
            const fromNode = nodes.find((n) => n.id === edge.from);
            const toNode = nodes.find((n) => n.id === edge.to);
            if (!fromNode || !toNode) return null;

            const isActive =
              activeEdge &&
              activeEdge.from === edge.from &&
              activeEdge.to === edge.to;

            const weight =
              weightedGraph[edge.from] && weightedGraph[edge.from][edge.to]
                ? weightedGraph[edge.from][edge.to]
                : 1; // default 1 if not found

            const isMST =
              highlight.mstEdges &&
              highlight.mstEdges.some(
                e => e.from === edge.from && e.to === edge.to
              );

            const isSkip = highlight.type === "skipEdge" &&
              highlight.from === edge.from &&
              highlight.to === edge.to;


            return (
              <g key={idx}>
                {/* Edge Line */}
                <line
                  x1={fromNode.x}
                  y1={fromNode.y}
                  x2={toNode.x}
                  y2={toNode.y}
                  stroke={isActive ? "red" : isMST ? "green" : isSkip ? "grey" : "white"}
                  strokeWidth={isActive || isMST ? 3 : 1}
                />

                {/* Edge Weight Label */}

                {(name == "Dijkstra" || name == "Prim" || name === "Kruskal") &&
                  (
                    <text
                      x={(fromNode.x + toNode.x) / 2}
                      y={(fromNode.y + toNode.y) / 2 - 10} // little above the line
                      fill="yellow"
                      fontSize="18"
                      textAnchor="middle"
                    >
                      {weight}
                    </text>
                  )}
              </g>
            );
          })}
        </svg>

        {/* Nodes */}
        {nodes.map((node, index) => {
          const isstart =
            highlight.type === "start" && startNode === node.id;
          const isvisited = Isvisited.has(node.id);
          const isactive = currentNode === node.id;
          const mstNodes = new Set();
          highlight.mstEdges?.forEach(edge => {
            mstNodes.add(edge.from);
            mstNodes.add(edge.to);
          });

          const isInMST = mstNodes.has(node.id);


          const bgColor = isstart ? "bg-[#48CAE4]" : isactive ? "bg-[#E85D04]" : isvisited || isInMST ? "bg-green-600" : "bg-blue-600";

          return (
            <div
              key={index}
              className={`${bgColor} border-2 border-[rgb(0,17,28)] py-2 text-[#FFF0F3] h-[60px] w-[60px]  
                        rounded-full shadow-xl text-[17.5px] flex items-center justify-center transition-colors transition-move duration-700 ease-in-out absolute`}
              style={{ left: node.x - 30, top: node.y - 30 }}
            >
              <strong>{node.id}</strong>
            </div>
          );
        })}

        <div className="flex  flex-col items-center w-64 h-[450px] ml-4 p-2 gap-2.5 bg-gray-600 rounded-lg overflow-y-auto">
          <h2 className="font-bold text-lg mb-2 mt-8">Steps</h2>
          <div className="space-y-1 flex flex-col gap-1.5 text-[18px] font-[600] font-mono">
            {logs.map((log, i) => (
              <div key={i} className="text-gray-300">{log}</div>
            ))}
          </div>

        </div>

      </div>
      <div className="mt-5 flex items-center justify-center gap-4 ">
        <button className={`px-2 py-2.5 border border-white font-[600] rounded-[8px] text-white  ${hasStarted ? "bg-gray-400 cursor-not-allowed" : "bg-green-500  cursor-pointer"}`} onClick={startGraph}>Start</button>
        <button className="bg-green-500 px-2 border border-white py-2.5 font-[600] rounded-[8px] text-white cursor-pointer" onClick={stopGraph}>{hasstop ? "Resume" : "Pause"}</button>
        <button className="bg-green-500 px-2 border border-white py-2.5 font-[600] rounded-[8px] text-white cursor-pointer" onClick={resetGraph}>reset</button>
        {/* <button className="bg-green-500 px-2 border border-white py-2.5 font-[600] rounded-[8px] text-white cursor-pointer" onClick={NewArray}>Random Array</button> */}


        <div className="flex items-center gap-1 ml-3">
          <label>Speed</label>
          <input className="accent-blue-500" type="range" min="100" max="1000" value={sliderValue} onChange={(e) => { setSpeed(1100 - e.target.value); setSliderValue(e.target.value); }}></input>
          <span>({Math.round(((1000 - speed) / 900) * 100)}%)</span>
        </div>

        <div className="flex items-center gap-2 ml-3">
          <label>Start Node:</label>
          <input className="text-blue-500 pl-3 py-1.5 border border-gray-400 rounded-md " type="text" placeholder="start the search from ..." value={startNode} onChange={(e) => { setStartNode(e.target.value.toUpperCase()) }}></input>
        </div>
      </div>
    </div>
  )
}
