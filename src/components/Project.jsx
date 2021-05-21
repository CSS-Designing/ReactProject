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
            
        </>
    );
}

export default Project;