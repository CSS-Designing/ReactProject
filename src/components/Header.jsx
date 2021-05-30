import React from "react";
import Navbar from "./Navbar";

import {FaLinkedinIn} from "react-icons/fa";
import {SiSkypeforbusiness} from "react-icons/si";
import Typed from "react-typed";
import Particles from 'react-particles-js';

function Header(){

    return(
        <div className="hero-section bg-cover bg-center h-screen">
            
            <div className="overlay">    
                <Particles />    
                <Navbar />
                <div className="flex justify-center items-center">
                    <div className="m-auto text-center mt-52 text-white">
                        <h1 className="text-6xl font-medium mb-2">I'm Aveek Mukherjee</h1>
                        <p className="antialiased sm:subpixel-antialiased md:antialiased lg:antialiased">
                            <Typed
                            strings={["Engineer by Profession", "Coder by Passion."]}
                            typeSpeed={40}
                            backSpeed={50}
                            loop
                            />
                        </p>
                        <div className="flex justify-center items-center mt-9">
                        <a className="px-2 text-2xl" href="https://www.linkedin.com/in/aveek-mukherjee-77ba35ba/"><FaLinkedinIn/></a>
                        <a className="px-2 text-2xl" href="skype:aveek.mukherjee5?call"><SiSkypeforbusiness/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;