import {
    ADD_TODO,
    CHANGE_TODO_STATUS,
    DELETE_TODO,
    EDIT_TODO
} from './todoActionTypes'


const initialState = []

export default function todoReducer(state=initialState, action) {
    switch(action.type) {
        case ADD_TODO:
            const nextId = state.length > 0
                            ? state[state.length - 1].id + 1 // id of last item plus one
                            : 0
            return [
                ...state,
                {
                    id: nextId,
                    task: action.payload,
                    active: true
                }
            ]
        case EDIT_TODO:
            return [
                ...state.map(todo => {
                    return todo.id === action.payload.id
                    ? {...todo, task: action.payload.data}
                    : todo
                })
            ]
        case CHANGE_TODO_STATUS:
            return [
                ...state.map(todo => {
                    return todo.id === action.payload
                    ? {...todo, active: ! todo.active}
                    : todo
                })
            ]
        case DELETE_TODO:
            return [
                ...state.filter(todo => todo.id !== action.payload)
            ]

        default:
            return state
    }
}
