import React from "react";
import "../App.css";
import Title from "./Title";
import titleeleements from "../assets/data/titleelements";



function Contact(){
    return(
        <>  
            <Title
                key={titleeleements[3].id}
                title={titleeleements[3].title}
                description={titleeleements[3].description}
                author={titleeleements[3].author}
            />
            <p className="text-center">© 2020 Aveek Mukherjee</p>
        </>
    );
}

export default Contact;