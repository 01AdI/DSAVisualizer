import { useState } from "react";

export default function Array({name}){
  // initial array
  const [arr, setArr] = useState([1, 2]);

  // 🔹 Insert at start
  const insertAtStart = () => {
    const newValue = prompt("Enter value to insert at start:");
    if (newValue) setArr([parseInt(newValue), ...arr]);
  };

  // 🔹 Insert at end
  const insertAtEnd = () => {
    const newValue = prompt("Enter value to insert at end:");
    if (newValue) setArr([...arr, parseInt(newValue)]);
  };

  // 🔹 Insert at position
  const insertAtPos = () => {
    const pos = parseInt(prompt("Enter position (0-based index):"));
    if(pos>arr.length){
        alert("not a valid index");
        return;
    }
    const value = prompt("Enter value to insert:");
    if (pos >= 0 && pos <= arr.length && value) {
      const newArr = [...arr];
      newArr.splice(pos, 0, parseInt(value));
      setArr(newArr);
    }
    
  };

  // 🔹 Delete (remove last element for now)
  const deleteElem = () => {
    if (arr.length > 0) {
      const newArr = [...arr];
      newArr.pop();
      setArr(newArr);
    }
  };

  return (
        <div className="flex flex-col w-[1230px]  py-6 px-3 rounded-md bg-black shadow-xl">
        <div className=" flex flex-col gap-10 items-center justify-center h-[80vh] rounded-md bg-[oklch(0.208_0.042_265.755)]">
    

      {/* Array display */}
      <div className="flex gap-3 mb-6">
        {arr.map((val, idx) => (
            <div className="flex flex-col gap-3 items-center text-blue-400" key={idx}>
                
                <div className="w-14 h-14 flex items-center justify-center border border-blue-400 rounded bg-[#00111C] text-lg">
                    {val}
                </div>
                {idx}
          </div>
        ))}
      </div>

      {/* Controls (depends on button selected in sidebar) */}
      <div>
        {name === "insertStart" && (
          <button
            onClick={insertAtStart}
            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-800"
          >
            Insert at Start
          </button>
        )}

        {name === "insertEnd" && (
          <button
            onClick={insertAtEnd}
            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-800"
          >
            Insert at End
          </button>
        )}

        {name === "insertPos" && (
          <button
            onClick={insertAtPos}
            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-800"
          >
            Insert at Position
          </button>
        )}

        {name === "Delete" && (
          <button
            onClick={deleteElem}
            className="px-4 py-2 bg-red-600 rounded hover:bg-red-800"
          >
            Delete Element
          </button>
        )}
      </div>

      </div>
    </div>
  );
}
