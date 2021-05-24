import React from "react";
import "../App.css";
import Title from "./Title";
import titleeleements from "../assets/data/titleelements";
import {FcPhone} from "react-icons/fc";
import {SiGmail} from "react-icons/si";

function Contact(){
    return(
        <>  
            <div className="bg-gray-500 bg-cover text-gray-200 bg-center h-screen">
                    <Title
                        key={titleeleements[3].id}
                        title={titleeleements[3].title}
                        description={titleeleements[3].description}
                        author={titleeleements[3].author}
                    />
                <hr className="m-auto w-1/2 text-gray-50 bg-gray-50"></hr>

                <div className="text-center m-16 md:m-24 my-20 flex flex-col md:flex-row ">
                    
                    <div className="flex-1">
                        <div className="hidden md:inline-block text-lg mr-4 align-middle">
                            <SiGmail/>
                        </div>

                        <div className="block md:inline-block hover:text-gray-900">
                            <a href="mailto:aveekmukherjee91@gmail.com">aveekmukherjee91@gmail.com</a>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className=" hidden md:inline-block text-lg mr-4 align-middle">
                            <FcPhone/>
                        </div>

                        <div className="block md:inline-block hover:text-gray-900 cursor-pointer">
                            <tel>+91-9911284561</tel>
                        </div>
                    </div>
                </div>

                <hr className="m-auto w-1/2 text-gray-50 bg-gray-50"></hr>
                
                <p className="text-center mt-36">© 2021 Aveek Mukherjee</p>
            </div>
        </>
    );
}

export default Contact;