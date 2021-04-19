import {
    ADD_TODO,
    EDIT_TODO,
    CHANGE_TODO_STATUS,
    DELETE_TODO
} from './todoActionTypes';

// add todo
export const addTodo = task => {
    return {
        type: ADD_TODO,
        payload: task
    }
}

// edit todo
export const editTodo = (id, newVersion) => {
    return {
        type: EDIT_TODO,
        payload: {
            id: id,
            data: newVersion,
        }
    }
}

// change todo status
export const changeTodoStatus = id => {
    return {
        type: CHANGE_TODO_STATUS,
        payload: id
    }
}

// delete todo
export const deleteTodo = id => {
    return {
        type: DELETE_TODO,
        payload: id
    }
}
