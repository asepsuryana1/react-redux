import React from 'react';
import TodoItem from './TodoItem'


//embed must use {}
export default function TodoList(props) {
    const listItems = props.data.map((item, index) =>
        <TodoItem key={index} todo={item} remove={() => props.deleteTodo(item.id)} />
    );
    return (
        <ol>{listItems}</ol>
    )
} 