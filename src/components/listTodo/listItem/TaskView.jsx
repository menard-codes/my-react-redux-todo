import React from 'react';
import '../scss/taskView.scss';

function TaskView(props) {
    return <input
        className={
            props.active
            ? props.onView
                ? "active-task-onView-input"
                : "active-task-onEdit-input"
            : "finished-task"
        }
        type="text"
        value={props.value}
        onChange={event => props.handleChange(event.target.value)}
        disabled={props.onView} />
}

export default TaskView;
