import { useState } from 'react'
import './global.css'
import styles from './App.module.css'
import { Header } from './Components/Header'
import { Input } from './Components/Input'
import { Tasks } from './Components/Tasks'
import { ItemTask } from './Components/ItemTask'





function App() {

  const [taskList, setTaskList] = useState([]);
  const [taskCount, setTaskCount] = useState(0);

  const addTask = (description) => {
    const newTask = {
      id: taskList.length + 1,
      description: description,
    };
    setTaskList([...taskList, newTask]);
    setTaskCount(taskCount + 1);
    
  };



  return (
    <>
    <Header />
    <div className={styles.wrapper}>
    <Input onAddTask={addTask}/>
    <Tasks taskList={taskList} />
 

  
     </div>
    </>
  )
}

export default App
