import { useState } from "react";
import InputTodo from "./components/InputTodo";
import TodoList from "./components/TodoList";

function App() {

  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState('');

  const handleAddTodo = (todoItem) => {
    let newTodo = {
      id: Date.now().toString(),
      todo: todoItem,
      isComplete: false
    };
    setTodoList([...todoList, newTodo]);
  };

  const handleMarkComplete = (todoId) => {
    let newTodoList = todoList.map((item) => {
      if (item.id === todoId) {
        return {
          ...item, isComplete: !item.isComplete
        };
      };
      return item;
    });
    setTodoList(newTodoList);
  };

  const handleDelete= (todoId)=>{
    let newTodoList= todoList.filter((item)=> item.id!= todoId);
    setTodoList(newTodoList);
  };

  return (
    <div className="app" >
      <InputTodo todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
      <TodoList todoList={todoList} handleMarkComplete={handleMarkComplete} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
