import React, { Component } from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'


export default class TodoBox extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };

        this.addTodo = this.addTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }
    addTodo(todo) {
        this.setState((state) => ({
            data: [...state.data, todo] 
        }));

    }
    deleteTodo(id) {
        this.setState((state) => ({
            data: state.data.filter(item => item.id != id)
        }))}

    render() {
        return (
            <div>
                <h1> Daftar Todo</h1>
                <TodoList data={this.state.data} deleteTodo={this.deleteTodo} />
                <TodoForm addTodo={this.addTodo} />
            </div>
        )
    }
}