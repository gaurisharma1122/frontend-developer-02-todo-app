import React, { useState } from 'react'

const InputTodo = ({ todo, setTodo, handleAddTodo, theme, setTheme }) => {


    const handleClick = (e) => {
        e.preventDefault();
        handleAddTodo(todo);
        setTodo('');
    };

    return (
        <div className='input-todo'>
            <div className="input-todo-container">
                <h1>
                    <span>TODO APP</span> 
                    {
                        theme==='dark-theme'?
                        <i className="fa-solid fa-moon" onClick={()=> setTheme('light-theme')}></i>:
                        <i className="fa-solid fa-sun" onClick={()=> setTheme('dark-theme')}></i>
                    }
                </h1>
                <form>
                    <input type="text" placeholder='Enter a new task' value={todo} onChange={(e) => setTodo(e.target.value)} required />
                    <button type='submit' onSubmit={(e) => handleClick(e)}>Add Todo</button>
                </form>
            </div>
        </div>
    )
}

export default InputTodo
