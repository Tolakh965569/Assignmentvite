import React, { useState } from 'react'
import Tag from './Tag.jsx'
import './Taskform.css'
const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        return {
          ...prev,
          tags: [...prev.tags, tag],
        };
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((prev) => {
      return [...prev, taskData];
    });
    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    });
  };

  return (
    <div >
      <header className="app_header">
            <form onSubmit={handleSubmit}>
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

export default TaskForm;
