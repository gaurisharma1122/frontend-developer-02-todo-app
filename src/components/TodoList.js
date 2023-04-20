import React, { useState } from 'react'
import Todo from './Todo'

const TodoList = ({ todoList, handleMarkComplete, handleDelete, handleTaskFilter }) => {

    return (
        <div className='todolist'>
            <div className="todolist-container">
                {
                    todoList.length > 0 &&
                    handleTaskFilter().map((item) => {
                        return (
                            <Todo key={item.id}
                                id={item.id}
                                todo={item.todo}
                                isComplete={item.isComplete}
                                handleMarkComplete={handleMarkComplete}
                                handleDelete={handleDelete} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TodoList
