import React, { useState, useEffect } from 'react'; 
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList'; 

import "./App.css"

const App = () => { 
  const [tasks, setTasks] = useState([]); 

  useEffect(() => { 
    // Load tasks from localStorage 
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || []; 
    setTasks(savedTasks); 
  }, []); 

  useEffect(() => { 
    // Save tasks to localStorage 
    localStorage.setItem('tasks', JSON.stringify(tasks)); 
  }, [tasks]); 

  const addTask = (task) => { 
    setTasks([...tasks, task]); 
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(newTasks);
  };

  const updateTask = (index, updatedTask) => {
    const newTasks = tasks.map((task, taskIndex) => 
      taskIndex === index ? { ...task, ...updatedTask } : task
    );
    setTasks(newTasks);
  };

  return ( 
    <div className="App"> 
      <TaskForm addTask={addTask} /> 
      <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} /> 
    </div> 
  ); 
}; 

export default App;
