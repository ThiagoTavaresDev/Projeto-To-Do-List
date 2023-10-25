import React, {useState} from 'react'
import styles from './Input.module.css'

export const Input = ({onAddTask}) => {
    const [taskDescription, setTaskDescription] = useState('');

    const handleInputChange = (event) => {
      setTaskDescription(event.target.value);
    };
  
    const handleAddTask = () => {
      onAddTask(taskDescription);

    };
  return (
    <div className={styles.container}>
    <input type='text' placeholder='Adicione uma nova tarefa' value={taskDescription} onChange={handleInputChange}>
    </input>
    <button onClick={handleAddTask}>
        Criar
        
    </button>
    </div>
  )
}
