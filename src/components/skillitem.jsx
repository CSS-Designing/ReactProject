import React from "react";


function skillitem(props){

    return(
        <>
            <li className="border-solid border mb-4 mr-4 w-40 text-center bg-purple-200 rounded border-gray-300 shadow-lg">{props.name}</li>
        </>
    );
}

export default skillitem;