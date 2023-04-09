import React from 'react'

const InputTodo = ({ todo, setTodo, handleAddTodo }) => {

    const handleClick = (e) => {
        e.preventDefault();
        handleAddTodo(todo);
        setTodo('');
    };


    return (
        <div className='input-todo'>
            <div className="input-todo-container">
                <h1>TODO APP</h1>
                <form>
                    <input type="text" placeholder='Enter a new task' value={todo} onChange={(e) => setTodo(e.target.value)} />
                    <button onClick={(e) => handleClick(e)}>Add Todo</button>
                </form>
            </div>
        </div>
    )
}

export default InputTodo
