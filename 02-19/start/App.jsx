import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

const App = () => {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('nph-todos')) ?? [])
    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        localStorage.setItem('nph-todos', JSON.stringify(todos))
    }, [todos])

    function handleAddTodo() {
        const newTodos = [...todos, inputValue]
        setTodos(newTodos)
        setInputValue('')
    }

    return (
        <main>
            <h1>Nashville Programming Hour</h1>
            <ul>
                {todos.map(todo => <li>{todo}</li>)}
            </ul>
            <input type="text" value={inputValue} onChange={event => setInputValue(event.target.value)} />
            <button onClick={handleAddTodo}>Add Todo</button>
        </main>
    );
}

render(<App />, document.getElementById('root'));
