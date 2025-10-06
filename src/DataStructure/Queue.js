import React, { useState } from "react";

export default function Queue({ name }) {
  const [queue, setQueue] = useState([]);
  const [front, setFront] = useState(-1);
  const [rear, setRear] = useState(-1);
  const [value, setValue] = useState("");

  // 🔹 Enqueue
  const enqueue = () => {
    if (!value.toString().trim()) return;

    setQueue((prev) => {
      const updated = [...prev, value];
      if (front === -1) setFront(0); // first element
      setRear(updated.length - 1);
      return updated;
    });
    setValue(""); // clear input
  };

  // 🔹 Dequeue
  const dequeue = () => {
    if (queue.length === 0) {
      alert("Queue is empty!");
      return;
    }
    setQueue((prev) => {
      const updated = prev.slice(1);
      if (updated.length === 0) {
        setFront(-1);
        setRear(-1);
      } else {
        setFront(0);
        setRear(updated.length - 1);
      }
      return updated;
    });
  };

  // 🔹 Peek
  const peek = () => {
    if (front !== -1) {
      alert(`Front element is: ${queue[front]}`);
    } else {
      alert("Queue is empty!");
    }
  };

  return (
    <div className="flex flex-col w-[1230px] py-6 px-3 rounded-md bg-black shadow-xl">
      <div className="flex flex-col gap-10 items-center justify-center h-[80vh] rounded-md bg-[oklch(0.208_0.042_265.755)]">

        {/* Queue display */}
        <div className="flex gap-6 relative">
          {queue.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center relative">
              {/* Front / Rear pointer labels */}
              {idx === front && (
                <span className="text-green-400 text-sm absolute bottom-[-20px]">Front</span>
              )}
              {idx === rear && (
                <span className="text-red-400 text-sm absolute bottom-[-20px]">
                  {front === rear ? "Front/Rear" : "Rear"}
                </span>
              )}

              {/* Queue box */}
              <div
                className={`px-4 py-2 rounded shadow-md ${
                  idx === front? "bg-green-500": idx === rear? "bg-red-500": " border border-blue-400 bg-[#00111C] text-lg"
                } text-white`}
              >
                {item}
              </div>
            </div>
          ))}
        </div>

        {/* Queue empty message */}
        {queue.length === 0 && (
          <p className="text-gray-400 mt-4">Queue is empty</p>
        )}

        {/* Controls */}
        
        {name === "Enqueue" && (
            <div className="flex items-center gap-2.5 mt-4">
          <label className="text-blue-400">Value:</label>
          <input
            className="border rounded-md px-2 py-1 "
            type="text"
            value={value}
            placeholder="Enter a number.."
            onChange={(e) => setValue(Number(e.target.value))}
          />
        </div>)}

        <div className="flex gap-4 mt-4">
          {name === "Enqueue" && (
            <button
              onClick={enqueue}
              className="px-4 py-2 bg-green-600 rounded hover:bg-green-800"
            >
              Enqueue
            </button>
          )}

          {name === "Dequeue" && (
            <button
              onClick={dequeue}
              className="px-4 py-2 bg-red-600 rounded hover:bg-red-800"
            >
              Dequeue
            </button>
          )}

          {name === "Peek" && (
            <button
              onClick={peek}
              className="px-4 py-2 bg-yellow-500 rounded hover:bg-yellow-700"
            >
              Peek
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
