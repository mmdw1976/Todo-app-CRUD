import React, {useState} from 'react'


const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState('');

    const inputTitle = (e) => {
        setTitle(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        addTodo({title});
        setTitle('')
    }
    return ( 
        <div>
            <form onSubmit={submitHandler}>
                <label>Add New Todo</label>
                <br />
                <input type="text" value={title} onChange={inputTitle}/>
            </form>
        </div>
     );
}
 
export default AddTodo;