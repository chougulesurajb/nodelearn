import React, { Component } from 'react';
import '../../App.css';
import Title from "./Title/Title"
import NewToDo from "./NewToDo/NewToDo"
import ToDoList from '../ToDoApp/ToDoList/ToDoList';


class ToDoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locationX: "",
            locationY: ""
        };
    }
    componentDidMount() {
        let that = this
        navigator.geolocation.getCurrentPosition(function (position) {
            that.do_something(position);
        });
    }
    do_something = (a) => {
        console.log("----a", a)
        this.setState({ locationX: a })
    }

    render() {
        return (
            <div>
                {this.state.locationX.timestamp}
                <Title />
                <NewToDo />
                <ToDoList />
                {/* {user} */}
            </div>
        )
    }

}

export default ToDoApp