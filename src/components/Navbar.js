import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";
import { faCube } from "@fortawesome/free-solid-svg-icons";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faArrowsSpin } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router";

export default function Navbar(){
    const[isactive,setisactive]=useState(false);
    const[isactiveDSA,setisactiveDSA]=useState(false);


    return(
            <div className="py-4 px-2 bg-black text-[#FFF0F3]  shadow-[0_15px_40px_-20px_rgba(40,44,63,0.15)]">


            <div className="flex justify-between w-[95%] my-5">
                <NavLink to="/" replace>
                    <div className="flex items-center gap-4">
                        <h1 className="font-sans text-3xl font-[800] tracking-tight bg-clip-text text-transparent bg-[linear-gradient(60deg,#0096c7,#00b4d8,#48cae4,#90e0ef,#caf0f8)]">DSA Visualizer</h1>
                    </div>
                </NavLink>

                <div className=" flex items-center gap-15">

                     <Link to="/RaceMode">
                    <button className="flex items-center gap-1.5 relative rounded-[8px] px-3 py-2.5  bg-[#48BFE3] cursor-pointer bg-[linear-gradient(60deg,#0096c7,#00b4d8,#48cae4,#90e0ef,#caf0f8)]
                    bg-[length:200%_200%]">Race Mode

                    <svg className="h-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M380.1 256L445.7 91.9C451.1 78.3 446.7 62.7 434.8 54.1C422.9 45.5 406.8 46 395.5 55.4L107.5 295.4C97.2 304 93.3 318.2 97.9 330.9C102.5 343.6 114.5 352 128 352L272.7 352L259.9 384L194.3 548.1C188.9 561.7 193.4 577.3 205.2 585.9C217 594.5 233.2 594 244.5 584.6L532.5 344.6C542.8 336 546.7 321.8 542.1 309.1C537.5 296.4 525.5 288 512 288L367.3 288L380.1 256zM299.3 334.1C293.3 325.3 283.4 320 272.8 320L128 320L416 80L337.6 276.1C333.7 286 334.9 297.1 340.8 305.9C346.7 314.7 356.6 320 367.3 320L512 320L224 560L302.4 363.9C306.3 354 305.1 342.9 299.2 334.1z"/></svg>
                    </button>
                    </Link>

                    
                    <div className="flex flex-col relative mr-2 hover:bg-gray-500 rounded-md px-2 py-2.5">
                        <button className="flex items-center gap-2 cursor-pointer" onClick={()=>(setisactive(!isactive))}>
                            <strong>Algorithms</strong>
                            {
                            isactive?(<FontAwesomeIcon  className="h-[20px]" icon={faAngleUp} />):
                            (<FontAwesomeIcon className="h-[20px]" icon={faAngleDown} />)
                             }
                        </button>
                        {isactive &&(
                            <div className="bg-[oklch(0.208_0.042_265.755)] z-100 flex flex-col gap-3  w-[210px] absolute text-left px-3 py-4 top-12 left-[-50%] right-[50%] rounded-xl">
                                
                                <Link to="/algorithms/Sorting">
                                <button className="text-left flex items-center gap-2.5 cursor-pointer">
                                      <svg className="h-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#123063" d="M96 96C113.7 96 128 110.3 128 128L128 464C128 472.8 135.2 480 144 480L544 480C561.7 480 576 494.3 576 512C576 529.7 561.7 544 544 544L144 544C99.8 544 64 508.2 64 464L64 128C64 110.3 78.3 96 96 96zM208 288C225.7 288 240 302.3 240 320L240 384C240 401.7 225.7 416 208 416C190.3 416 176 401.7 176 384L176 320C176 302.3 190.3 288 208 288zM352 224L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 224C288 206.3 302.3 192 320 192C337.7 192 352 206.3 352 224zM432 256C449.7 256 464 270.3 464 288L464 384C464 401.7 449.7 416 432 416C414.3 416 400 401.7 400 384L400 288C400 270.3 414.3 256 432 256zM576 160L576 384C576 401.7 561.7 416 544 416C526.3 416 512 401.7 512 384L512 160C512 142.3 526.3 128 544 128C561.7 128 576 142.3 576 160z"/></svg>
                                    
                                    Sorting</button>
                                </Link>

                                <Link to="/algorithms/Searching">
                                <button className="text-left flex items-center gap-2.5 cursor-pointer">
                                        <svg className="h-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#0062ff" d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z"/></svg>
                                    Serching</button>
                                </Link>

                                <Link to ="/algorithms/Graph">
                                <button className="text-left flex items-center gap-2.5 cursor-pointer">
                                    <svg className="h-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#06e09e" d="M482.4 221.9C517.7 213.6 544 181.9 544 144C544 99.8 508.2 64 464 64C420.6 64 385.3 98.5 384 141.5L200.2 215.1C185.7 200.8 165.9 192 144 192C99.8 192 64 227.8 64 272C64 316.2 99.8 352 144 352C156.2 352 167.8 349.3 178.1 344.4L323.7 471.8C321.3 479.4 320 487.6 320 496C320 540.2 355.8 576 400 576C444.2 576 480 540.2 480 496C480 468.3 466 443.9 444.6 429.6L482.4 221.9zM220.3 296.2C222.5 289.3 223.8 282 224 274.5L407.8 201C411.4 204.5 415.2 207.7 419.4 210.5L381.6 418.1C376.1 419.4 370.8 421.2 365.8 423.6L220.3 296.2z"/></svg>
                                    graph</button>
                                </Link>

                                <button className="text-left flex items-center gap-2.5 cursor-pointer">
                                    <svg className="h-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#FFD43B" d="M256 128C256 110.3 270.3 96 288 96L352 96C369.7 96 384 110.3 384 128L384 192C384 209.7 369.7 224 352 224L344 224L344 288L464 288C503.8 288 536 320.2 536 360L536 416L544 416C561.7 416 576 430.3 576 448L576 512C576 529.7 561.7 544 544 544L480 544C462.3 544 448 529.7 448 512L448 448C448 430.3 462.3 416 480 416L488 416L488 360C488 346.7 477.3 336 464 336L344 336L344 416L352 416C369.7 416 384 430.3 384 448L384 512C384 529.7 369.7 544 352 544L288 544C270.3 544 256 529.7 256 512L256 448C256 430.3 270.3 416 288 416L296 416L296 336L176 336C162.7 336 152 346.7 152 360L152 416L160 416C177.7 416 192 430.3 192 448L192 512C192 529.7 177.7 544 160 544L96 544C78.3 544 64 529.7 64 512L64 448C64 430.3 78.3 416 96 416L104 416L104 360C104 320.2 136.2 288 176 288L296 288L296 224L288 224C270.3 224 256 209.7 256 192L256 128z"/></svg>
                                    Dynamic Programing</button>

                            </div>
                        )}

                    </div>

                     <div className="flex flex-col relative hover:bg-gray-500 rounded-md px-2 py-2.5">
                        <button className="flex items-center gap-2 cursor-pointer" onClick={()=>(setisactiveDSA(!isactiveDSA))}>
                            <strong>Data Structure</strong>
                            {
                            isactiveDSA?(<FontAwesomeIcon  className="h-[20px]" icon={faAngleUp} />):
                            (<FontAwesomeIcon className="h-[20px]" icon={faAngleDown} />)
                             }
                        </button>

                        {isactiveDSA &&(
                            <div className="bg-[oklch(0.208_0.042_265.755)] z-100 flex flex-col gap-3 w-[180px] absolute text-left px-3 py-4 top-12 left-[0%]  rounded-xl">
                                <Link to ="/Structures/Array">
                                <button className="text-left flex items-center gap-2.5 cursor-pointer">
                                    <FontAwesomeIcon icon={faCube} style={{color: "#63E6BE",}} /> 
                                    Array</button>
                                </Link>

                                <Link to ="/Structures/Stack">
                                <button className="text-left flex items-center gap-2.5 cursor-pointer">
                                    <FontAwesomeIcon icon={faLayerGroup} style={{color: "#0055ff",}} />
                                    Stack</button>
                                </Link>

                                <Link to ="/Structures/Queue">
                                <button className="text-left flex items-center gap-2.5 cursor-pointer">
                                  <FontAwesomeIcon icon={faArrowsSpin} style={{color: "#7656d7",}} />
                                    Queue</button>
                                </Link>

                                <Link to ="/Structures/LinkedList">
                                <button className="text-left flex items-center gap-2.5 cursor-pointer">
                                   <FontAwesomeIcon className="h-[20px] text-amber-400" icon={faDiagramProject} />
                                    Linked List</button>
                                </Link>

                            </div>
                        )}

                    </div>

                </div>

            </div>

        </div>
    )
}