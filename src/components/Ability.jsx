import React from "react";
import "../App.css";
import Title from "./Title";
import titleeleements from "../assets/data/titleelements";

import Skillitem from "./skillitem";

function Ability(){
    return(
        <>
            <Title
                key={titleeleements[1].id}
                title={titleeleements[1].title}
                description={titleeleements[1].description}
                author={titleeleements[1].author}
            />

<div className="grid  grid-cols-2 md:grid-cols-4 gap-4 mx-auto my-8 w-10/12">
                <div className="border-solid border mb-4 mr-4 w-40 text-center bg-purple-200 rounded border-gray-300 shadow-lg">
                    <h3 className="font-bold my-4">Frameworks</h3>
                    <ul className="flex flex-start flex-col flex-wrap">
                    <Skillitem name="Node.js"/>
                    <Skillitem name="Bootstrap"/>
                    <Skillitem name="jQuery"/>
                    </ul>
                </div>
                <div className="border-solid border mb-4 mr-4 w-40 text-center bg-purple-200 rounded border-gray-300 shadow-lg">
                    <h3 className="font-bold my-4">Languages</h3>
                    <ul className="flex flex-start flex-col flex-wrap">
                    <Skillitem name="HTML"/>
                    <Skillitem name="CSS"/>
                    <Skillitem name="Javascript"/>
                    <Skillitem name="PHP"/>
                    <Skillitem name="C"/>
                    <Skillitem name="C++"/>
                    </ul>
                </div>
                <div className="border-solid border mb-4 mr-4 w-40 text-center bg-purple-200 rounded border-gray-300 shadow-lg">
                    <h3 className="font-bold my-4">Libraries/APIs</h3>
                    <ul className="flex flex-start flex-col flex-wrap">
                    <Skillitem name="React"/>
                    <Skillitem name="npm"/>
                    </ul>
                </div>
                <div className="border-solid border mb-4 mr-4 w-40 text-center bg-purple-200 rounded border-gray-300 shadow-lg">
                    <h3 className="font-bold my-4">Databases</h3>
                    <ul className="flex flex-start flex-col flex-wrap">
                    <Skillitem name="MySQL"/>
                    <Skillitem name="PostgreSQL"/>
                    <Skillitem name="MongoDB"/>
                    <Skillitem name="PhpMyAdmin"/>
                    </ul>
                </div>
                <div className="border-solid border mb-4 mr-4 w-40 text-center bg-purple-200 rounded border-gray-300 shadow-lg">
                    <h3 className="font-bold my-4">Tools</h3>
                    <ul className="flex flex-start flex-col flex-wrap">
                    <Skillitem name="VSCode"/>
                    <Skillitem name="Atom"/>
                    <Skillitem name="Notepad++"/>
                    <Skillitem name="Jira"/>
                    <Skillitem name="Git"/>
                    </ul>
                </div>
                <div className="border-solid border mb-4 mr-4 w-40 text-center bg-purple-200 rounded border-gray-300 shadow-lg">
                    <h3 className="font-bold my-4">Platforms</h3>
                    <ul className="flex flex-start flex-col flex-wrap">
                    <Skillitem name="Linux"/>
                    </ul>
                </div>
                <div className="border-solid border mb-4 mr-4 w-40 text-center bg-purple-200 rounded border-gray-300 shadow-lg">
                    <h3 className="font-bold my-4">Others</h3>
                    <ul className="flex flex-start flex-col flex-wrap">
                    <Skillitem name="Front End Development"/>
                    <Skillitem name="Full Stack Development"/>
                    <Skillitem name="MERN Stack"/>
                    <Skillitem name="LAMP Stack"/>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Ability;