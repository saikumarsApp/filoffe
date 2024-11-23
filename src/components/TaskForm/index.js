import React, { useState } from 'react'; 
import "./index.css";

const TaskForm = ({ addTask }) => { 
	const [title, setTitle] = useState(''); 
	const [description, setDescription] = useState(''); 
	const [dueDate, setDueDate] = useState(''); 
	const [status, setStatus] = useState('Pending'); 

	const handleSubmit = (e) => { 
		e.preventDefault(); 
		addTask({ title, description, dueDate, status }); 
		setTitle(''); setDescription(''); setDueDate(''); 
		setStatus('Pending'); 
	}; 
	return ( 
		<>
			<h1 className="headline-el-style">TASK MANAGER</h1>
			<form onSubmit={handleSubmit}> 
				<input className="input-element-style" type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required /> 
				<input className="input-element-style" type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required /> 
				<input className="input-element-style" type="date"  value={dueDate} onChange={(e) => setDueDate(e.target.value)} required /> 
				<select className="select-element-style" value={status} onChange={(e) => setStatus(e.target.value)}> 
					<option className="option-el-style" value="Pending">Pending</option> 
					<option className="option-el-style" value="In Progress">In Progress</option> 
					<option className="option-el-style" value="Completed">Completed</option> 
				</select> 
				<button className="add-button-style" type="submit">ADD TASK</button> 
			</form> 
	
		</>
	);
}; 
export default TaskForm;