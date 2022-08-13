import React from 'react'
import { ITask } from '../Interfaces'
interface props{
    task: ITask;
    completeTask(TodoTaskDelete:string): void;
}



const TodoTask = ({task, completeTask}:props) => {
  return (
    <div className='task'>
        <div className="content">
            <span>{task.taskName}</span>
            <span>{task.deadline} days</span>
        </div>
<button onClick={()=>
    completeTask(task.taskName)} > Done</button>
    </div>
  )
}

export default TodoTask