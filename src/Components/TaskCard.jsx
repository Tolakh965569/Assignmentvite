import React from 'react'
import TaskColumn from './TaskColumn'
import Tag from "./Tag.jsx";
import Delete from '../assets/delete.png'
import './TaskCard.css'

const TaskCard = ({title}) => {
  return (
    <article className="task_card">
        <p className="task_text">{(title)}</p>
        <div className="task_card_button_line">
            <div className="task_card_tags">
                <Tag tagname="HTML"/>
                <Tag tagname="CSS"/>
            </div>
            <div className="task_delete">
                <img src={Delete} alt="" />
            </div>
        </div>
    </article>
  )
}

export default TaskCard
