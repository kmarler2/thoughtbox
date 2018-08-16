import React from 'react';
import './thoughtCard.css'

const ThoughtCard = ({title, body, remove, id}) => {
  return (
    <div className='thoughtCard'>
      <h2 className='text'>{title}</h2>
      <p className='text'>{body}</p>
      <button className='delete' onClick={() => remove(id)}>Delete</button>
    </div>
  )
}

export default ThoughtCard;