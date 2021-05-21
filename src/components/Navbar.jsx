import React from "react";
import {TiThMenu} from "react-icons/ti"
function Navbar(){
    return(
        <>
            <div className="px-5 pt-4 flex items-center justify-between relative">
                <div className="text-2xl">
                    <button className="md:hidden"><TiThMenu/></button>
                </div>
                <div class="px-2 pt-2 pb-3 space-y-1 items-center mx-auto md:block hidden">
                    <a href="#Career Timeline" class="px-3 py-2 mx-4 rounded-3xl text-base font-medium 
                    text-white hover:text-gray-900 hover:bg-gray-50 inline-flex cursor-pointer">Career Timeline</a>

                    <a href="#Abilities" class="px-3 py-2 mx-4 rounded-3xl text-base font-medium 
                    text-white hover:text-gray-900 hover:bg-gray-50 inline-flex cursor-pointer">Abilities</a>

                    <a href="#Projects" class="px-3 py-2 mx-4 rounded-3xl text-base font-medium 
                    text-white hover:text-gray-900 hover:bg-gray-50 inline-flex cursor-pointer">Projects</a>

                    <a href="#Contact" class="px-3 py-2 mx-4 rounded-3xl text-base font-medium 
                    text-white hover:text-gray-900 hover:bg-gray-50 inline-flex cursor-pointer">Contact</a>
                </div>
            </div>
        </>
    );
}

export default Navbar;