import React from 'react';
import ThoughtCard from '../thoughtCard/thoughtCard.js';

export const ThoughtList = ({thoughts, remove}) => {
  const thoughtList = thoughts.map(item => {
    return (<ThoughtCard 
      {...item} 
      key={item.id}
      remove={remove} 
    />)
})
  return (
      <ul>
        {thoughtList}
      </ul>
  );
}
