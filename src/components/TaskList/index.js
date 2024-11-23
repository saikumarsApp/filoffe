import React, { useState } from 'react'; 
import { MdDelete, MdEdit, MdSave } from "react-icons/md";
import "./index.css";

const TaskList = ({ tasks, deleteTask, updateTask }) => { 
  const [editIndex, setEditIndex] = useState(null);
  const [editedTask, setEditedTask] = useState({ title: '', description: '', dueDate: '', status: 'Pending' });

  const handleEditClick = (index, task) => {
    setEditIndex(index);
    setEditedTask({ ...task });
  };

  const handleSaveClick = (index) => {
    updateTask(index, editedTask);
    setEditIndex(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  return ( 
    <div className="task-list-card-style"> 
      {tasks.map((task, index) => ( 
        <div key={index} className="task-item-style">
          {editIndex === index ? (
            <>
              <input
                type="text"
                name="title"
                value={editedTask.title}
                onChange={handleChange}
              />
              <input
                type="text"
                name="description"
                value={editedTask.description}
                onChange={handleChange}
              />
              <input
                type="date"
                name="dueDate"
                value={editedTask.dueDate}
                onChange={handleChange}
              />
              <select
                name="status"
                value={editedTask.status}
                onChange={handleChange}
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
              <button className="save-button button" onClick={() => handleSaveClick(index)}>
                <MdSave />
              </button>
            </>
          ) : (
            <>
              <h3>{task.title}</h3> 
              <p>{task.description}</p> 
              <p>Due: {task.dueDate}</p> 
              <p>Status: {task.status}</p> 
              <button className="edit-button button" onClick={() => handleEditClick(index, task)}>
                <MdEdit />
              </button>
            </>
          )}
          <button className="delete-button button" onClick={() => deleteTask(index)}>
            <MdDelete />
          </button>
        </div> 
      ))} 
    </div> 
  ); 
}; 

export default TaskList;
