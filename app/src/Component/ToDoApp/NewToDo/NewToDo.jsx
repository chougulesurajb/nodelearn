import React, { Component } from 'react';
import $ from "jquery"
import 'react-s-alert/dist/s-alert-default.css';

import Alert from 'react-s-alert';
import ToDoList from '../ToDoList/ToDoList';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

class NewToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newToDo: "",
            toDoListState: [],
            existingTodos: []
        };
    }
    componentDidMount() {
        console.log(this.props.existingTodos)
    }
    createNewToDo = () => {
        if (this.state.newToDo.trim() === "") {
            Alert.error("Enter To do");

        } else {

            if (this.state.toDoListState.length === 0) {
                this.state.toDoListState.push(this.state.newToDo);
                this.setState(this);
                Alert.success("New To Do Created")

            } else {
                var present = false;
                this.state.toDoListState.forEach(oldtodo => {
                    if (oldtodo.includes(this.state.newToDo)) {
                        present = true;

                    }
                });
                if (!present) {

                    this.state.toDoListState.push(this.state.newToDo);
                    this.setState(this);
                    Alert.success("New To Do Created")
                } else {
                    Alert.error("Already present")

                }

            }


        }
    }
    onClickTodo = (e) => {
        let currentToDo = this.state.toDoListState;

        let newTodoList = currentToDo.filter((todo, index) => {
            return index !== e - 1
        })

        this.setState({ toDoListState: newTodoList })
    }
    onChange = (e) => {
        let that = this;
        let attr = document.getElementsByTagName("input")[0].getAttribute("id")
        // console.log(attr);

        if (attr === "newtodo") {
            that.setState({ newToDo: e.target.value })
        }
        // console.log((this.state.newToDo));

    }
    render() {
        console.log(this.props.existingTodos)

        return (
            <div>
                <label htmlFor="">New : </label>
                <div className="row NewToDoCss">
                    <input className="form-control col-9" id="newtodo" type="text" placeholder="Create New To Do" onChange={this.onChange.bind(this)}></input>
                    <button type="" className="btn btn-success btn-sm col-3" onClick={this.createNewToDo}>Create</button>

                </div>
                <ToDoList existingTodos={this.props.existingTodos} toDoListProps={this.state.toDoListState} clickToDo={this.onClickTodo} />
            </div>
        )
    }
}


export default NewToDo