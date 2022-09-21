import React, { Component } from 'react';
import './index.css'

class Item extends Component {
    state={mouse:false}
    // 鼠标移入移出
    handleMouse = (flag)=>{
        return ()=> {
            // console.log(flag)
            this.setState({mouse : flag});
        }
    }
    // 勾选
    handleChecked = (id) =>{
        return(event) => {
            this.props.updateTodo(id,event.target.checked)
        }
    }
    // 删除
    handleDelete = (id)=>{
        console.log(id)
        console.log(this.props);
        this.props.deleteTodo(id)
    }
    render() {
        const {id,name,done} = this.props;
        const {mouse} = this.state;
        return (
            <li style={{backgroundColor:mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleChecked(id,done)}/>
                    <span>{name}</span>
                </label>
                <button onClick={()=>{this.handleDelete(id)}} className="btn btn-danger" style={{display : mouse ? 'block':'none'} }>删除</button>
            </li>
        );
    }
}

export default Item;