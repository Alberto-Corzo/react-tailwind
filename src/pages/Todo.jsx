import { useState, useRef } from "react"
import ListItem from "../components/Lisitem"

function Todo() {

    const [toDos, setTodos] = useState([])
    const inputRef = useRef('null')

    // agregar un nuevo ToDo
    const addToDo = () => {
        console.log(inputRef);
        const todoValue = inputRef.current.value

        setTodos([...toDos, todoValue])
    }

    return (
    <div className="flex flex-col gap-2">
        <div className="flex gap-2">
            <input ref={inputRef} type="text" className="bg-[#444] rounded-md p-2"/>
            <button onClick={addToDo} className="rounded-md bg-indigo-600 px-4 py-2">Add to Do</button>
        </div>
        <ul className="flex flex-col gap-2">
            {
                toDos.map((value, index) =>{
                    return <ListItem key={index} text={value} />
                })
            }
        </ul>
    </div>
    
    )
}

export default Todo