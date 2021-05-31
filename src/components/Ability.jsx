import React from "react";
import "../App.css";
import Title from "./Title";
import titleeleements from "../assets/data/titleelements";
import { FaNode } from 'react-icons/fa';
import { BsBootstrapFill } from "react-icons/bs";
import { SiJquery,SiHtml5,SiCss3,SiJavascript,SiPhp,SiReact,SiNpm,SiMysql,SiLinux,SiMongodb,SiPostgresql,SiJira,SiVisualstudiocode,SiAtom,SiGit,SiGithub } from "react-icons/si";

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
                    <div className="flex flex-start flex-col flex-wrap text-center">
                        <Skillitem name="Node.js"/>
                        <FaNode className="m-auto mb-4" color="#339933" size = '60'/>
                        
                        <Skillitem name="Bootstrap"/>
                        <BsBootstrapFill className="m-auto mb-4" color="#7952B3" size = '50'/>
                        
                        <Skillitem name="jQuery"/>
                        <SiJquery className="m-auto mb-4" color="#0769AD" size = '50'/>
                    </div>
                </div>
                <div className="border-solid border mb-4 mr-4 w-40 text-center bg-purple-200 rounded border-gray-300 shadow-lg">
                    <h3 className="font-bold my-4">Languages</h3>
                    <ul className="flex flex-start flex-col flex-wrap">
                        <Skillitem name="HTML"/>
                        <SiHtml5 className="m-auto mb-4" color="#E34F26" size = '50'/>
                  
                        <Skillitem name="CSS"/>
                        <SiCss3 className="m-auto mb-4" color="#1572B6" size = '50'/>
                   
                        <Skillitem name="Javascript"/>
                        <SiJavascript className="m-auto mb-4" color="#F7DF1E" size = '50'/>
                    
                        <Skillitem name="PHP"/>
                        <SiPhp className="m-auto mb-4" color="#777BB4" size = '50'/>
                    
                    </ul>
                </div>
                <div className="border-solid border mb-4 mr-4 w-40 text-center bg-purple-200 rounded border-gray-300 shadow-lg">
                    <h3 className="font-bold my-4">Tools</h3>
                    <ul className="flex flex-start flex-col flex-wrap">
                    <Skillitem name="VSCode"/>
                    <SiVisualstudiocode className="m-auto mb-4" color="#007ACC" size = '50'/>

                    <Skillitem name="Atom"/>
                    <SiAtom className="m-auto mb-4" color="#66595C" size = '50'/>

                    <Skillitem name="Jira"/>
                    <SiJira className="m-auto mb-4" color="#0052CC" size = '50'/>
                  
                    <Skillitem name="Git"/>
                    <SiGit className="m-auto mb-4" color="#F05032" size = '50'/>

                    <Skillitem name="GitHub"/>
                    <SiGithub className="m-auto mb-4" color="#181717" size = '50'/>
                    </ul>
                </div>
                <div className="border-solid border mb-4 mr-4 w-40 text-center bg-purple-200 rounded border-gray-300 shadow-lg">
                    <h3 className="font-bold my-4">Databases</h3>
                    <ul className="flex flex-start flex-col flex-wrap">
                    <Skillitem name="MySQL"/>
                    <SiMysql className="m-auto mb-4" color="#4479A1" size = '50'/>
                    
                    <Skillitem name="MongoDB"/>
                    <SiMongodb className="m-auto mb-4" color="#47A248" size = '50'/>
                   
                    <Skillitem name="PostgreSQL"/>
                    <SiPostgresql className="m-auto mb-4" color="#4169E1" size = '50'/>
                    </ul>
                </div>
                <div className="border-solid border mb-4 mr-4 w-40 text-center bg-purple-200 rounded border-gray-300 shadow-lg">
                    <h3 className="font-bold my-4">Libraries/APIs</h3>
                    <ul className="flex flex-start flex-col flex-wrap">
                    <Skillitem name="React"/>
                    <SiReact className="m-auto mb-4" color="#61DAFB" size = '50'/>
                   
                    <Skillitem name="npm"/>
                    <SiNpm className="m-auto mb-4" color="#CB3837" size = '50'/>
                    </ul>
                </div>
                <div className="border-solid border mb-4 mr-4 w-40 text-center bg-purple-200 rounded border-gray-300 shadow-lg">
                    <h3 className="font-bold my-4">Platforms</h3>
                    <ul className="flex flex-start flex-col flex-wrap">
                    <Skillitem name="Linux"/>
                    <SiLinux className="m-auto mb-4" size = '50'/>
                    
                    </ul>
                </div>
                <div className="border-solid border mb-4 mr-4 w-40 text-center bg-purple-200 rounded border-gray-300 shadow-lg">
                    <h3 className="font-bold my-4">Others</h3>
                    <ul className="flex flex-start flex-col flex-wrap">
                    
                    <Skillitem name="MERN Stack"/>
                    <span>
                        <SiMongodb className="m-auto mb-4 inline" color="#47A248" size = '30'/>
                        <SiReact className="m-auto mb-4 inline" color="#61DAFB" size = '30'/>
                        <FaNode className="m-auto mb-4 inline" color="#339933" size = '30'/>
                    </span>
                    <Skillitem name="LAMP Stack"/>
                    <span>
                    <SiLinux className="m-auto mb-4 inline" size = '30'/>
                    <SiMysql className="m-auto mb-4 inline" color="#4479A1" size = '30'/>
                    <SiPhp className="m-auto mb-4 inline" color="#777BB4" size = '30'/>
                    </span>
                    <Skillitem name="Front End Development"/>

                    <Skillitem name="Full Stack Development"/>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Ability;