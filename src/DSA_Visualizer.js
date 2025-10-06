import React from "react";
import ReactDOM from"react-dom/client";
import { BrowserRouter, Routes, Route, } from "react-router";
import Header from "./components/Header";
import Algo_visuals from "./components/Algo_visual";
import NavbarSection from "./NavbarSection";
import Data_Structure_Visuals from "./components/Data_Structure_Visual";
import RaceMode from "./components/RaceMode";

function Dsa_Visualizer(){
    return(
        <BrowserRouter>
        <Routes>
            <Route element={<NavbarSection></NavbarSection>}>

                <Route path="/" element={<Header></Header>}></Route>
                <Route path="/algorithms/:category/*" element={<Algo_visuals></Algo_visuals>}></Route>
                <Route path="/Structures/:type/*" element={<Data_Structure_Visuals></Data_Structure_Visuals>}></Route>
                <Route path="/RaceMode" element={<RaceMode></RaceMode>}></Route>
                

            </Route>
        </Routes>
        </BrowserRouter>
    )
}

















ReactDOM.createRoot(document.getElementById("root")).render(<Dsa_Visualizer></Dsa_Visualizer>)