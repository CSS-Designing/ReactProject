import React from "react";
import "../App.css";
import Title from "./Title";
import titleeleements from "../assets/data/titleelements";

import { ReactComponent as WorkIcon } from "../assets/images/work.svg";
import { ReactComponent as SchoolIcon } from "../assets/images/school.svg";

import timelineElements from "../assets/data/timelinelements";

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Experience(){
    let workIconStyles = { background: "#91c788" };
    let schoolIconStyles = { background: "#52734d" };
    
    return(        
        <div>
            <Title
                key={titleeleements[0].id}
                title={titleeleements[0].title}
                description={titleeleements[0].description}
                author={titleeleements[0].author}
            />
            
            <div className="my-8">
            <VerticalTimeline>
            {
                timelineElements.map(element => {
                    let isWorkIcon = element.icon === "work";
                    let showButton = element.buttonText !== undefined && element.buttonText !== null && element.buttonText !== "";
                    let isButtonText = element.buttonText === "RTDS";
                    return (
                        <VerticalTimelineElement
                            key={element.key}
                            date={element.date}
                            dateClassName="date"
                            iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                            icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}>
                            <h3 className="vertical-timeline-element-title font-bold text-xl">
                                {element.title}
                            </h3>
                            <h5 className="vertical-timeline-element-subtitle font-bold text-gray-400">
                                {element.location}
                            </h5>
                            <p id="description">{element.description}</p>
                            {showButton && (
                            <a className={`button ${isWorkIcon ? "workButton" : "schoolButton"}`}href={`${isButtonText?"https://www.myrealdata.in/":"https://greenqi.org/"}`}>
                                {element.buttonText}
                            </a>)
                            }
                        </VerticalTimelineElement>
                    );
                })
            }
            </VerticalTimeline></div>
        </div>
    );
}

export default Experience;