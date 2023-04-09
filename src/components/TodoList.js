import React from 'react'
import Todo from './Todo'

const TodoList = ({ todoList, handleMarkComplete, handleDelete }) => {
    return (
        <div className='todolist'>
            <div className="todolist-container">
                {
                    todoList.map((item) => {
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
