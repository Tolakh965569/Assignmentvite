import React, { useState } from 'react'
import Tag from './Tag.jsx'
import './Taskform.css'
const TaskForm = () => {
const [taskData,settaskData] = useState({
  task:"",
  status: "todo",
  tags:[]
})

const checkTag = (tag) =>{
  return taskData.tags.some((item) => item === tag);
}


const handleChange = e =>{
  const {name,value} = e.target;
  settaskData((prev) =>{
    return {...prev,[name]: value}
  })
}
  const handleSumit =(e)=>{
    e.preventDefault();
    console.log(taskData);
  }
  const selectTag =(tag) =>{
    if (taskData.tags.some((item) =>item === tag)){
      const filterTags = taskData.tags.filter((item) =>item !==tag );
      settaskData((prev) => {
        return {...prev,tags: filterTags}
      });
    }else{
      settaskData((prev) => {
        return{
          ...prev,tags: [...prev.tags,tag]
      }
    }
   );
  }
}
  return (
    <div >
      <header className="app_header">
            <form onSubmit={handleSumit}>
                <input type="text" 
                className="task_input"
                 placeholder="Enter your task" 
                 name="task"
                 onChange={handleChange}
                 />
                <div className="task_form_button_line">
                    <div>
                   <Tag selectTag={selectTag} tagname="HTML"
                    selectd={checkTag("HTML")}
                   />
                   <Tag selectTag={selectTag} tagname="CSS"
                    selectd={checkTag("CSS")}
                   />
                    <Tag selectTag={selectTag} tagname="Javascript"
                    selectd={checkTag("Javascript")}
                    />
                    <Tag selectTag={selectTag} tagname="React"
                    selectd={checkTag("React")}
                    />
                    </div>
                    <div>
                    <select className="task_status" name="status" onChange={handleChange}>       
                        <option value="todo">Todo</option>
                        <option value="doing">Donig</option>
                        <option value="done">Done</option>
                    </select>
                    </div>
                    
                    <button type="submit" 
                    className="task_submit">
                    + Add Task</button>
                </div>
            </form>
      </header>
    </div>
  )
}

export default TaskForm
