import React from "react";
import "../styles/main.css";
import Task from "../components/task";


export default function Header(){
    const [item, addTask] = React.useState([]);
    const [itemsToComponents, addComponent] = React.useState();
    let titleVal, descriptionVal, taskComponents;


    function addNewTask(){
        titleVal = document.querySelector(".form--input-title").value;
        descriptionVal = document.querySelector(".form--input-description").value;

        addTask([...item, {
            title: titleVal,
            description: descriptionVal
        }])

        addComponent(item.map((value, index)=>{return <Task key={index} tytul={value.title} description={value.description}/>}))
    }

    return(
        <main>
        <div className="form">
            <input type="text" className="form--input-title" placeholder="Title..." />
            <textarea className="form--input-description" placeholder="Description..." />
            <button className="form--btn" onClick={addNewTask}>Add task</button>
        </div>
        <div className="task-section">
            {itemsToComponents}
        </div>
        </main>
    )
}

