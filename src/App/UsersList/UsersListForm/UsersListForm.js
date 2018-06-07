import React, { Component } from "react";
import './users-list-form.css'

class UsersListForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      _id: "",
      fname: "",
      lname: "",
      age: "",
      latitude: "",
      longitude: ""
    };

  }

  change(e) {
    // this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit(e) {
    e.preventDefault();
    this.props.onAdd(this.state);
    this.setState({
      _id: "",
      fname: "",
      lname: "",
      age: "",
      latitude: "",
      longitude: ""
    });

    this.props.onChange({
      _id: "",
      fname: "",
      lname: "",
      longitude: "",
      age: "",
      latitude: "",
      longitude: ""
    });
  };

  // can make it better, by creating config object and itereating, producing <input> per item
  render() {
    return (
      <div>
        <h3 id="users-list-h3">Add new User</h3>
        <form id="users-list-form">
          <input
            name="_id"
            placeholder="ID"
            value={this.state._id}
            onChange={e => this.change(e)}
          />
          <input
            name="fname"
            placeholder="First name"
            value={this.state.fname}
            onChange={e => this.change(e)}
          />
          <input
            name="lname"
            placeholder="Last name"
            value={this.state.lname}
            onChange={e => this.change(e)}
          />
          <input
            name="age"
            placeholder="age"
            value={this.state.age}
            onChange={e => this.change(e)}
          />
          <input
            name="latitude"
            placeholder="latitude"
            value={this.state.latitude}
            onChange={e => this.change(e)}
          />
          <input
            name="longitude"
            placeholder="longitude"
            value={this.state.longitude}
            onChange={e => this.change(e)}
          />
          <br />
          <button id="add-user-submit" onClick={e => this.onSubmit(e)}>Submit</button>
        </form>
      </div>
    );
  }
}

export default UsersListForm