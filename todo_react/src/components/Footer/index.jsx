import React, { Component } from 'react';
import './index.css'

class Footer extends Component {
    // 全选
    handleCheckAll = (event)=>{
        this.props.checkAllTodo(event.target.checked)
    }
    // 清除所有已完成的
    handleClearAllDone = ()=>{
        this.props.clearDone()
    }
    render() {
        const {todos} = this.props;
        // have done
        const doneCount = todos.reduce((pre,todo)=>{
            // if(todo.done) return pre+1
            // else return pre
            return todo.done ? pre+1 : pre
        },0)

        // total
        const total = todos.length
        return (
            <div className="todo-footer">
                <label>
                <input type="checkbox" 
                    checked={doneCount === total && total !== 0 ? true : false}
                    onChange={this.handleCheckAll}
                />
                </label>
                <span>
                <span>已完成{doneCount}</span> / 全部{total}
                </span>
                <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
            </div>
        );
    }
}

export default Footer;