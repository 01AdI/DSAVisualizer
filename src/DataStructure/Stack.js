import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

export default function Stack({ name }) {
  const [stack, setStack] = useState([10, 20]); // initial stack

  // 🔹 Push
  const pushElement = () => {
    const value = prompt("Enter value to push:");
    if (value) setStack([...stack, parseInt(value)]);
  };

  // 🔹 Pop
  const popElement = () => {
    if (stack.length > 0) {
      const newStack = [...stack];
      newStack.pop();
      setStack(newStack);
    } else {
      alert("Stack is empty!");
    }
  };

  // 🔹 Peek
  const peekElement = () => {
    if (stack.length > 0) {
      alert(`Top element is: ${stack[stack.length - 1]}`);
    } else {
      alert("Stack is empty!");
    }
  };

  return (
    <div className="flex flex-col w-[1230px] py-6 px-3 rounded-md bg-black shadow-xl">
      <div className="flex flex-col gap-2 items-center justify-center h-[80vh] rounded-md bg-[oklch(0.208_0.042_265.755)]">
        
        {/* Stack Display */}
        <div className="flex flex-col-reverse gap-2.5 items-center relative">
          {stack.map((val, idx) => {
            const isTop = idx === stack.length - 1; // top element
            return (
              <div
                key={idx}
                className="w-16 h-12 flex items-center justify-center border border-blue-400 rounded bg-[#00111C] text-lg mt-1 relative"
              >
                {val}
                {isTop && (
                  <div className="absolute left-[-100px] flex items-center gap-2">
                    <span className="text-pink-400 font-bold">Top</span>
                    <FontAwesomeIcon className="text-pink-400" icon={faArrowRight} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom label */}
        <div className="text-gray-400 text-sm mb-6">Bottom</div>

        {/* Controls */}
        <div>
          {name === "Push" && (
            <button
              onClick={pushElement}
              className="px-4 py-2 bg-green-600 rounded hover:bg-green-800"
            >
              Push
            </button>
          )}

          {name === "Pop" && (
            <button
              onClick={popElement}
              className="px-4 py-2 bg-red-600 rounded hover:bg-red-800"
            >
              Pop
            </button>
          )}

          {name === "Peek" && (
            <button
              onClick={peekElement}
              className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-800"
            >
              Peek
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
