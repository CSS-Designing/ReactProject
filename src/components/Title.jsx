import React from "react";

function Title(prop){
   
        return(
            <>  
            <div className="divide-y-0 divide-black">
                <div className="text-center my-6">
                    <h2 id={prop.title} className="text-4xl font-grey-300">{prop.title}</h2>
                </div>
                <div className="text-center text-base md:text-medium md:mx-24">
                    <p>{prop.description}</p>
                    <p>{prop.author}</p>
                </div>
                </div>

                <hr></hr>
            </>
        )
   
}

export default Title;