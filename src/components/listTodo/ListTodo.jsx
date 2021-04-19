import React from 'react';
import { connect } from 'react-redux';
import ListItem from './listItem/ListItem';
import './scss/listTodo.scss';

function ListTodo(props) {
    return (
        <ul id="list">
            {props.todoList.map(todoItem => {
                return (
                    <li
                        key={todoItem.id}
                        className={todoItem.active ? "active-item" : "finished-item"}>
                            <ListItem data={todoItem} />
                    </li>
                )
            })}
        </ul>
    )
}

const mapStateToProps = state => {
    return {
        todoList: state
    }
}

export default connect(mapStateToProps)(ListTodo)
