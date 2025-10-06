// src/components/SortingVisualizer.jsx
import { useState, useRef, useEffect } from "react";
import BubbleSort from "./algorithms/BubbleSort";
import InsertionSort from "./algorithms/InsertionSort";
import SelectionSort from "./algorithms/SelectionSort";
import QuickSort from "./algorithms/QuickSort";
import MergeSort from "./algorithms/MergeSort";

function randomArray(n = 20, min = 10, max = 200) {
    return Array.from({ length: n }, () =>
        Math.floor(Math.random() * (max - min + 1)) + min
    );
}

export default function Sorting({name}) {
    const [sliderValue, setSliderValue] = useState(400); // 100–1000
    const [array, setarray] = useState(() => randomArray(20, 10, 200));
    const [isPlaying, setIsPlaying] = useState(false); // is sorting running
    const [highlight, setHighlight] = useState({ type: null, indices: [] }); // which indices are being compared
    const genRef = useRef(null); // to store generator
    const timerRef = useRef(null); // for interval
    const [sortedIndices, setSortedIndices] = useState(new Set());
    const [speed, setspeed] = useState(400);
    const [hasStarted, setHasStarted] = useState(false);
    const [hasstop,sethasstop]=useState(false);

    const containerWidth = 0.95 * 1200; // width of your flex-wrap container
    const barWidth = 60; 
    const gap = 5; 
    const spacing = Math.min(barWidth + gap, containerWidth / array.length);


    const algoMap = {
        BubbleSort,
        InsertionSort,
        SelectionSort,
        QuickSort,
        MergeSort,
    };


    const algoFunc = algoMap[name];

   
    function forward() {
        if (!genRef.current) {
            if (algoFunc) {
            genRef.current = algoFunc(array);
            } 
            else {
            console.error(`Algorithm ${name} not found`);
            }
        }

        const { value, done } = genRef.current.next();

        if (done || !value) {
            clearInterval(timerRef.current);
            setHighlight({ type: null, indices: [] });
            setIsPlaying(false);
            return;
        }

        setarray(value.array);

        if (value.type == "compare" || value.type == "swap") {
            setHighlight({ type: value.type, indices: value.indices });
        }
    


        else if (value.type === "markSorted") {
            if (value.index !== undefined) {
                setSortedIndices(prev => new Set([...prev, value.index])); // add index to sorted
                setHighlight({ type: "markSorted", indices: [value.index] })
            }
            else if (value.indices !== undefined) {
                setSortedIndices(prev => new Set([...prev, ...value.indices]));
                setHighlight({ type: "markSorted", indices: value.indices });
            }
        }

        else if (value.type === "complete") {
            setSortedIndices(new Set(array.map((items, index) => index)));
            setHighlight({ type: "complete", indices: [] });
            setIsPlaying(false);
            clearInterval(timerRef.current);
        }

        else {
            setHighlight({ type: null, indices: [] });
        }

    }

    useEffect(() => {
        if (isPlaying) {
            if (!genRef.current) {
                if (algoFunc) {
                    genRef.current = algoFunc(array);
                } 
                else {
                    console.error(`Algorithm ${name} not found`);
                }
            }
            timerRef.current = setInterval(forward, speed);
        }

        return () => clearInterval(timerRef.current);
    }, [isPlaying, speed]);

    const startSort = () => {
        if(!hasStarted)
        {
            setHasStarted(true);
            setIsPlaying(true);  // just toggle the state
        }
    };

    const stopSort = () => {
        if(hasStarted){
            if(!hasstop)
            {   
                sethasstop(true);
                setIsPlaying(false); // stop playing
            }

            else{
            sethasstop(false);
            setIsPlaying(true);
            }

        }        
    };

    useEffect(() => {
    // reset everything when algo changes
    clearInterval(timerRef.current);
    setIsPlaying(false);
    setHighlight({ type: null, indices: [] });
    setSortedIndices(new Set());
    genRef.current = null;
    setarray(randomArray(20, 10, 200)); // optional: fresh array when algo changes
    setHasStarted(false);
    sethasstop(false);
    }, [name]);

    function resetSort() {
        clearInterval(timerRef.current);      // stop any running interval
        setIsPlaying(false);                  // stop playing
        setHighlight({ type: null, indices: [] });  // clear highlights
        setSortedIndices(new Set());          // clear sorted indices
        genRef.current = null;                // reset generator
        setHasStarted(false);
        sethasstop(false);
    };

    function NewArray() {
        if (!isPlaying) {

            clearInterval(timerRef.current);      // stop any running interval
            setIsPlaying(false);                  // stop playing
            setarray(randomArray(20, 10, 200));  // generate new random array
            setHighlight({ type: null, indices: [] });  // clear highlights
            setSortedIndices(new Set());          // clear sorted indices
            genRef.current = null;                // reset generator
            setHasStarted(false);
            sethasstop(false);
        }
        else {
            alert("the function is running please wait for the function to finished or reset it.")
        }
    }

    const isCompare = highlight.type === "compare" 
    const isSwap = highlight.type === "swap" 
    const isSorted = highlight.type === "markSorted" 
    const iscompleted = highlight.type === "complete";

                            
    const textColor = isCompare ? "text-[#E85D04]": isSwap? "text-[#48CAE4]": iscompleted || isSorted? "text-green-600": "text-blue-600";

    return (
        <div className="flex flex-col w-[1230px]  py-6 px-3 rounded-md bg-black shadow-xl">
            <div className=" flex flex-col gap-10 items-center justify-center h-[80vh] rounded-md bg-[oklch(0.208_0.042_265.755)]">
                 {hasStarted && (
                        <div className="flex items-center justify-center ">
                            <strong className={`${textColor} text-2xl font-bold text-center `}>{highlight.type}</strong>
                        </div>
                    )}
                <div className="flex items-center justify-center flex-wrap gap-4 w-[95%] pt-50  relative">
                   
                    {
                        array.map((items, index) => {
                           
                            const isCompare = highlight.type === "compare" && highlight.indices.includes(index);
                            const isSwap = highlight.type === "swap" && highlight.indices.includes(index);
                            const isSorted = sortedIndices.has(index);
                            const iscompleted = highlight.type === "complete";

                            const bgColor = isCompare ? "bg-[#E85D04]": isSwap? "bg-[#48CAE4]": iscompleted || isSorted? "bg-green-600": "bg-blue-600";
                           

                            return (
                                    <div key={index} 
                                    className={`${bgColor} border-2 border-[rgb(0,17,28)] py-2 text-[#FFF0F3] w-[50px]  
                                            rounded-md shadow-xl text-[17.5px] flex items-center justify-center absolute transition-all duration-500 ease-in-out `}
                                    style={{
                                            height: `${items}px`,   // dynamic height
                                            left: `${index * spacing}px`,  // use the position mapping
                                             bottom: "0px",                 // anchor bars at the bottom
                                             top: "auto",                   // prevent overriding bottom
                                            zIndex: isCompare || isSwap ? 10 : 1,
                                            }}        
                                            
                                            >
                                        <strong >{items}</strong>
                                    </div>
                            )
                        })
                    }
                </div>

            </div>
            <div className="mt-5 flex items-center justify-center gap-3 ">
                <button className={`px-2 py-2.5 border border-white font-[600] rounded-[8px] text-white  ${hasStarted?"bg-gray-400 cursor-not-allowed":"bg-green-500  cursor-pointer"}`} onClick={startSort}>Start</button>
                <button className="bg-green-500 px-2 border border-white py-2.5 font-[600] rounded-[8px] text-white cursor-pointer" onClick={stopSort}>{hasstop ? "Resume" : "Pause"}</button>
                <button className="bg-green-500 px-2 border border-white py-2.5 font-[600] rounded-[8px] text-white cursor-pointer" onClick={resetSort}>reset</button>
                <button className="bg-green-500 px-2 border border-white py-2.5 font-[600] rounded-[8px] text-white cursor-pointer" onClick={NewArray}>Random Array</button>


                <div className="flex items-center gap-1">
                    <label>Speed</label>
                    <input className="accent-blue-500" type="range" min="100" max="1000" value={sliderValue} onChange={(e) => { setspeed(1100 - e.target.value); setSliderValue(e.target.value); }}></input>
                    <span>({Math.round(((1000 - speed) / 900) * 100)}%)</span>
                </div>
            </div>
        </div>
    )

}


