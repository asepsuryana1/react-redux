import React from 'react';

export default function TodoItem(props){
return <li>{props.todo.complete ? '[x]' : '[ ]'}{props.todo.task}<button onClick={props.remove}>hapus</button></li>

}