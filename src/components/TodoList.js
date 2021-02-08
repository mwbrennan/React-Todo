// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {


    return (
        <div>
            {
                props.listItems.map((item) => (
                     <Todo key={item.id} item={item} toggle={props.toggle} />
                ))}
            <button className='clearBtn' onClick={props.completedItem}>Clear</button>
        </div>
    )
};

export default TodoList;