import React, { Component } from 'react'
import './UsersListItem.css'

// I really dont like this component as it look right now. 
// For now, its Container type in order to add 'onClickRemove' the the prototype instead of duplicate it in memory
class UsersListItem extends Component {

  constructor(props){
    super(props)

    this.state = {
      _id: props._id
    }

    this.onClickRemove = this.onClickRemove.bind(this);
    this.onClickRemoveParent = props.onRemove.bind(this)
  }

  onClickRemove(e) {
    this.onClickRemoveParent(this.state._id)
  }

  render(){
    const {fname, lname, age, _id } = this.props
    return (
      <li className="users-list-item">
        <span>{fname}</span>
        <span>{lname},</span>
        <span>{age}</span>
        <input className="users-list-item-rm" type="button" value="remove" onClick={this.onClickRemove}></input>
      </li>
    )
  }

}

export default UsersListItem