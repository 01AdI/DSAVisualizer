import { Outlet } from "react-router"
import Navbar from "./components/Navbar"

export default function NavbarSection(){
    return(
        <>
        <Navbar></Navbar>
        <Outlet></Outlet>
        </>
    )
}