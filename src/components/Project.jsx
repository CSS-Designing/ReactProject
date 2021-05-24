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
                <div>
                    <img className="w-11/12" src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Project 1:Node.js" />
                </div>
                <div>
                    <img className="w-11/12" src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Project 1:Node.js" />
                </div>
            </div>
        </>
    );
}

export default Project;