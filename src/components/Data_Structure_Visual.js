import { Navigate, NavLink, Route, Routes, useParams } from "react-router";
import Array from "../DataStructure/Array";
import Stack from "../DataStructure/Stack";
import Queue from "../DataStructure/Queue";
import LinkedList from "../DataStructure/LinkedList";

export default function Data_Structure_Visuals() {
    const { type } = useParams();
    const categoryComponents = {
        Array,
        Stack,
        Queue,
        LinkedList,
        };
    const Algo=categoryComponents[type];
    
    const Structure = {
        Array: [
            { btnname: "Insert at start", name: "insertStart", path: "insert-start" },
            { btnname: "Insert at position", name:"insertPos", path: "insert-pos" },
            { btnname: "Insert at end", name:"insertEnd", path: "insert-end" },
            { btnname: "Deletes", name:"Delete" ,path: "delete" },
        ],
        Stack: [
            { btnname: "Push", name:"Push", path: "push" },
            { btnname: "Pop", name:"Pop", path: "pop" },
            { btnname: "Peek", name:"Peek",  path: "peek" },

        ],
        Queue: [
            { btnname: "Enqueue", name: "Enqueue", path: "enqueue" },
            { btnname: "Dequeue", name: "Dequeue", path: "dequeue" },
            { btnname: "Peek", name: "Peek", path: "peek" },
        
        ],
        LinkedList:[
            { btnname: "Insert at start", name: "insertStart", path: "insert-start" },
            { btnname: "Insert at position", name:"insertPos", path: "insert-pos" },
            { btnname: "Insert at end", name:"insertEnd", path: "insert-end" },
            { btnname: "Delete at start", name:"DeleteStart", path: "delete-start" },
            { btnname: "Delete at position", name:"DeletePos", path: "delete-pos" },
            { btnname: "Delete at end", name:"DeleteEnd", path: "delete-end" },
        ]
    };

    const SelectedStructure = Structure[type];
    if (!SelectedStructure) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="bg-[rgb(0,17,28)] text-[#FFF0F3] ">
            <div className="flex gap-8  w-[98%] ">
                {/* Sidebar */}
                <div className="flex flex-col gap-2 h-[100vh] w-[250px] bg-black pl-3 mt-8">
                    <h2 className="w-[80%] pt-5 text-[25px]/[22px] font-extrabold tracking-tight text-center text-blue-600 mt-8 font-sans">
                        {type} Structure
                    </h2>

                    <div className="flex flex-col gap-3 w-[80%] mb-5 justify-center h-full">
                        {SelectedStructure.map((algo) => (
                            <NavLink
                                key={algo.path}
                               to={`/Structures/${type}/${algo.path}`}
                                className={({ isActive }) =>
                                    `h-[60px]  flex items-center justify-center rounded-[8px] text-[19px]/[20px] font-[500] mt-5 ${isActive
                                        ? "bg-[#003356] text-white"
                                        : "bg-blue-600 hover:bg-[#ADB5BD]"
                                    }`
                                }
                            >
                                {algo.btnname}
                            </NavLink>
                        ))}
                    </div>
                </div>

                {/* Main Screen */}
                <div className="mt-8">

                    <Routes>
                        {SelectedStructure.map((algo) => (
                            <Route key={algo.path} path={algo.path} element={<Algo name={algo.name} />}></Route>
                        ))}

                        {/* Default redirect to first algo */}
                        <Route path="*" element={<Navigate to={SelectedStructure[0].path} replace />}></Route>
                    </Routes>


                </div>
            </div>
        </div>
    );
}
