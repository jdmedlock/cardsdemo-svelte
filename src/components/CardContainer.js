import React from 'react';
import Card from './Card'

const CardContainer = (props) => { 
  // An array of task objects is passed in `props`. Iterate over these
  // to create one `<Card>` component for each task. Note that the task
  // `key` attribute is required by React to uniquely identify each one.
  console.log('props: ', props)
  return (
    <div>
      { props.tasks?.map(task => {
          return (
            <Card key={ task._id } task={ task } />
          )
        })
      }
    </div>
  )
}

export default CardContainer