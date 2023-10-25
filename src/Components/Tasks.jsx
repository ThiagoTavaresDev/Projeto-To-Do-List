import styles from './Tasks.module.css'
import React, { useState } from 'react'
import { ItemTask } from './ItemTask'
import { Input } from './Input'
export const Tasks = ({taskList,taskCount}) => {
    const [count, setCount] = useState(0)

    const updateCount = (isChecked) => {
        setCount(isChecked ? count + 1 : count - 1);
      };
      const [tasks, setTasks] = useState([]);

      const addTask = (description) => {
        const newTask = {
          id: tasks.length + 1,
          description: description,
        };
        setTasks([...tasks, newTask]);
      };
      
  

  return (
    <main className={styles.containerTask}>
        <div className={styles.minHeader}>
        <div>
            <p>Tarefas Criadas
                <span 
                className={styles.outspan}
                id='numberCreated'>{taskList.length}</span>
            </p>
        </div>
        <div>
            <p>Concluidas
                 <span className={styles.outspan}>
                    <span id='numberFinished'>{count}
                    </span>  
                    <span>de {taskList.length}</span>
                </span>
                 
            </p>
            </div>
        </div>
        {taskList.map((task) => (
        <ItemTask key={task.id} description={task.description} updateCount={updateCount}/>
      ))}

    </main>
  ) 
}
