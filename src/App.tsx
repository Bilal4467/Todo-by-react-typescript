import React , {FC, ChangeEvent ,useState} from 'react';
import TodoTask from './Component/TodoTask';
import { ITask } from './Interfaces';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './App.css';


  
const App: FC= ()=> {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [task,setTask]= useState<string>("");
  const [deadline,setDeadline]= useState<number>(0);
  const [todo,setTodo]= useState<ITask[]>([]);


  const handleEvent= (event: ChangeEvent<HTMLInputElement>):void =>{
    if(event.target.name==="Task"){
      setTask(event.target.value)
    } else{
      setDeadline (Math.abs(Number(event.target.value)))
    }
  }
  const newTask = {taskName: task, deadline: deadline};

  const showfiled = ()=>{
    alert("Insert into all input first");
  }

  const addTask = ():void=>{
    
    

    if(newTask.taskName=="" || newTask.deadline===0 ){
      console.log("enter name")
      showfiled()
        
    }
else{
let ourTodo= {...todo}


  setTodo([...todo, newTask]);
  setTask('')
  setDeadline(0)
}
   
  }
    const completeTask =(TodoTaskDelete: string)=>
    {
      setTodo(todo.filter((task)=>{
        return task.taskName != TodoTaskDelete;
      })) 
    }
        return (
          <div className="App">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Warning</Modal.Title>  
        </Modal.Header>
        <Modal.Body>wait, This task is already exist in your todo list!</Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>

      <div className='header'>
          <div className='inputContainer'>
            <input type='text' placeholder='Task...'  name='Task'  value={task} onChange={handleEvent} />
            <input type='number' placeholder='DeadLine.. (in Days)' name='Deadline'
             value={deadline} onChange={handleEvent} />
            </div>
           
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
