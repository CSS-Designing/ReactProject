import React from "react";
import "../App.css";
import Title from "./Title";
import titleeleements from "../assets/data/titleelements";



function Project(){
    return(
        <>  
            <Title
                key={titleeleements[2].id}
                title={titleeleements[2].title}
                description={titleeleements[2].description}
                author={titleeleements[2].author}
            />
            <div className="grid grid-flow-col grid-cols-2 grid-rows-1 mx-auto my-8 w-10/12">
                <div className="mr-8 relative hover:opacity-100">
                    <img className="w-full block h-full" src="https://images.pexels.com/photos/6373862/pexels-photo-6373862.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Project 1:Node.js" />
                    <div className="prjoverlay opacity-0 absolute inset-0 hover:opacity-100">
                        
                        <div className="text text-base md:text-2xl">
                            <h5>Newsletter Application</h5>
                            <a classname="text-green-500 focus:text-green-900" href="https://safe-reef-87388.herokuapp.com/">Read More</a>
                        </div>

                        
                    </div>
                </div>

                <div className="mr-8 relative hover:opacity-100">
                    <img className="w-full block h-full" src="https://images.pexels.com/photos/6373862/pexels-photo-6373862.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Project 2:Node.js" />
                    <div className="prjoverlay opacity-0 absolute inset-0 hover:opacity-100">
                        
                        <div className="text text-base md:text-2xl">
                            <h5>Newsletter Application</h5>
                            <a classname="text-green-500 focus:text-green-900" href="https://safe-reef-87388.herokuapp.com/">Read More</a>
                        </div>

                        
                    </div>
                </div>

                
            </div>
        </>
    );
}

export default Project;