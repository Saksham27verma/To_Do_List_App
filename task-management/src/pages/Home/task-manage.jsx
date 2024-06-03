import React, { useState } from 'react';
import './home.css'; //Adding CSS for Home Page

const TodoApp = () => {

  const [tasks, setTasks] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    priority: 'Low',
    date: '',
  });
  const [editingIndex, setEditingIndex] = useState(null);


  /*----Submit Button----*/
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      // If editingIndex is not null, update the task at that index
      const updatedTasks = [...tasks];
      updatedTasks[editingIndex] = formData;
      setTasks(updatedTasks);
      setEditingIndex(null); // Reset editingIndex
    } else {
      // If editingIndex is null, add a new task to the tasks array
      setTasks([...tasks, formData]);
    }
    setFormData({
      name: '',
      description: '',
      priority: 'Low',
      date: '',
    });
  };

  /*----Delete----*/
  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
  
  /*----Edit----*/
  const handleEditTask = (index) => {
    setFormData(tasks[index]); 
    setEditingIndex(index);
  };

  return (
    
   <center> <div className="task-heading">
      <h1>Task App</h1>
      <i><p style={{fontSize:'15px', color:'GrayText'}}>"Elevate your day, one task at a time:<br/>Your roadmap to success starts with a powerful to-do list!"</p></i>
    </div>
    <div className="container">
      <form onSubmit={handleFormSubmit}>
        <div className="input1">
          {/*----Name [INPUT]----*/}
          <input type="text" name="name" value={formData.name} placeholder='Task Name' onChange={handleInputChange} required />
          {/*----Priority Level [INPUT]----*/}
          <select name="priority" value={formData.priority} onChange={handleInputChange} style={{marginLeft:'30px'}}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          {/*----Date[INPUT]----*/}
          <input type="date" name="date" value={formData.date} onChange={handleInputChange} style={{marginLeft:'38px'}} />
          </div>
          {/*----Description [INPUT]----*/}
          <textarea name="description" placeholder='Description...' value={formData.description} onChange={handleInputChange} />

        <button type="submit">{editingIndex !== null ? 'Update Task' : 'Add Task'}</button>
      </form>

      <div className="task-list">
        {tasks.map((task, index) => (
          <div key={index} className="task">
            <div style={{display:'flex', flexDirection:'column',textAlign:'start'}}>
               {/*-----Showing Name & Description-------*/}
              <strong style={{textAlign:'start'}}>{task.name}</strong> {task.description}
            </div>
               {/*-----Showing Priority & Date-------*/}
            <div style={{textAlign:'center', display:'flex', alignItems:'center'}}>
               <button type='button' className='prior'>{task.priority}</button>  {task.date}

               {/*-----Adding Edit & Delete Button-------*/}
              <button onClick={() => handleEditTask(index)} className='btn'><img src='/edit.png'alt='edit'height={'20x'} /></button>
              <button onClick={() => handleDeleteTask(index)} className='btn'><img src='/bin.png'alt='delete' height={'23px'}/></button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </center>

);
};

export default TodoApp;
