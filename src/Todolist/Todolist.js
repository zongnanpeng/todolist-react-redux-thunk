import React, { Component } from 'react'
import store from '../Store/index'
import { getListCreator, putTodoCreator, postTodoCreator, deleteTodoCreator } from '../Store/actionCreators'
import TodolistUI from './TodolistUI';

export default class Todolist extends Component {
    constructor() {
        super();
        this.state = store.getState();
        this.storeSubscribe = this.storeSubscribe.bind(this);
        this.putTodo = this.putTodo.bind(this);
        this.postTodo = this.postTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        store.subscribe(this.storeSubscribe);

    }

    render() {
        const { todo, list } = this.state;
        return (
            <div>
                <TodolistUI
                    todo={todo}
                    list={list}
                    putTodo={this.putTodo}
                    postTodo={this.postTodo}
                    deleteTodo={this.deleteTodo}
                />
            </div>
        )
    }

    componentDidMount() {
        const action = getListCreator();
        store.dispatch(action);
    }


    // store订阅
    storeSubscribe() {
        this.setState(
            store.getState()
        )
    }

    // 更新todo
    putTodo(e) {
        let value = e.target.value;
        const action = putTodoCreator(value);
        store.dispatch(action);
    }

    // 添加todo至list
    postTodo() {
        const action = postTodoCreator();
        store.dispatch(action);
    }

    // 删除todo
    deleteTodo(index) {
        const action = deleteTodoCreator(index);
        store.dispatch(action);
    }

}
