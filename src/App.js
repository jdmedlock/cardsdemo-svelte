import axios from 'axios'
import React, { useState, useEffect, useRef } from 'react'
import CardContainer from './components/CardContainer'
import './App.css'

const App = () => {
  const EMPTY = 'EMPTY'
  const FAILED = 'FAILED'
  const LOADED = 'LOADED'

  const [isTasksLoaded, setIsTasksLoaded] = useState(EMPTY) // Use ref to eliminate need for setter function
  const tasks = useRef()

  // Retrieve the list of default tasks on the Splash page. We are returning the
  // a promise which will be resolved when the request has successfully 
  // completed
  const fetchTasks = () => {
    return new Promise(resolve => {
      const config = {
        method: 'get',
        url: 'http://localhost:5000/splash',
        headers: { }
      };

      axios(config)
        .then((response) => {
          resolve(response.data) // Resolve when results are returned
        })
        .catch((error) => {
          setIsTasksLoaded(FAILED)
        })
    })
  }

  // Retrieve default tasks on the Splash page from the backend server
  // if they haven't already been retrieved. Note that this will be
  // invoked whenever the value of `isTaskLoaded` changes. This is why
  // this `useEffect` is called twice
  useEffect(() => {
    console.log('isTasksLoaded: ', isTasksLoaded)
    if (isTasksLoaded === EMPTY) {
      fetchTasks()
        .then(response => {
          tasks.current = response
          setIsTasksLoaded(LOADED)
        })
    }
  },[isTasksLoaded]) // Dependencies: useEffect invoked when these change

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Cards Demo</h1>
        { isTasksLoaded === LOADED // Generate cards only if the BE request has completed
           ? ( <CardContainer tasks={ tasks.current } /> )
           : isTasksLoaded === FAILED 
              ? (<p>Fetch Failure</p>) : (' ')
        }
      </header>
    </div>
  );
}

export default App
