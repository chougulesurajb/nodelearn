
import React, { Component } from 'react';
import '../../../App.css';


class ToDoSingle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            names: ""
        };
    }
    handleDeleteToDo = (ww) => {
        console.log("handleDeleteToDo", ww)
        this.props.handleDeleteToDo(ww)
    }

    render() {
        return (
            <tbody>
                <tr className="row">
                    <td className="col-1" onClick={this.props.onClickToDo} >{this.props.indexTodo + 1}</td>
                    <td className="col-1">|</td>
                    <td className="col-7">{this.props.todoSingle}</td>
                    <td className="col-1">|</td>
                    <td className="col-1">
                        <button onClick={this.handleDeleteToDo.bind(this, this.props.keyTodo)} type="button" className="btn btn-primary btn-sm">
                            <i className="far fa-trash-alt"></i>
                        </button></td>
                </tr>
            </tbody>
        )
    }
}


export default ToDoSingle