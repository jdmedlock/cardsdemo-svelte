import React from 'react';

const Card = (props) => {
  // The `props` passed to this component contains a single task to render
  // be formatted
  return <p>{ props.task.title }, { props.task.description }</p>
};

export default Card