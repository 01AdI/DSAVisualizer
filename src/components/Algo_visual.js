import { Navigate, NavLink, Route, Routes, useParams } from "react-router";
import Sorting from "../Sorting";
import Searching from "../Searching";
import Graph from "../Graphs";

export default function Algo_visuals() {
    const { category } = useParams();
    const categoryComponents = {
        Sorting,   // points to your Sorting component function
        Searching, // points to your Searching component function
        Graph, // later you can add
        };
    const Algo=categoryComponents[category];
    
    const algorithms = {
        Sorting: [
            { name: "BubbleSort", path: "bubble-sort" },
            { name: "InsertionSort", path: "insertion-sort" },
            { name: "SelectionSort", path: "selection-sort" },
            { name: "QuickSort", path: "quick-sort" },
            { name: "MergeSort", path: "merge-sort" },
        ],
        Searching: [
            { name: "LinearSearch", path: "linear-search" },
            { name: "BinarySearch", path: "binary-search" },
        ],
        Graph: [
            { name: "BFS", path: "bfs" },
            { name: "DFS", path: "dfs" },
            { name: "Dijkstra", path: "dijkstra" },
            { name: "Prim", path: "prim" },
            { name: "Kruskal", path: "kruskal" },
        ],
    };

    const SelectedAlgo = algorithms[category];
    if (!SelectedAlgo) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="bg-[rgb(0,17,28)] text-[#FFF0F3] ">
            <div className="flex gap-8  w-[98%] ">
                {/* Sidebar */}
                <div className="flex flex-col gap-2 h-[100vh] w-[250px] bg-black pl-3 mt-8">
                    <h2 className="w-[80%] pt-5 text-[25px]/[22px] font-extrabold tracking-tight text-center text-blue-600 mt-8 font-sans">
                        {category} Algorithms
                    </h2>

                    <div className="flex flex-col gap-3 w-[80%] mb-5 justify-center h-full">
                        {SelectedAlgo.map((algo) => (
                            <NavLink
                                key={algo.path}
                               to={`/algorithms/${category}/${algo.path}`}
                                className={({ isActive }) =>
                                    `h-[60px]  flex items-center justify-center rounded-[8px] text-[19px]/[20px] font-[500] mt-5 ${isActive
                                        ? "bg-[#003356] text-white"
                                        : "bg-blue-600 hover:bg-[#ADB5BD]"
                                    }`
                                }
                            >
                                {algo.name}
                            </NavLink>
                        ))}
                    </div>
                </div>

                {/* Main Screen */}
                <div className="mt-8">

                    <Routes>
                        {SelectedAlgo.map((algo) => (
                            <Route key={algo.path} path={algo.path} element={<Algo name={algo.name} />}></Route>
                        ))}

                        {/* Default redirect to first algo */}
                        <Route path="*" element={<Navigate to={SelectedAlgo[0].path} replace />}></Route>
                    </Routes>


                </div>
            </div>
        </div>
    );
}
