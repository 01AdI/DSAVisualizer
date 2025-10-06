import { Link } from "react-router";


export default function Algo_categories(){
    return(
        <div className="mt-30">
            <h1 className="text-4xl font-sans text-center tracking-[-0.45px] font-[800]">Algorithms Categories</h1>

            <div className=" grid grid-cols-3 gap-5 mt-10 w-[95%] mx-auto ">

                <div className="flex flex-col justify-center relative bg-black font-serif rounded-2xl py-4 px-2 transition-transform duration-200 ease-in-out hover:scale-95 shadow-md">

                    <div className="flex items-center justify-between  mx-auto w-[90%] mt-4">
                       <svg className="h-[35px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#123063" d="M96 96C113.7 96 128 110.3 128 128L128 464C128 472.8 135.2 480 144 480L544 480C561.7 480 576 494.3 576 512C576 529.7 561.7 544 544 544L144 544C99.8 544 64 508.2 64 464L64 128C64 110.3 78.3 96 96 96zM208 288C225.7 288 240 302.3 240 320L240 384C240 401.7 225.7 416 208 416C190.3 416 176 401.7 176 384L176 320C176 302.3 190.3 288 208 288zM352 224L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 224C288 206.3 302.3 192 320 192C337.7 192 352 206.3 352 224zM432 256C449.7 256 464 270.3 464 288L464 384C464 401.7 449.7 416 432 416C414.3 416 400 401.7 400 384L400 288C400 270.3 414.3 256 432 256zM576 160L576 384C576 401.7 561.7 416 544 416C526.3 416 512 401.7 512 384L512 160C512 142.3 526.3 128 544 128C561.7 128 576 142.3 576 160z"/></svg>
                        <strong className="px-2 rounded-xl border border-green-500 bg-green-500">Implemented</strong>

                    </div>

                    <div className="mt-4 mb-4 w-[90%] mx-auto line-clamp-1 ">
                        <h2 className="text-2xl font-bold tracking-tight">Sorting Algorithm</h2>
                    </div>

                    <div className="mb-5 w-[90%] mx-auto line-clamp-1 ">
                        <strong className="text-[16px] font-[500] text-gray-500">Visualize and compare different sorting techniques</strong>
                    </div>

                    <div className="w-[90%] mx-auto flex items-center gap-2 flex-wrap h-[73px]">
                        <div className="bg-gray-500 text-[14px] font-[400] tracking-tight rounded-xl p-1.5">Bubble Sort</div>
                        <div className="bg-gray-500 text-[14px] font-[400] tracking-tight rounded-xl p-1.5">Insertion Sort</div>
                        <div className="bg-gray-500 text-[14px] font-[400] tracking-tight rounded-xl p-1.5">Merge Sort</div>
                        <div className="bg-gray-500 text-[14px] font-[400] tracking-tight rounded-xl p-1.5">Quick Sort</div>
                        <div className="bg-gray-500 text-[14px] font-[400] tracking-tight rounded-xl p-1.5">Selection Sort</div>
                    </div>

                    <Link to="/algorithms/Sorting">
                    <div className=" mt-8 mb-5 w-[90%] mx-auto line-clamp-1 transition-transform duration-200 ease-in-out hover:scale-105" >
                        <button className="flex items-center gap-2 cursor-pointer">Explore Sorting Algorithms
                            <svg  className="h-[20px] "xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#ffffff" d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"/></svg>
                        </button>
                    </div>
                    </Link>

                </div>

                <div className="flex flex-col justify-center relative bg-black font-serif rounded-2xl py-4 px-2 transition-transform duration-200 ease-in-out hover:scale-95 shadow-md ">

                    <div className="flex items-center justify-between  mx-auto w-[90%] mt-4">
                       <svg className="h-[35px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#0062ff" d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z"/></svg>
                       <strong className="px-2 rounded-xl border border-green-500 bg-green-500">Implemented</strong>

                    </div>

                    <div className="mt-4 mb-4 w-[90%] mx-auto line-clamp-1 ">
                        <h2 className="text-2xl font-bold tracking-tight">Searching Algorithms</h2>
                    </div>

                    <div className="mb-5 w-[90%] mx-auto line-clamp-1 ">
                        <strong className="text-[16px] font-[500] text-gray-500">Explore efficient ways to find elements in data structures</strong>
                    </div>

                    <div className="w-[90%] mx-auto flex items-center gap-2 flex-wrap h-[73px]">
                        <div className="bg-gray-500 text-[14px] font-[400] tracking-tight rounded-xl p-1.5">Linear Search</div>
                        <div className="bg-gray-500 text-[14px] font-[400] tracking-tight rounded-xl p-1.5">Binary Search</div>
                    </div>

                    <Link to="/algorithms/Searching">
                        <div className=" mt-8 mb-5 w-[90%] mx-auto line-clamp-1 transition-transform duration-200 ease-in-out hover:scale-105" >
                            <button className="flex items-center gap-2 cursor-pointer">Explore Searching Algorithms
                                <svg  className="h-[20px] "xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#ffffff" d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"/></svg>
                            </button>
                        </div>
                    </Link>

                </div>

                 <div className="flex flex-col justify-center relative bg-black font-serif rounded-2xl  py-4 px-2 transition-transform duration-200 ease-in-out hover:scale-95 shadow-md">

                    <div className="flex items-center justify-between  mx-auto w-[90%] mt-4 ">
                       <svg className="h-[35px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#06e09e" d="M482.4 221.9C517.7 213.6 544 181.9 544 144C544 99.8 508.2 64 464 64C420.6 64 385.3 98.5 384 141.5L200.2 215.1C185.7 200.8 165.9 192 144 192C99.8 192 64 227.8 64 272C64 316.2 99.8 352 144 352C156.2 352 167.8 349.3 178.1 344.4L323.7 471.8C321.3 479.4 320 487.6 320 496C320 540.2 355.8 576 400 576C444.2 576 480 540.2 480 496C480 468.3 466 443.9 444.6 429.6L482.4 221.9zM220.3 296.2C222.5 289.3 223.8 282 224 274.5L407.8 201C411.4 204.5 415.2 207.7 419.4 210.5L381.6 418.1C376.1 419.4 370.8 421.2 365.8 423.6L220.3 296.2z"/></svg>
                        <strong className="px-2 rounded-xl border border-green-500 bg-green-500">Implemented</strong>

                    </div>

                    <div className="mt-4 mb-4 w-[90%] mx-auto line-clamp-1 ">
                        <h2 className="text-2xl font-bold tracking-tight">Graph Algorithms</h2>
                    </div>

                    <div className="mb-5 w-[90%] mx-auto line-clamp-1 ">
                        <strong className="text-[16px] font-[500] text-gray-500">Visualize traversal and pathfinding techniques</strong>
                    </div>

                    <div className="w-[90%] mx-auto flex items-center gap-2 flex-wrap h-[73px]">
                        <div className="bg-gray-500 text-[14px] font-[400] tracking-tight rounded-xl p-1.5">BFS</div>
                        <div className="bg-gray-500 text-[14px] font-[400] tracking-tight rounded-xl p-1.5">DFS</div>
                        <div className="bg-gray-500 text-[14px] font-[400] tracking-tight rounded-xl p-1.5">Dijkstra's</div>
                        <div className="bg-gray-500 text-[14px] font-[400] tracking-tight rounded-xl p-1.5">Prim's</div>
                        <div className="bg-gray-500 text-[14px] font-[400] tracking-tight rounded-xl p-1.5">Kruskal's</div>
                       

                    </div>
                    
                    <Link to ="/algorithms/Graph">
                    <div className=" mt-8 mb-5 w-[90%] mx-auto line-clamp-1 transition-transform duration-200 ease-in-out hover:scale-105" >
                        <button className="flex items-center gap-2 cursor-pointer">Explore Graph Algorithms
                            <svg  className="h-[20px] "xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#ffffff" d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"/></svg>
                        </button>
                    </div>
                    </Link>

                </div>

                 <div className="flex flex-col justify-center relative bg-black font-serif rounded-2xl py-4 px-2  transition-transform duration-200 ease-in-out hover:scale-95 shadow-md">

                    <div className="flex items-center justify-between  mx-auto w-[90%] mt-4">
                     <svg className="h-[35px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#FFD43B" d="M256 128C256 110.3 270.3 96 288 96L352 96C369.7 96 384 110.3 384 128L384 192C384 209.7 369.7 224 352 224L344 224L344 288L464 288C503.8 288 536 320.2 536 360L536 416L544 416C561.7 416 576 430.3 576 448L576 512C576 529.7 561.7 544 544 544L480 544C462.3 544 448 529.7 448 512L448 448C448 430.3 462.3 416 480 416L488 416L488 360C488 346.7 477.3 336 464 336L344 336L344 416L352 416C369.7 416 384 430.3 384 448L384 512C384 529.7 369.7 544 352 544L288 544C270.3 544 256 529.7 256 512L256 448C256 430.3 270.3 416 288 416L296 416L296 336L176 336C162.7 336 152 346.7 152 360L152 416L160 416C177.7 416 192 430.3 192 448L192 512C192 529.7 177.7 544 160 544L96 544C78.3 544 64 529.7 64 512L64 448C64 430.3 78.3 416 96 416L104 416L104 360C104 320.2 136.2 288 176 288L296 288L296 224L288 224C270.3 224 256 209.7 256 192L256 128z"/></svg>
                        <strong className="px-2 rounded-xl border border-amber-500 text-amber-500">Coming Soon</strong>

                    </div>

                    <div className="mt-4 mb-4 w-[90%] mx-auto line-clamp-1 ">
                        <h2 className="text-2xl font-bold tracking-tight">Dynamic Programming</h2>
                    </div>

                    <div className="mb-5 w-[90%] mx-auto line-clamp-1 ">
                        <strong className="text-[16px] font-[500] text-gray-500">Understand optimization through subproblem solutions</strong>
                    </div>

                    <div className="w-[90%] mx-auto flex items-center gap-2 flex-wrap h-[73px]">
                        <div className="bg-gray-500 text-[14px] font-[400] tracking-tight rounded-xl p-1.5">Fibonacci</div>
                        <div className="bg-gray-500 text-[14px] font-[400] tracking-tight rounded-xl p-1.5">Knapsack</div>
                        <div className="bg-gray-500 text-[14px] font-[400] tracking-tight rounded-xl p-1.5">LCS</div>
                        <div className="bg-gray-500 text-[14px] font-[400] tracking-tight rounded-xl p-1.5">LIS</div>

                    </div>

                    <div className=" mt-8 mb-5 w-[90%] mx-auto line-clamp-1 transition-transform duration-200 ease-in-out hover:scale-105" >
                        <button className="flex items-center gap-2 text-gray-400 cursor-not-allowed">Comming Soon...</button>
                    </div>

                </div>

                 <div className="flex flex-col justify-center relative bg-black font-serif rounded-2xl py-4 px-2 transition-transform duration-200 ease-in-out hover:scale-95 shadow-md">

                    <div className="flex items-center justify-between  mx-auto w-[90%] mt-4">
                       <svg className="h-[35px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#ff5c5c" d="M176 168C189.3 168 200 157.3 200 144C200 130.7 189.3 120 176 120C162.7 120 152 130.7 152 144C152 157.3 162.7 168 176 168zM256 144C256 176.8 236.3 205 208 217.3L208 288L384 288C410.5 288 432 266.5 432 240L432 217.3C403.7 205 384 176.8 384 144C384 99.8 419.8 64 464 64C508.2 64 544 99.8 544 144C544 176.8 524.3 205 496 217.3L496 240C496 301.9 445.9 352 384 352L208 352L208 422.7C236.3 435 256 463.2 256 496C256 540.2 220.2 576 176 576C131.8 576 96 540.2 96 496C96 463.2 115.7 435 144 422.7L144 217.4C115.7 205 96 176.8 96 144C96 99.8 131.8 64 176 64C220.2 64 256 99.8 256 144zM488 144C488 130.7 477.3 120 464 120C450.7 120 440 130.7 440 144C440 157.3 450.7 168 464 168C477.3 168 488 157.3 488 144zM176 520C189.3 520 200 509.3 200 496C200 482.7 189.3 472 176 472C162.7 472 152 482.7 152 496C152 509.3 162.7 520 176 520z"/></svg>
                        <strong className="px-2 rounded-xl border border-amber-500 text-amber-500">Coming Soon</strong>

                    </div>

                    <div className="mt-4 mb-4 w-[90%] mx-auto line-clamp-1 ">
                        <h2 className="text-2xl font-bold tracking-tight">Greedy Algorithms</h2>
                    </div>

                    <div className="mb-5 w-[90%] mx-auto line-clamp-1 ">
                        <strong className="text-[16px] font-[500] text-gray-500">Learn optimal local choices for global solutions</strong>
                    </div>

                    <div className="w-[90%] mx-auto flex items-center gap-2 flex-wrap h-[73px]">
                        <div className="bg-gray-500 text-[14px] font-[400] tracking-tight rounded-xl p-1.5">Activity Selection</div>
                        <div className="bg-gray-500 text-[14px] font-[400] tracking-tight rounded-xl p-1.5">Huffman Coding</div>
                    </div>

                    <div className=" mt-8 mb-5 w-[90%] mx-auto line-clamp-1 transition-transform duration-200 ease-in-out hover:scale-105" >
                        <button className="flex items-center gap-2 text-gray-400 cursor-not-allowed">Comming Soon...</button>
                    </div>

                </div>

                 <div className="flex flex-col justify-center relative bg-black font-serif rounded-2xl py-4 px-2 transition-transform duration-200 ease-in-out hover:scale-95 shadow-md">

                    <div className="flex items-center justify-between  mx-auto w-[90%] mt-4">
                      <svg className="h-[35px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#B197FC" d="M0 320C0 231.6 71.6 160 160 160C210.4 160 257.8 183.7 288 224L320 266.7L352 224C382.2 183.7 429.6 160 480 160C568.4 160 640 231.6 640 320C640 408.4 568.4 480 480 480C429.6 480 382.2 456.3 352 416L320 373.3L288 416C257.8 456.3 210.4 480 160 480C71.6 480 0 408.4 0 320zM280 320L236.8 262.4C218.7 238.2 190.2 224 160 224C107 224 64 267 64 320C64 373 107 416 160 416C190.2 416 218.7 401.8 236.8 377.6L280 320zM360 320L403.2 377.6C421.3 401.8 449.8 416 480 416C533 416 576 373 576 320C576 267 533 224 480 224C449.8 224 421.3 238.2 403.2 262.4L360 320z"/></svg>
                      <strong className="px-2 rounded-xl border border-amber-500 text-amber-500">Coming Soon</strong>

                    </div>

                    <div className="mt-4 mb-4 w-[90%] mx-auto line-clamp-1 ">
                        <h2 className="text-2xl font-bold tracking-tight">Mathematical Algorithms</h2>
                    </div>

                    <div className="mb-5 w-[90%] mx-auto line-clamp-1 ">
                        <strong className="text-[16px] font-[500] text-gray-500">Explore fundamental mathematical computations</strong>
                    </div>

                    <div className="w-[90%] mx-auto flex items-center gap-2 flex-wrap h-[73px]">
                        <div className="bg-gray-500 text-[14px] font-[400] tracking-tight rounded-xl p-1.5">GCD (Euclidean)</div>
                        <div className="bg-gray-500 text-[14px] font-[400] tracking-tight rounded-xl p-1.5">Sieve of Eratosthenes</div>
                        <div className="bg-gray-500 text-[14px] font-[400] tracking-tight rounded-xl p-1.5">Prime Factorization</div>

                    </div>
                 
                    <div className=" mt-8 mb-5 w-[90%] mx-auto line-clamp-1 transition-transform duration-200 ease-in-out hover:scale-105" >
                        <button className="flex items-center gap-2 text-gray-400 cursor-not-allowed">Comming Soon...</button>
                    </div>

                </div>


            </div>
        </div>
    )
}