import React from 'react'
import UsersListItem from './UsersListItem/UsersListItem'
import UsersListForm from './UsersListForm/UsersListForm'
import './users-list.css'

const UsersList = ({users, sortOptions, onSort, onRemove, onUserFormChange, onAdd}) => {

  const onChange = (e) => {
    onSort(e.target.value)
  }

  return (
    <div id="users-list">
      <UsersListForm onAdd={onAdd} onChange={onUserFormChange}/>

      <select id="users-list-select" onChange={onChange}>
        { Object.keys(sortOptions).map(option => <option key={option}>{option}</option>)}
      </select>
      
      <ul>
        {users.map(user => <UsersListItem 
          key={user._id} 
          fname={user.name.first}
          lname={user.name.last}
          age={user.age}
          _id={user._id}
          onRemove={onRemove}/>
        )}
      </ul>
    </div>
  )
}

export default UsersList