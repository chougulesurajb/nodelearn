
import React, { Component } from 'react';
import $ from "jquery"
import '../../../App.css';


class ToDoSingle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            names: ""
        };
    }
    render() {
        return (
            <tbody key={this.props.keyTodo}>
                <tr className="row">
                    <td className="col-1" onClick={this.props.onClickToDo} >{this.props.indexTodo + 1}</td>
                    <td className="col-1">|</td>
                    <td className="col-7">{this.props.todoSingle}</td>
                    <td className="col-1">|</td>
                    <td className="col-1">
                        <button type="button" className="btn btn-primary btn-sm">
                            <i class="far fa-trash-alt"></i>
                        </button></td>
                </tr>



            </tbody>
        )
    }
}


export default ToDoSingle