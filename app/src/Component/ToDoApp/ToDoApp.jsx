import React, { Component } from 'react';
import '../../App.css';
import Title from "./Title/Title"
import NewToDo from "./NewToDo/NewToDo"
import ToDoList from '../ToDoApp/ToDoList/ToDoList';


class ToDoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allTodos: ""
        };
    }
    componentDidMount() {
    }
    render() {
        return (
            <div>
                <Title />
                <NewToDo />
                <ToDoList />
                {/* {user} */}
            </div>
        )
    }

}

export default ToDoApp