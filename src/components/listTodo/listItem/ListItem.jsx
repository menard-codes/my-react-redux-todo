import React, { useState } from 'react';
import { connect } from 'react-redux'
import { editTodo, deleteTodo, changeTodoStatus } from '../../../redux/todoActions';
import TaskView from './TaskView';
import '../scss/listItem.scss';

function ListItem(props) {
    const itemId = props.data.id;
    const task = props.data.task;
    const activeStatus = props.data.active;

    const [onView, setonView] = useState(true);
    const [taskValue, setTaskValue] = useState(task)


    // the save button sends an action and changes local state (edit)
    const saveChanges = () => {
        const todoId = itemId;
        const editChanges = taskValue;
        props.editTodo(todoId, editChanges);
        setonView(true);
    }

    // undo reverts back to original state, sets onView to false
    const undoChanges = () => {
        setTaskValue(task)
        setonView(true)
    }

    // delete sends an action
    const deleteTodo = () => {
        const todoId = itemId;
        props.deleteTodo(todoId);
    }

    return (
        <>
            {
                onView
                ? <button
                    className ={activeStatus ? "active-status-btn" : "finished-status-btn"}
                    onClick={() => props.changeTodoStatus(itemId)}>
                </button>
                : null
            }
            <TaskView
                active={activeStatus}
                onView={onView}
                value={taskValue}
                handleChange={setTaskValue} />
            {
                props.data.active
                ? onView
                    ? <button
                        className="task-item-btn edit-btn"
                        onClick={() => setonView(false)}>
                            {/* edit */}
                            <i className="fas fa-pencil-alt edit-logo"></i>
                    </button>
                    : <button
                        onClick={saveChanges}
                        className="task-item-btn save-btn">
                            {/* save */}
                            <i className="fas fa-save save-logo"></i>
                    </button>
                : null
            }
            {
                onView
                ? <button
                    onClick={deleteTodo}
                    className="task-item-btn delete-btn">
                        {/* delete */}
                        <i className="fas fa-trash-alt delete-logo"></i>
                </button>
                : <button
                    onClick={undoChanges}
                    className="task-item-btn undo-btn">
                        {/* undo */}
                        <i className="fas fa-undo undo-logo"></i>
                </button>
            }
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        editTodo: (id, newVersion) => dispatch(editTodo(id, newVersion)),
        deleteTodo: id => dispatch(deleteTodo(id)),
        changeTodoStatus: id => dispatch(changeTodoStatus(id))
    }
}

export default connect(null, mapDispatchToProps)(ListItem);
