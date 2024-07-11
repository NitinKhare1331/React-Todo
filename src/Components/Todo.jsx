import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import Todo_Items from './Todo_Items'

const Todo = () => {

    const [todoList, setTodoList]  = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);
    // console.log(todoList); //logger
    const inputRef = useRef();

    const add = () => {
        const inputText = inputRef.current.value.trim();
        if(inputText === ""){
            return null;      // if nothing is written in input field the add button will return null else the below code gets executed
        }
        const newTodo = {  //now this piece of code is executed which creates the new todo item
            id: Date.now(),
            text: inputText,
            isComplete: false,
        }

        // console.log(inputText); //logger
        setTodoList((prev)=>[...prev, newTodo]); //setTodoList updates the todo list by adding a new todo to it.
        inputRef.current.value = "";
    }

    const deleteTodo = (id) => {
        setTodoList((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== id)
        })
    }

    const toggle = (id) => {
        setTodoList((prevTodos) => {
            return prevTodos.map((todo) =>{
                if(todo.id === id){
                    return {...todo, isComplete: !todo.isComplete}
                }
                return todo;
            })
        })
    }

    useEffect(()=>{
        localStorage.setItem("todos", JSON.stringify(todoList));
    },[todoList])

  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
        
    {/* Title */}

        <div className='flex items-center mt-7 gap-2'>
            <img className='w-8' src={todo_icon} alt="icon" />
            <h1 className='text-3xl font-semibold'>To-Do List</h1>
        </div>

    {/* Input box */}

        <div className='flex items-center my-7 bg-gray-200 rounded-full'>
            <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add your task'/>
            <button onClick={add} className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'>Add +</button>
        </div>

    {/* Todo List */}

        <div>
            {todoList.map((item, idx) => {
                return <Todo_Items key={idx} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle} />
            })}
        </div>


    </div>
  )
}

export default Todo