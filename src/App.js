import React, {useState} from 'react'
import AddTodo from './components/AddTodo';

import TodoList from './components/TodoList';


const DUMMY = [
    {
        title: 'Learning React',
        completed: false,
        id: 1
    },
    {
        title: 'Learning HTML',
        completed: true,
        id: 2
    }
]

const App = () => {
    const [todos, setTodos] = useState(DUMMY);

    // create
    const addTodo = (todo) => {
        setTodos((prevState) => {
            return [...prevState, 
                {
                    ...todo, 
                    completed: false, 
                    id: prevState.length + 1
                }]
        })
    }

    // update
    const toggleCheckbox = (id) => {
        const toggle = todos.map(todo => {
            if(todo.id === id) {
                return {...todo, completed: !todo.completed}
            }
            return todo
        })
        setTodos(toggle);
    }

    // destroy
    const deleteTodo = (id) => {
        setTodos((prevState) => {
            return prevState.filter(todo => todo.id !== id)
        })
    }
    return ( 
        <div>
            <TodoList 
            todos={todos} 
            toggleCheckbox={toggleCheckbox} 
            deleteTodo={deleteTodo}
            />
            <hr />
            <AddTodo addTodo={addTodo} />
        </div>
     );
}
 
export default App;