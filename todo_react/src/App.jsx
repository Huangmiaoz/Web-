import React, { Component } from 'react';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';

import './App.css'

class App extends Component {
    state = {
        todos : [
            {id : '001', name : 'eat', done : true},
            {id : '002', name : 'drink', done : true},
            {id : '003', name : 'sleep', done : false}
        ]
    }
	//addTodo用于添加一个todo，接收的参数是todo对象
	addTodo = (todoObj)=>{
		//获取原todos
		const {todos} = this.state
		//追加一个todo
		const newTodos = [todoObj,...todos]
		//更新状态
		this.setState({todos:newTodos})
	}

    updateTodo = (id,done)=> {
        const {todos} = this.state
        const newTodos = todos.map((todoObj)=>{
            if(todoObj.id === id) {
                return {...todoObj,done}
            } else {
                return todoObj
            }
        })
        this.setState({todos : newTodos})
    }
    // 删除
    deleteTodo = (id)=> {
        // console.log(id);
        console.log('deletetodo')
        const {todos} = this.state
        const newTodos = todos.filter((todoObj) => {
            return todoObj.id !== id
        })
        this.setState({todos:newTodos})
    }
    // 全选
    checkAllTodo = (done)=> {
        const {todos} = this.state
        const newTodos = todos.map((todoObj) => {
            return {...todoObj,done}
        })
        this.setState({todos:newTodos})
    }   
    // 清除所有已完成的
    clearDone = ()=>{
        const {todos} = this.state
        const newTodos =todos.filter((todoObj)=>{
            return !todoObj.done
        })
        this.setState({todos:newTodos})
    }
    render() {
        const {todos} = this.state;
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos = {todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                    <Footer todos = {todos} checkAllTodo={this.checkAllTodo} clearDone={this.clearDone}/>
                </div>
            </div>
        );
    }
}

export default App;