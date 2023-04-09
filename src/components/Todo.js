import React from 'react'

const Todo = ({ id, todo, isComplete, handleMarkComplete, handleDelete }) => {
    return (
        <div className='todo'>
            <div>
                <input type="checkbox" value={isComplete} onChange={() => handleMarkComplete(id)} />
                {todo}
            </div>
            <i className="fa-solid fa-trash" onClick={()=> handleDelete(id)}></i>
        </div>
    )
}

export default Todo
