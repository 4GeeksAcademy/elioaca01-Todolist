import { Fragment } from "react";
import React, { useState } from "react";




const List = () => {
    const [task, setTask] = useState(" ")
    const [taskList, setTaskList] = useState([])

    function handleChange(evt) {
        setTask(evt.target.value)
    }

    function handleSubmit(evt) {
        if (evt.key == "Enter") {
            setTaskList([
                ...taskList
                , task
            ])
        }
    }

    function handleDelete(id) {
        let newTaskList = taskList.filter((item, index) => id != index)
        setTaskList(newTaskList)
    }

   


    return (
        <>
            <h1 className="text align-self-center align-items-center ">todos</h1>
            <div className="container sombra m-5 fw-light d-flex flex-column align-self-center bg-light ">
            
                <input
                    onChange={handleChange}
                    onKeyDown={handleSubmit}
                    type="text"
                    className="w-100 fs-3 tarea bg-light"
                    placeholder="Write a new task"
                />

                {taskList.map((item, index) => {
                    return (
                        <div
                            className="w-100 opcion-tarea border-top fw-light bg-light fs-5 p-2"
                            onClick={() => handleDelete(index)}
                            key={index}
                        >
                            {item}
                            <span className="icono-x "><i class="fa-solid fa-x icon"></i></span>
                        </div>
                    )
                })}

                <div className="footer pt-2 border-top">
                    <p className="ms-2">{taskList.length} items left</p>
                </div>
               
            </div>
        </>
    )
}

export default List