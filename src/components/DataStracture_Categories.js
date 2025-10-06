import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faArrowsSpin } from "@fortawesome/free-solid-svg-icons";

export default function Data_Stracture_Categories(){
  return(
        <div className="mt-30">
            <h1 className="text-4xl font-sans text-center tracking-[-0.45px] font-[800]">Data Structure Categories</h1>

            <div className=" grid grid-cols-3 gap-5 mt-10 w-[95%] mx-auto ">

                <div className="flex flex-col justify-center relative bg-black font-serif rounded-2xl py-4 px-2 transition-transform duration-200 ease-in-out hover:scale-95 shadow-md">

                    <div className="flex items-center justify-between  mx-auto w-[90%] mt-4">
                      <svg className="h-[35px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#63E6BE" d="M288.3 61.5C308.1 50.1 332.5 50.1 352.3 61.5L528.2 163C548 174.4 560.2 195.6 560.2 218.4L560.2 421.4C560.2 444.3 548 465.4 528.2 476.8L352.3 578.5C332.5 589.9 308.1 589.9 288.3 578.5L112.5 477C92.7 465.6 80.5 444.4 80.5 421.6L80.5 218.6C80.5 195.7 92.7 174.6 112.5 163.2L288.3 61.5zM496.1 421.5L496.1 255.4L352.3 338.4L352.3 504.5L496.1 421.5z"/></svg>
                        <strong className="px-2 rounded-xl border border-green-500 bg-green-500">Implemented</strong>

                    </div>

                    <div className="mt-4 mb-4 w-[90%] mx-auto line-clamp-1 ">
                        <h2 className="text-2xl font-bold tracking-tight">Arrays</h2>
                    </div>

                    <div className="mb-5 w-[90%] mx-auto line-clamp-1 ">
                        <strong className="text-[16px] font-[500] text-gray-500">Explore the fundamental sequential data structure</strong>
                    </div>

                     <Link to ="/Structures/Array">
                    <div className=" mt-8 mb-5 w-[90%] mx-auto line-clamp-1 transition-transform duration-200 ease-in-out hover:scale-105" >
                        <button className="flex items-center gap-2 cursor-pointer">Explore Arrays
                            <svg  className="h-[20px] "xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#ffffff" d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"/></svg>
                        </button>
                    </div>
                    </Link>

                </div>

                <div className="flex flex-col justify-center relative bg-black font-serif rounded-2xl py-4 px-2 transition-transform duration-200 ease-in-out hover:scale-95 shadow-md ">

                    <div className="flex items-center justify-between  mx-auto w-[90%] mt-4">
                        <FontAwesomeIcon icon={faLayerGroup} style={{color: "#0055ff",height:"65px"}} />
                       <strong className="px-2 rounded-xl border border-green-500 bg-green-500">Implemented</strong>

                    </div>

                    <div className="mt-4 mb-4 w-[90%] mx-auto line-clamp-1 ">
                        <h2 className="text-2xl font-bold tracking-tight">Stacks</h2>
                    </div>

                    <div className="mb-5 w-[90%] mx-auto line-clamp-1 ">
                        <strong className="text-[16px] font-[500] text-gray-500">Understand the Last In First Out (LIFO) principles</strong>
                    </div>

                     <Link to ="/Structures/Stack">
                        <div className=" mt-8 mb-5 w-[90%] mx-auto line-clamp-1 transition-transform duration-200 ease-in-out hover:scale-105" >
                            <button className="flex items-center gap-2 cursor-pointer">Explore Stacks
                                <svg  className="h-[20px] "xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#ffffff" d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"/></svg>
                            </button>
                        </div>
                    </Link>

                </div>

                 <div className="flex flex-col justify-center relative bg-black font-serif rounded-2xl  py-4 px-2 transition-transform duration-200 ease-in-out hover:scale-95 shadow-md">

                    <div className="flex items-center justify-between  mx-auto w-[90%] mt-4 ">
                       <FontAwesomeIcon icon={faArrowsSpin} style={{color: "#7656d7",height:"35px"}} />
                        <strong className="px-2 rounded-xl border border-green-500 bg-green-500">Implemented</strong>

                    </div>

                    <div className="mt-4 mb-4 w-[90%] mx-auto line-clamp-1 ">
                        <h2 className="text-2xl font-bold tracking-tight">Queue</h2>
                    </div>

                    <div className="mb-5 w-[90%] mx-auto line-clamp-1 ">
                        <strong className="text-[16px] font-[500] text-gray-500">Learn about First In First Out (FIFO) operations</strong>
                    </div>

                   
                     <Link to ="/Structures/Queue">
                    <div className=" mt-8 mb-5 w-[90%] mx-auto line-clamp-1 transition-transform duration-200 ease-in-out hover:scale-105" >
                        <button className="flex items-center gap-2 cursor-pointer">Explore Queues
                            <svg  className="h-[20px] "xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#ffffff" d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"/></svg>
                        </button>
                    </div>
                    </Link>

                </div>

                 <div className="flex flex-col justify-center relative bg-black font-serif rounded-2xl py-4 px-2  transition-transform duration-200 ease-in-out hover:scale-95 shadow-md">

                    <div className="flex items-center justify-between  mx-auto w-[90%] mt-4">
                    <svg className="h-[35px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#FFD43B" d="M64 144C64 117.5 85.5 96 112 96L208 96C234.5 96 256 117.5 256 144L256 160L384 160L384 144C384 117.5 405.5 96 432 96L528 96C554.5 96 576 117.5 576 144L576 240C576 266.5 554.5 288 528 288L432 288C405.5 288 384 266.5 384 240L384 224L256 224L256 240C256 247.3 254.3 254.3 251.4 260.5L320 352L400 352C426.5 352 448 373.5 448 400L448 496C448 522.5 426.5 544 400 544L304 544C277.5 544 256 522.5 256 496L256 400C256 392.7 257.7 385.7 260.6 379.5L192 288L112 288C85.5 288 64 266.5 64 240L64 144z"/></svg>
                      <strong className="px-2 rounded-xl border border-green-500 bg-green-500">Implemented</strong>

                    </div>

                    <div className="mt-4 mb-4 w-[90%] mx-auto line-clamp-1 ">
                        <h2 className="text-2xl font-bold tracking-tight">Linked Lists</h2>
                    </div>

                    <div className="mb-5 w-[90%] mx-auto line-clamp-1 ">
                        <strong className="text-[16px] font-[500] text-gray-500">Visualize nodes connected via references</strong>
                    </div>

                    <Link to ="/Structures/LinkedList">
                    <div className=" mt-8 mb-5 w-[90%] mx-auto line-clamp-1 transition-transform duration-200 ease-in-out hover:scale-105" >
                        <button className="flex items-center gap-2 cursor-pointer">Explore Linked Lists
                            <svg  className="h-[20px] "xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#ffffff" d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"/></svg>
                        </button>
                    </div>
                    </Link>

                </div>

                 <div className="flex flex-col justify-center relative bg-black font-serif rounded-2xl py-4 px-2 transition-transform duration-200 ease-in-out hover:scale-95 shadow-md">

                    <div className="flex items-center justify-between  mx-auto w-[90%] mt-4">
                       <svg className="h-[35px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#ff5c5c" d="M176 168C189.3 168 200 157.3 200 144C200 130.7 189.3 120 176 120C162.7 120 152 130.7 152 144C152 157.3 162.7 168 176 168zM256 144C256 176.8 236.3 205 208 217.3L208 288L384 288C410.5 288 432 266.5 432 240L432 217.3C403.7 205 384 176.8 384 144C384 99.8 419.8 64 464 64C508.2 64 544 99.8 544 144C544 176.8 524.3 205 496 217.3L496 240C496 301.9 445.9 352 384 352L208 352L208 422.7C236.3 435 256 463.2 256 496C256 540.2 220.2 576 176 576C131.8 576 96 540.2 96 496C96 463.2 115.7 435 144 422.7L144 217.4C115.7 205 96 176.8 96 144C96 99.8 131.8 64 176 64C220.2 64 256 99.8 256 144zM488 144C488 130.7 477.3 120 464 120C450.7 120 440 130.7 440 144C440 157.3 450.7 168 464 168C477.3 168 488 157.3 488 144zM176 520C189.3 520 200 509.3 200 496C200 482.7 189.3 472 176 472C162.7 472 152 482.7 152 496C152 509.3 162.7 520 176 520z"/></svg>
                        <strong className="px-2 rounded-xl border border-amber-500 text-amber-500">Coming Soon</strong>

                    </div>

                    <div className="mt-4 mb-4 w-[90%] mx-auto line-clamp-1 ">
                        <h2 className="text-2xl font-bold tracking-tight">Trees</h2>
                    </div>

                    <div className="mb-5 w-[90%] mx-auto line-clamp-1 ">
                        <strong className="text-[16px] font-[500] text-gray-500">Explore hierarchical node-based structures</strong>
                    </div>


                    <div className=" mt-8 mb-5 w-[90%] mx-auto line-clamp-1 transition-transform duration-200 ease-in-out hover:scale-105" >
                        <button className="flex items-center gap-2 text-gray-400 cursor-not-allowed">Comming Soon...</button>
                    </div>

                </div>

                <div className="flex flex-col justify-center relative bg-black font-serif rounded-2xl py-4 px-2 transition-transform duration-200 ease-in-out hover:scale-95 shadow-md">

                    <div className="flex items-center justify-between  mx-auto w-[90%] mt-4">
                      <svg className="h-[35px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#06e09e" d="M482.4 221.9C517.7 213.6 544 181.9 544 144C544 99.8 508.2 64 464 64C420.6 64 385.3 98.5 384 141.5L200.2 215.1C185.7 200.8 165.9 192 144 192C99.8 192 64 227.8 64 272C64 316.2 99.8 352 144 352C156.2 352 167.8 349.3 178.1 344.4L323.7 471.8C321.3 479.4 320 487.6 320 496C320 540.2 355.8 576 400 576C444.2 576 480 540.2 480 496C480 468.3 466 443.9 444.6 429.6L482.4 221.9zM220.3 296.2C222.5 289.3 223.8 282 224 274.5L407.8 201C411.4 204.5 415.2 207.7 419.4 210.5L381.6 418.1C376.1 419.4 370.8 421.2 365.8 423.6L220.3 296.2z"/></svg>
                      <strong className="px-2 rounded-xl border border-amber-500 text-amber-500">Coming Soon</strong>

                    </div>

                    <div className="mt-4 mb-4 w-[90%] mx-auto line-clamp-1 ">
                        <h2 className="text-2xl font-bold tracking-tight">Graphs</h2>
                    </div>

                    <div className="mb-5 w-[90%] mx-auto line-clamp-1 ">
                        <strong className="text-[16px] font-[500] text-gray-500">Understand networks of nodes and edges</strong>
                    </div>
                 
                    <div className=" mt-8 mb-5 w-[90%] mx-auto line-clamp-1 transition-transform duration-200 ease-in-out hover:scale-105" >
                        <button className="flex items-center gap-2 text-gray-400 cursor-not-allowed">Comming Soon...</button>
                    </div>

                </div>

            </div>
        </div>
    )
}