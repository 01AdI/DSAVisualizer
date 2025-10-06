import { useEffect, useRef, useState } from "react"
import LinearSearch from "./algorithms/LinearSearch";
import BinarySearch from "./algorithms/BinarySearch";


function randomArray(n = 20, min = 10, max = 200) {
    return Array.from({ length: n }, () =>
        Math.floor(Math.random() * (max - min + 1)) + min
    );
}

export default function Searching({name}){
    
    const genref=useRef(null);
    const timerRef=useRef(null);
    const [highlight,setHighlight]=useState({type: null, indices: []})
    const[IsPlaying,setIsPlaying]=useState(false);
    const [array,setarray]=useState(()=>randomArray(20, 10, 200))
    const [target,setTarget]=useState("");
    const [speed,setspeed]=useState(400);
    const [hasStarted,setHasStarted]=useState(false);
    const[hasstop,sethasstop]=useState(false);
    const [sliderValue,setSliderValue]=useState(400);

    const containerWidth = 0.95 * 1200; // width of your flex-wrap container
    const barWidth = 60; 
    const gap = 5; 
    const spacing = Math.min(barWidth + gap, containerWidth / array.length);


    const algoMap = {
        LinearSearch,
        BinarySearch,
    };


    const algoFunc = algoMap[name];

  

    function forward(){

        if(!genref.current){
            if(algoFunc){
                genref.current=algoFunc(array,Number(target));
            }
            else{
                console.error(`Algorithm ${name} not found`);
            }
        }

        const {value,done}=genref.current.next();
        
        if(done || !value){
            clearInterval(timerRef.current);
            setHighlight({ type: null, indices: [] });
            setIsPlaying(false);
            return;

        }

        if(value.type=="compare"){
            setHighlight({ type: value.type, indices: value.indices });
        }

        else if(value.type==="found"){
            setHighlight({ type: value.type, indices: value.indices });
        }

         else if (value.type === "complete") {
            setHighlight({ type: value.type, indices: [] });
            setIsPlaying(false);
            clearInterval(timerRef.current);
            resetSearch();
            return;
        }

        else if (value.type === "notFound") {
            setHighlight({ type: value.type, indices: [] });
            alert("element not Present in the list");
            setIsPlaying(false);
            clearInterval(timerRef.current);
            resetSearch();
            return;
        }
        else if(value.type=="discard"){
            // setDiscardedIndices(prev => new Set([...prev, ...value.indices]));
            setHighlight({ type: value.type, indices: value.indices });
        }

        else {
            setHighlight({ type: null, indices: [] });
        }
    }

    useEffect(()=>{

        if(IsPlaying){
             if (!genref.current) {
                if (algoFunc) {
                    genref.current = algoFunc(array,Number(target));
                } 
                else {
                    console.error(`Algorithm ${name} not found`);
                }
            }
            timerRef.current=setInterval(forward, speed);

        }

        return () => clearInterval(timerRef.current);

    },[IsPlaying,speed])

    function startSearch(){
       
        if (!target || isNaN(Number(target))) {
        alert("Please enter a valid number to search for");
        return;
        }
         if(!hasStarted)
        {
            setHasStarted(true);
            setIsPlaying(true);  // just toggle the state
        }
    }

    function stopSearch(){
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
    }

    function resetSearch(){
        clearInterval(timerRef.current);      // stop any running interval
        setIsPlaying(false);                  // stop playing
        setHighlight({ type: null, indices: [] });  // clear highlights
        genref.current = null;                // reset generator
        setHasStarted(false);
        sethasstop(false);
        setTarget("");
    }

     useEffect(() => {
        setarray(()=>randomArray(20,10,200));
         if (name === "BinarySearch") {
            setarray(prev => [...prev].sort((a, b) => a - b));
        }
        // reset everything when algo changes
        clearInterval(timerRef.current);
        setIsPlaying(false);
        setHighlight({ type: null, indices: [] });
        genref.current = null;
        setHasStarted(false);
        sethasstop(false);
        setTarget("");
        }, [name]);



     function NewArray() {
        if (!IsPlaying) {

            clearInterval(timerRef.current);      // stop any running interval
            setIsPlaying(false);                  // stop playing
            setarray(randomArray(20, 10, 200));  // generate new random array
            setHighlight({ type: null, indices: [] });  // clear highlights
            genref.current = null;                // reset generator
            setHasStarted(false);
            sethasstop(false);
        }
        else {
            alert("the function is running please wait for the function to finished or reset it.")
        }
    }

    return(
         <div className="flex flex-col w-[1230px]  py-6 px-3 rounded-md bg-black shadow-xl">
            <div className=" flex flex-col gap-10 items-center justify-center h-[80vh] rounded-md bg-[oklch(0.208_0.042_265.755)]">
                <div className="flex items-center justify-center flex-wrap gap-4 w-[95%] relative">
                   
                    {
                        array.map((items, index) => {
                           
                            const isCompare = highlight.type === "compare" && highlight.indices.includes(index);
                            const isfound = highlight.type === "found" && highlight.indices.includes(index);
                            const isdiscarded=highlight.type === "discard"&& highlight.indices.includes(index);

                            const bgColor =isCompare ? "bg-[#E85D04]": isfound? "bg-green-600":isdiscarded?"bg-gray-500": "bg-blue-600";
                           

                            return (
                                    <div key={index} 
                                    className={`${bgColor} border-2 border-[rgb(0,17,28)] py-2 text-[#FFF0F3] h-[55px] w-[60px]  
                                            rounded-md shadow-xl text-[17.5px] flex items-center justify-center absolute transition-all duration-700 ease-in-out `}
                                    style={{
                                            left: `${index * spacing}px`,  // use the position mapping
                                            top: isCompare ? "-20px" : "0px", // lift when swapping
                                            zIndex: isCompare? 10 : 1,
                                            }}        
                                            
                                            >
                                        <strong>{items}</strong>
                                    </div>
                            )
                        })
                    }
                </div>

            </div>
            <div className="mt-5 flex items-center justify-center gap-4 ">
                <button className={`px-2 py-2.5 border border-white font-[600] rounded-[8px] text-white  ${hasStarted?"bg-gray-400 cursor-not-allowed":"bg-green-500  cursor-pointer"}`} onClick={startSearch}>Start</button>
                <button className="bg-green-500 px-2 border border-white py-2.5 font-[600] rounded-[8px] text-white cursor-pointer" onClick={stopSearch}>{hasstop ? "Resume" : "Pause"}</button>
                <button className="bg-green-500 px-2 border border-white py-2.5 font-[600] rounded-[8px] text-white cursor-pointer" onClick={resetSearch}>reset</button>
                <button className="bg-green-500 px-2 border border-white py-2.5 font-[600] rounded-[8px] text-white cursor-pointer" onClick={NewArray}>Random Array</button>


                <div className="flex items-center gap-1 ml-3">
                    <label>Speed</label>
                    <input className="accent-blue-500" type="range" min="100" max="1000" value={sliderValue} onChange={(e) => { setspeed(1100 - e.target.value); setSliderValue(e.target.value); }}></input>
                    <span>({Math.round(((1000 - speed) / 900) * 100)}%)</span>
                </div>

                <div className="flex items-center gap-2 ml-3">
                    <label>value:</label>
                    <input className="text-blue-500 pl-3 py-1.5 border border-gray-400 rounded-md " type="text" placeholder="value to be searched.." value={target} onChange={(e)=>{setTarget(e.target.value)}}></input>
                </div>
            </div>
        </div>
    )
}