import { useState } from "react";

function generateArray(n = 20, min = 10, max = 100) {
    return Array.from({ length: n }, () =>
        Math.floor(Math.random() * (max - min + 1)) + min
    );
}


export default function RaceMode() {
  const [algo1, setAlgo1] = useState("");
  const [algo2, setAlgo2] = useState("");
  const [result, setResult] = useState(null);
  const [running, setRunning] = useState(false);

  const algorithms = {
    sorting: ["Bubble Sort", "Insertion Sort", "Merge Sort","Quick Sort","Selection Sort"],
    searching: ["Linear Search", "Binary Search"],
  };

 
  const [data, setData] = useState(generateArray());
  const [arr1State, setArr1State] = useState([...data]);
  const [arr2State, setArr2State] = useState([...data]);

  const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

 const algorithmFunctions = {
  // 🟦 Bubble Sort
  "Bubble Sort": async (arr, setVis) => {
    let a = [...arr];
    const start = performance.now();
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < a.length - i - 1; j++) {
        if (a[j] > a[j + 1]) {
          [a[j], a[j + 1]] = [a[j + 1], a[j]];
          setVis([...a]);
          await sleep(50);
        }
      }
    }
    const end = performance.now();
    return end - start;
  },

  // 🟩 Insertion Sort
  "Insertion Sort": async (arr, setVis) => {
    let a = [...arr];
    const start = performance.now();
    for (let i = 1; i < a.length; i++) {
      let key = a[i];
      let j = i - 1;
      while (j >= 0 && a[j] > key) {
        a[j + 1] = a[j];
        j--;
        setVis([...a]);
        await sleep(50);
      }
      a[j + 1] = key;
      setVis([...a]);
      await sleep(50);
    }
    const end = performance.now();
    return end - start;
  },

  // 🟥 Selection Sort
  "Selection Sort": async (arr, setVis) => {
    let a = [...arr];
    const start = performance.now();
    for (let i = 0; i < a.length; i++) {
      let minIdx = i;
      for (let j = i + 1; j < a.length; j++) {
        if (a[j] < a[minIdx]) minIdx = j;
      }
      [a[i], a[minIdx]] = [a[minIdx], a[i]];
      setVis([...a]);
      await sleep(50);
    }
    const end = performance.now();
    return end - start;
  },

  // 🟨 Merge Sort
  "Merge Sort": async (arr, setVis) => {
    let a = [...arr];
    const start = performance.now();

    async function mergeSort(array) {
      if (array.length <= 1) return array;

      const mid = Math.floor(array.length / 2);
      const left = await mergeSort(array.slice(0, mid));
      const right = await mergeSort(array.slice(mid));

      return merge(left, right);
    }

    async function merge(left, right) {
      let result = [];
      let i = 0, j = 0;

      while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
          result.push(left[i++]);
        } else {
          result.push(right[j++]);
        }
        setVis([...result, ...left.slice(i), ...right.slice(j)]);
        await sleep(50);
      }

      return [...result, ...left.slice(i), ...right.slice(j)];
    }

    const sorted = await mergeSort(a);
    setVis(sorted);
    const end = performance.now();
    return end - start;
  },

  // 🟧 Quick Sort
  "Quick Sort": async (arr, setVis) => {
    let a = [...arr];
    const start = performance.now();

    async function quickSort(low, high) {
      if (low < high) {
        const pi = await partition(low, high);
        await quickSort(low, pi - 1);
        await quickSort(pi + 1, high);
      }
    }

    async function partition(low, high) {
      let pivot = a[high];
      let i = low - 1;
      for (let j = low; j < high; j++) {
        if (a[j] < pivot) {
          i++;
          [a[i], a[j]] = [a[j], a[i]];
          setVis([...a]);
          await sleep(50);
        }
      }
      [a[i + 1], a[high]] = [a[high], a[i + 1]];
      setVis([...a]);
      await sleep(50);
      return i + 1;
    }

    await quickSort(0, a.length - 1);
    const end = performance.now();
    return end - start;
  },

  // 🔵 Linear Search
  "Linear Search": async (arr, setVis) => {
    const target = arr[Math.floor(Math.random() * arr.length)];
    const start = performance.now();
    for (let i = 0; i < arr.length; i++) {
      setVis(arr.map((x, idx) => (idx === i ? x + 10 : x)));
      await sleep(50);
      if (arr[i] === target) break;
    }
    const end = performance.now();
    return end - start;
  },

  // 🔴 Binary Search (works only on sorted array)
  "Binary Search": async (arr, setVis) => {
    let a = [...arr].sort((x, y) => x - y);
    const target = a[Math.floor(Math.random() * a.length)];
    const start = performance.now();
    let left = 0, right = a.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      setVis(a.map((x, idx) => (idx === mid ? x + 10 : x)));
      await sleep(100);
      if (a[mid] === target) break;
      else if (a[mid] < target) left = mid + 1;
      else right = mid - 1;
    }
    const end = performance.now();
    return end - start;
  },
};


  const startBattle = async () => {
    if (!algo1 || !algo2) {
      alert("Select both algorithms first!");
      return;
    }

    setRunning(true);
    setResult(null);

    const arr1 = [...data];
    const arr2 = [...data];

    const func1 = algorithmFunctions[algo1];
    const func2 = algorithmFunctions[algo2];

    if (!func1 || !func2) {
      alert("Selected algorithms not implemented yet.");
      setRunning(false);
      return;
    }

    const [time1, time2] = await Promise.all([
      func1(arr1, setArr1State),
      func2(arr2, setArr2State),
    ]);

    const winner =
      time1 < time2
        ? `${algo1} wins by ${(time2 - time1).toFixed(2)} ms`
        : `${algo2} wins by ${(time1 - time2).toFixed(2)} ms`;

    setResult({ time1, time2, winner });
    setRunning(false);
  };

  return (
    <div className="bg-[rgb(0,17,28)] text-[#FFF0F3] min-h-screen py-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-400 mb-6">⚡ Raze Mode ⚡</h1>

      {/* Dropdowns */}
      <div className="flex gap-6 mb-6">
        <select
          className="px-3 py-2 bg-black text-white rounded"
          value={algo1}
          onChange={(e) => setAlgo1(e.target.value)}
        >
          <option value="">Select Algorithm 1</option>
          {Object.values(algorithms)
            .flat()
            .map((algo) => (
              <option key={algo}>{algo}</option>
            ))}
        </select>

        <select
          className="px-3 py-2 bg-black text-white rounded"
          value={algo2}
          onChange={(e) => setAlgo2(e.target.value)}
        >
          <option value="">Select Algorithm 2</option>
          {Object.values(algorithms)
            .flat()
            .map((algo) => (
              <option key={algo}>{algo}</option>
            ))}
        </select>

        <button
          onClick={startBattle}
          disabled={running}
          className={`px-5 py-2 rounded ${
            running ? "bg-gray-500" : "bg-blue-600 hover:bg-blue-800"
          }`}
        >
          {running ? "Running..." : "Start Battle"}
        </button>
      </div>

      {/* Visualization Section */}
      <div className="flex justify-center gap-12 w-[90%] mt-8">
        <div className="flex flex-col items-center">
          <h2 className="text-xl mb-3">{algo1 || "Algorithm 1"}</h2>
          <div className="flex items-end gap-1 bg-[#00111C] p-3 rounded h-56 w-[500px] justify-center">
            {arr1State.map((val, i) => (
              <div
                key={i}
                style={{ height: `${val * 2}px` }}
                className="w-[18px] bg-blue-500 rounded-t items-center flex"
              >
                {val}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-xl mb-3">{algo2 || "Algorithm 2"}</h2>
          <div className="flex items-end gap-1 bg-[#00111C] p-3 rounded h-56 w-[500px] justify-center">
            {arr2State.map((val, i) => (
              <div
                key={i}
                style={{ height: `${val * 2}px` }}
                className="w-[18px] bg-red-500 rounded-t items-center flex"
              >
                 {val}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Result */}
      {result && (
        <div className="mt-8 text-center bg-black px-6 py-4 rounded-lg">
          <h3 className="text-xl text-green-400 font-semibold mb-2">🏁 Result</h3>
          <p className="text-gray-300">{result.winner}</p>
          <p className="text-sm text-gray-400 mt-2">
            {algo1}: {result.time1.toFixed(2)} ms | {algo2}: {result.time2.toFixed(2)} ms
          </p>
        </div>
      )}
    </div>
  );
}
