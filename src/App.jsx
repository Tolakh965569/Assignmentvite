import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskForm from './Components/Taskform';
import TaskColumn from "./Components/TaskColumn.jsx";
import React from 'react'
import todoicon from "./assets/direct-hit.png"
import doingicon from"./assets/glowing-star.png";
import doneicon from"./assets/check-mark-button.png";

const App = () => {
  return (
    <div className="app">
        <TaskForm/>
        <main className="app_main">
      <TaskColumn Icon={todoicon} title="Todo"/>
      <TaskColumn Icon={doingicon} title="Doing"/>
      <TaskColumn Icon={doneicon} title="Done"/>

        </main>
    </div>
  )
}

export default App;
