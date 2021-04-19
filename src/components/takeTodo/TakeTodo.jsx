import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../redux/todoActions';
import './takeTodo.scss';

// I need an input and a button

function TakeTodo(props) {
    
    const [input, setInput] = useState('')

    const handleAddTodo = () => {
        props.addTodo(input);
        setInput('')
    }
    
    const handleEnterKey = (event) => {
        if (event.code === 'Enter') {
            const btn = document.getElementById('add-todo');
            btn.click();
        }
    }
    
    return (
        <div>
            <input
                type="text"
                id="todo-edit"
                autoFocus
                placeholder="Enter a todo"
                value={input}
                onChange={event => setInput(event.target.value)}
                onKeyDown={event => handleEnterKey(event)} />
            <button id="add-todo" onClick={handleAddTodo}>Add Todo</button>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        addTodo: task => dispatch(addTodo(task))
    }
}

export default connect(null, mapDispatchToProps)(TakeTodo);
