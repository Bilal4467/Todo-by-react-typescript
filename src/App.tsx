import React , {FC, ChangeEvent ,useState} from 'react';
import './App.css';
import TodoTask from './Component/TodoTask';
import { ITask } from './Interfaces';

const App: FC= ()=> {


const [task,setTask]= useState<string>("");
const [deadline,setDeadline]= useState<number>(0);
const [todo,setTodo]= useState<ITask[]>([]);


  const handleEvent= (event: ChangeEvent<HTMLInputElement>):void =>{
    if(event.target.name==="Task"){
      setTask(event.target.value)
    } else{
      setDeadline (Number(event.target.value))
    }
  }

  const addTask = ():void=>{
    const newTask = {taskName: task, deadline: deadline};
    setTodo([...todo, newTask]);
    console.log(todo);
    setTask('')
    setDeadline(0)
  }

const completeTask =(TodoTaskDelete: string)=>{
  setTodo(todo.filter((task)=>{
    return task.taskName != TodoTaskDelete;
  }))

}

  return (
    <div className="App">
      <div className='header'>
          <div className='inputContainer'>
            <input type='text' placeholder='Task...'  name='Task'  value={task} onChange={handleEvent} />
            <input type='number' placeholder='DeadLine (in Days)' name='Deadline' value={deadline} onChange={handleEvent} /></div>
            <button onClick={addTask} >Add Task</button>
      </div>
     <div className='todoList'>

      {todo.map((task, index)=>{
       return <TodoTask key={index} task={task}  completeTask={completeTask}/>
      })}
     </div>
    </div>
  );
}

export default App;
