import React, { useState } from 'react';
import { render } from 'react-dom';

const initialTodos = ['laundry', 'run the dishwasher', 'vacuum', 'learn more about parcel']

const App = () => {
    const [todos, setTodos] = useState(initialTodos)
    const [inputValue, setInputValue] = useState('')

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
