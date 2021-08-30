import React from 'react';

import './Todo.css';

const TodoList = ({todos, toggleCheckbox, deleteTodo}) => {
    return ( 
        <table>
            <tbody>
            {todos.map(todo => {
                return (
                    <tr key={todo.id}>
                        <td>{todo.title}</td>
                        <td>
                            <input 
                            type="checkbox" 
                            checked={todo.completed} 
                            onChange={() => toggleCheckbox(todo.id)}
                            readOnly />
                        </td>
                        <td>
                            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        </td>
                    </tr>
                )
            })}
            </tbody>
        </table>
     );
}
 
export default TodoList;