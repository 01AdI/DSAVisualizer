import { Link } from "react-router";

export default function HeroSection(){
    return(
          <div className="font-sans">
                
                <div className="pt-16 pb-8 flex flex-col justify-center items-center relative">
                        <h1 className="w-[60%] mx-auto  text-center text-6xl/[75px] font-extrabold tracking-tight">
                            <strong className="bg-[linear-gradient(45deg,#0096c7_37.5%,#00b4d8_50%,#48cae4_62.5%,#90e0ef_75%,#ade8f4_87.5%,#caf0f8_100%)] 
                                        bg-clip-text text-transparent
                                            [background-position:0%_50%]
                                        animate-[gradient_6s_ease_infinite]"
                            >Visualize </strong>Data Structures & Algorithms 
                            </h1>

                            <strong className="text-[18px] mx-auto w-[50%] text-center tracking-[-0.45px] mt-[35px]">Explore, understand, and master algorithms through interactive visualizations. Compare algorithm performance in real-time with our unique Race Mode.</strong>
                </div>

                <div className="pb-10 mx-auto w-[80%] flex justify-center">
                    
                    <Link to="/RaceMode">
                    <button className="flex items-center gap-1.5 relative rounded-[8px] px-3.5 py-2.5 text-[20px] bg-[#48BFE3] cursor-pointer bg-[linear-gradient(60deg,#0096c7,#00b4d8,#48cae4,#90e0ef,#caf0f8)]
                    bg-[length:200%_200%]
                    animate-[button-gradient,3s,linear_infinite] ">Race Mode
                    <svg className="h-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M380.1 256L445.7 91.9C451.1 78.3 446.7 62.7 434.8 54.1C422.9 45.5 406.8 46 395.5 55.4L107.5 295.4C97.2 304 93.3 318.2 97.9 330.9C102.5 343.6 114.5 352 128 352L272.7 352L259.9 384L194.3 548.1C188.9 561.7 193.4 577.3 205.2 585.9C217 594.5 233.2 594 244.5 584.6L532.5 344.6C542.8 336 546.7 321.8 542.1 309.1C537.5 296.4 525.5 288 512 288L367.3 288L380.1 256zM299.3 334.1C293.3 325.3 283.4 320 272.8 320L128 320L416 80L337.6 276.1C333.7 286 334.9 297.1 340.8 305.9C346.7 314.7 356.6 320 367.3 320L512 320L224 560L302.4 363.9C306.3 354 305.1 342.9 299.2 334.1z"/></svg>
                    </button>
                    </Link>
                </div>

            </div>
    )
}