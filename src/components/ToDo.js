import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'

const ToDo = ({data, toggleComplete, deleteTask}) => {

  // const [slideIn, setSlideIn] = useState(false)
  
  const {id, task, isCompleted, isEditing} = data;

  // useEffect(
  //   () => {
  //     console.log("useEffect called")
  //     setSlideIn(true)
  //   },
  //   []
  // )

  


  return (
    <div className='task-item slideIn'>
      <p className={(isCompleted)?'completed':''} onClick={() => toggleComplete(id)}>{task}</p>
      <div className='icons'>
        <FontAwesomeIcon onClick={() => console.log('edit-btn clicked')} icon={faPenToSquare}/>
        <FontAwesomeIcon onClick={() => deleteTask(id)} icon={faTrash} />
      </div>
    </div>
  )
}

export default ToDo