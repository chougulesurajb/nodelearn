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
        var that = this;

        $.ajax({
            url: "https://vast-badlands-53032.herokuapp.com/test/user/todos",
            method: "GET",
            dataType: 'json',
            success: function (result) {
                // this.state.names = result.allUsers;
                // that.setState({ allTodos: result.allUsers }, function () {
                // })
                that.setState({ existingTodos: result.allUsers })
            },
            error: function (e) {
                alert(e.message);
            }
        });
    }

    handleDeleteToDo = (deleteTodo) => {
        // var that = this;
        console.log(deleteTodo)
        $.ajax({
            url: "https://vast-badlands-53032.herokuapp.com/app/todoservices/deletetodo",
            method: "PUT",
            dataType: 'json',
            data: deleteTodo,
            success: function (result) {
                // this.state.names = result.allUsers;
                console.log("TODO deleted successfully")
            },
            error: function (e) {
                alert("not deleted");
            }
        });
    }
    render() {
        console.log(this.state.existingTodos)
        var existingTodoList;
        if (this.state.existingTodos) {
            existingTodoList = this.state.existingTodos.map((todo, index) => {
                return <ToDoSingle onClick key={"ToDoSingle" + todo._id}
                    todoSingle={todo.todo}
                    keyTodo={todo._id}
                    indexTodo={index}
                    handleDeleteToDo={this.handleDeleteToDo}
                />
            })
        }

        return (
            this.state.existingTodos.length !== 0 ? <div>
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
                </table>
            </div> : <div>Loading Todos...</div>
        )
    }
}


export default ToDoList