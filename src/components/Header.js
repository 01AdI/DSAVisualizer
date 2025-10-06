import Algo_categories from "./Algo_categories";
import Data_Stracture_Categories from "./DataStracture_Categories";
import HeroSection from "./HeroSection";


export default function Header(){
    return(
        <div className=" bg-[#00111C] text-[#FFF0F3]">

            <HeroSection></HeroSection>
            <Algo_categories></Algo_categories>
            <Data_Stracture_Categories></Data_Stracture_Categories>
            
        </div>
    )
}