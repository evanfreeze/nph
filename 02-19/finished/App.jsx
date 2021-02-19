import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

export const App = () => {
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
                {todos.map(todo => <li key={todo}>{todo}</li>)}
            </ul>
            <input placeholder="Enter Todo" type="text" value={inputValue} onChange={event => setInputValue(event.target.value)} />
            <button onClick={handleAddTodo}>Add Todo</button>
        </main>
    );
}

if (document.getElementById('root')) {
    render(<App />, document.getElementById('root'));
}
