import React, { Component } from 'react';
import 'react-s-alert/dist/s-alert-default.css';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import $ from "jquery"

class NewToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newToDo: "",
        };
    }
    componentDidMount() {
    }
    createNewToDo = () => {
        if (this.state.newToDo.trim() === "") {
            Alert.error("Enter To do");
        } else {
            console.log(this.state.newToDo)
            $.ajax({
                url: "https://vast-badlands-53032.herokuapp.com/test/user/todos",
                method: "PUT",
                dataType: 'json',
                data: this.state.newToDo,
                success: function (result) {
                    // this.state.names = result.allUsers;
                    console.log("TODO deleted successfully")
                },
                error: function (e) {
                    alert("not created");
                }
            });
        }
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
        return (
            <div>
                <label htmlFor="">New : </label>
                <div className="row NewToDoCss">
                    <input className="form-control col-9" id="newtodo" type="text" placeholder="Create New To Do" onChange={this.onChange.bind(this)}></input>
                    <button type="" className="btn btn-success btn-sm col-3" onClick={this.createNewToDo}>Create</button>
                </div>
            </div>
        )
    }
}


export default NewToDo