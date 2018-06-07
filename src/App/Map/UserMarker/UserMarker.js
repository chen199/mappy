import React from 'react'
import './UserMarker.css'

const UserMarker = ({fname, lname, age}) => {
  return (
    <div className="user-marker">
      <span>{fname}</span>
      <span>{lname}</span>
      <span>{age}</span>
    </div>
  )
}

export default UserMarker