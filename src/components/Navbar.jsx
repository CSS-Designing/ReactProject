import React from "react";
import {TiThMenu} from "react-icons/ti"
function Navbar(){
    return(
        <>
            <div className="px-5 pt-4 flex items-center justify-between fixed bg-gray-800 bg-opacity-80 w-full z-20">
                <div className="text-2xl">
                    <button className="md:hidden"><TiThMenu/></button>
                </div>
                <div className="px-2 pb-3 space-y-1 items-center mx-auto md:block hidden">
                    <a href="#Career Timeline" className="px-3 py-2 mx-4 rounded-3xl text-base font-medium 
                    text-white hover:text-gray-900 hover:bg-gray-50 inline-flex cursor-pointer active">Career Timeline</a>

                    <a href="#Abilities" className="px-3 py-2 mx-4 rounded-3xl text-base font-medium 
                    text-white hover:text-gray-900 hover:bg-gray-50 inline-flex cursor-pointer">Abilities</a>

                    <a href="#Projects" className="px-3 py-2 mx-4 rounded-3xl text-base font-medium 
                    text-white hover:text-gray-900 hover:bg-gray-50 inline-flex cursor-pointer">Projects</a>

                    <a href="#Contact" className="px-3 py-2 mx-4 rounded-3xl text-base font-medium 
                    text-white hover:text-gray-900 hover:bg-gray-50 inline-flex cursor-pointer">Contact</a>
                </div>
            </div>
        </>
    );
}

export default Navbar;