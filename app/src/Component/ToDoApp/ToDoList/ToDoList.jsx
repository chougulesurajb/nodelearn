import React, { Component } from 'react';
import $ from "jquery"
import ToDoSingle from "../ToDoSingle/ToDoSingle"


class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            existingTodos: []
        };
    }
    componentDidMount() {
        console.log(this.props.existingTodos)
        this.setState({ existingTodos: this.props.existingTodos })
    }
    onClickToDo = (e) => {
        console.log(e.target.textContent)
        this.props.clickToDo(e.target.textContent);
    }
    render() {
        console.log(this.props.existingTodos)
        var existingTodoList;
        if (this.props.existingTodos) {
            existingTodoList = this.props.existingTodos.map((todo, index) => {
                return <ToDoSingle
                    todoSingle={todo.todo}
                    keyTodo={"keyTodoExisting" + index}
                    onClickToDo={this.onClickToDo}
                    indexTodo={index} />

            })
        }

        var todolist = this.props.toDoListProps.map((todo, index) => {
            return <ToDoSingle
                todoSingle={todo}
                keyTodo={"keyTodo" + index}
                onClickToDo={this.onClickToDo}
                indexTodo={index} />
        })

        return <div>
            <table id="toDoListTable">
                <thead>
                    <tr className="row">
                        <th className="col-1">Sr</th>
                        <td className="col-1">|</td>
                        <th className="col-7">To Do</th>
                        <td className="col-1">|</td>
                        <th className="col-1">Delete</th>
                    </tr>
                </thead>
                {existingTodoList}
                {todolist}
            </table>
        </div>
    }
}


export default ToDoList