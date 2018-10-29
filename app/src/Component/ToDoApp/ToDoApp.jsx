import React, { Component } from 'react';
import '../../App.css';
import $ from "jquery"
import Title from "./Title/Title"
import NewToDo from "./NewToDo/NewToDo"


class ToDoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            names: ""
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
                that.setState({ names: result.allUsers }, function () {
                })
            },
            error: function (e) {
                alert(e.message);
            }
        });
    }

    render() {
        let user;
        if (this.state.names !== "") {
            user = this.state.names.map(element => {
                return <li key={element._id}>{element.firstname + " " + element.lastname + " " + element.address}  </li>
            });
        } else {
            user = ""
        }
        console.log(this.state.names)

        return (
            <div>
                <Title />
                <NewToDo existingTodos={this.state.names} />
                {user}
            </div>
        )
    }

}

export default ToDoApp