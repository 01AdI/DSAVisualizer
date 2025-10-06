
import { useState } from "react";

export default function LinkedList({ name }) {
  const [list, setList] = useState([10, 20, 30]); // initial linked list
  const [value, setValue] = useState("");
  const [pos, setPos] = useState("");

  // 🔹 Insert at start
  const insertStart = () => {
    if (!value.toString().trim()) return;
    setList([Number(value), ...list]);
    setValue("");
  };

  // 🔹 Insert at end
  const insertEnd = () => {
    if (!value.toString().trim()) return;
    setList([...list, Number(value)]);
    setValue("");
  };

  // 🔹 Insert at position
  const insertPos = () => {
    if (!value.toString().trim() || !pos) return;
    let index = Number(pos);
    if (index < 0 || index > list.length) {
      alert("Invalid position!");
      return;
    }
    const newList = [...list];
    newList.splice(index, 0, Number(value));
    setList(newList);
    setValue("");
    setPos("");
  };

  // 🔹 Delete at start
  const deleteStart = () => {
    if (list.length === 0) {
      alert("List is empty!");
      return;
    }
    setList(list.slice(1));
  };

  // 🔹 Delete at end
  const deleteEnd = () => {
    if (list.length === 0) {
      alert("List is empty!");
      return;
    }
    setList(list.slice(0, -1));
  };

  // 🔹 Delete at position
  const deletePos = () => {
    if (!pos) return;
    let index = Number(pos);
    if (index < 0 || index >= list.length) {
      alert("Invalid position!");
      return;
    }
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
    setPos("");
  };

  return (
    <div className="flex flex-col w-[1230px] py-6 px-3 rounded-md bg-black shadow-xl">
      <div className="flex flex-col gap-6 items-center justify-center h-[80vh] rounded-md bg-[oklch(0.208_0.042_265.755)]">

        {/* Linked List Display */}
        <div className="flex items-center gap-4">
          {list.length === 0 && (
            <p className="text-gray-400">Linked List is empty</p>
          )}

          {list.map((node, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div className="px-4 py-2 border border-blue-400 rounded bg-[#00111C] text-lg  text-white shadow-md">
                {node}
              </div>
              {idx < list.length - 1 && <span className="text-white">→</span>}
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3 mt-3">
          {(name === "insertStart" || name === "insertEnd" || name === "insertPos") && (
            <input
              className="border rounded-md px-2 py-1 "
              type="text"
              value={value}
              placeholder="Enter value"
              onChange={(e) => setValue(e.target.value)}
            />
          )}

          {(name === "insertPos" || name === "DeletePos") && (
            <input
              className="border rounded-md px-2 py-1 "
              type="number"
              value={pos}
              placeholder="Enter position"
              onChange={(e) => setPos(e.target.value)}
            />
          )}
        </div>

        <div className="flex gap-4 mt-4">
          {name === "insertStart" && (
            <button
              onClick={insertStart}
              className="px-4 py-2 bg-green-600 rounded hover:bg-green-800"
            >
              Insert Start
            </button>
          )}

          {name === "insertEnd" && (
            <button
              onClick={insertEnd}
              className="px-4 py-2 bg-green-600 rounded hover:bg-green-800"
            >
              Insert End
            </button>
          )}

          {name === "insertPos" && (
            <button
              onClick={insertPos}
              className="px-4 py-2 bg-green-600 rounded hover:bg-green-800"
            >
              Insert at Position
            </button>
          )}

          {name === "DeleteStart" && (
            <button
              onClick={deleteStart}
              className="px-4 py-2 bg-red-600 rounded hover:bg-red-800"
            >
              Delete Start
            </button>
          )}

          {name === "DeleteEnd" && (
            <button
              onClick={deleteEnd}
              className="px-4 py-2 bg-red-600 rounded hover:bg-red-800"
            >
              Delete End
            </button>
          )}

          {name === "DeletePos" && (
            <button
              onClick={deletePos}
              className="px-4 py-2 bg-red-600 rounded hover:bg-red-800"
            >
              Delete at Position
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
