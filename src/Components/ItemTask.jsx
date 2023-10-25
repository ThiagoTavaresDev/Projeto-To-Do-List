import React, { useState } from 'react'
import styles from './ItemTask.module.css'
import trash from '../assets/VectorTrash.svg'
import simbolcheck from '../assets/checkOff.svg'
import simbolchecked from '../assets/check.svg'

export const ItemTask = ({updateCount,description}) => {
    const [checked, setChecked] = useState(true)

    const toggleChecked = () =>{
        setChecked(!checked)
        updateCount(checked);
    }


   
  return (
    <>
<div className={styles.principalTask}>
      <div>
        <label htmlFor="inputcheckbox">
        <img src={checked ? simbolcheck : simbolchecked} id='imagembotao' onClick={toggleChecked}/>
       
       </label>

       <input type='checkbox' id='inputcheckbox' checked={checked}/>

        <p className={!checked ? styles.lineFinished : ''}>
          {description}
        </p>
        <button>
          <img src={trash} />
        
        </button>
  
      </div> 
    </div>
     </>
  )

}
