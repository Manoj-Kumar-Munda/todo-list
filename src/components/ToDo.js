import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const ToDo = ({data, toggleComplete, deleteTask}) => {
  
  const {id, task, isCompleted, isEditing} = data;

  console.log("ToDo");


  return (
    <div className='task-item'>
      <p className={(isCompleted)?'completed':''} onClick={() => toggleComplete(id)}>{task}</p>
      <div className='icons'>
        <FontAwesomeIcon onClick={() => console.log('edit-btn clicked')} icon={faPenToSquare}/>
        <FontAwesomeIcon onClick={() => deleteTask(id)} icon={faTrash} />
      </div>
    </div>
  )
}

export default ToDo