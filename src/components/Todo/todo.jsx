import React, {useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { addTodo } from '../../Redux/action'

const Todo = () => {
    const [todoInput, setTodoInput] = useState("")
     let dispatch = useDispatch()

     const todoData =useSelector((state) =>{
        return state
     })

     console.log(todoData)

    const handleTodoField = (event) =>{
        setTodoInput(event.target.value)
    }

    const handleAddTodo = () =>{
        dispatch(addTodo(todoInput))
        setTodoInput("")
    }



  return (
    <div>
        <h1 className='form-heading'>Todo list </h1>
        <div>
            <input type="text" className='input-fields' onChange={handleTodoField} value={todoInput}/>
            <button className='primary-button' onClick={handleAddTodo}>ADD</button>
        </div>
    </div>
  )
}

export default Todo