import React from "react";
import "../styles/task.css";

export default function Task(props){
    return(
        <div className="task--body">
            <div className="task-title">Title: {props.tytul}</div>
            <div className="task-description">Description: {props.description}</div>
        </div>
    )
}