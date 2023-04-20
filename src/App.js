import { useEffect, useState } from "react";
import InputTodo from "./components/InputTodo";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

const getTheme= ()=>{
  let appTheme= localStorage.getItem('theme');
  if(appTheme){
    return appTheme;
  }
  else{
    return 'light-theme';
  }
};


function App() {

  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState('');
  const [taskFilter, setTaskFilter]= useState('All');
  const [theme, setTheme]= useState(getTheme());

  const handleAddTodo = (todoItem) => {
    let newTodo = {
      id: Date.now().toString(),
      todo: todoItem,
      isComplete: false
    };
    setTodoList([ ...todoList, newTodo ]);
  };

  const handleCount = () => {
    let newTodoList = todoList.filter((item) => item.isComplete === false);
    return newTodoList.length;
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

  const handleDelete = (todoId) => {
    let newTodoList = todoList.filter((item) => item.id !== todoId);
    setTodoList(newTodoList);
  };

  const handleClearComplete= ()=>{
    let newTodoList= todoList.filter((item)=> item.isComplete === false);
    setTodoList(newTodoList);
  };

  const handleTaskFilter= ()=>{
    if(taskFilter === 'All'){
      return todoList;
    }
    else if(taskFilter === 'Active'){
      return todoList.filter((item)=> item.isComplete === false);
    }
    else{
      return todoList.filter((item)=> item.isComplete === true);
    }
  };

  useEffect(()=>{
    if(theme==='light-theme'){
      document.documentElement.className= 'light-theme';
      localStorage.setItem('theme', 'light-theme');
    }
    else{
      document.documentElement.className= 'dark-theme';
      localStorage.setItem('theme', 'dark-theme');
    }
  }, [theme]);


  return (
    <div className="app" >
      <InputTodo todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} theme={theme} setTheme={setTheme}/>
      <TodoList todoList={todoList} handleMarkComplete={handleMarkComplete} handleDelete={handleDelete} handleTaskFilter={handleTaskFilter} />
      {
        todoList.length > 0 && <Footer handleCount={handleCount} handleClearComplete={handleClearComplete} taskFilter={taskFilter} setTaskFilter={setTaskFilter} />
      }
    </div>
  );
}

export default App;
