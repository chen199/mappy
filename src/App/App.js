import React, { Component } from 'react'
import httpService from '../services/httpService'
import UsersLists from './UsersList/UsersList'
import Map from './Map/Map'
import './app.css'

class App extends Component {

  constructor(props) {

    super(props),

      this.state = {
        users: [],
        map: {},
        newUser: {},
        
        //the value the retrive value function per key
        sortOptions: { 
          Age: user => user.age,  
          Name: user => user.name.first,
          Surname: user => user.name.last
        }
      }
  }

  render() {
   
    const { users, sortOptions } = this.state
    return (
      <div id="app-container">
        <UsersLists 
          users={users} 
          sortOptions={sortOptions} 
          onSort={this.sortUsers.bind(this)}
          onRemove={this.removeUserFromList.bind(this)}
          onUserFormChange={this.onUserFormChange.bind(this)}  
          onAdd={this.addUserToList.bind(this)}
        />
        <Map users={users}/>
      </div>
    )
  }

  _sortByKey(array, sortFunc) {
    return array.sort(function(a, b) {
        var x = sortFunc(a); var y = sortFunc(b);
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }

  sortUsers(key){
    this.setState( state => ({ ...state, ...{ users: this._sortByKey(this.state.users, this.state.sortOptions[key])} }) )
  }

  removeUserFromList(_id){
    this.setState(state => ({...state, ...{users: this.state.users.filter(user => user._id != _id)}} ))
  }

  onUserFormChange(updatedValue) {
    this.setState({
      newUser: {
        ...this.state.newUser,
        ...updatedValue
      }
    });
  };


  addUserToList(newUser) {
    let newUserModify = { 
      _id: newUser._id,
      name: {
        first: newUser.fname,
        last: newUser.lname,
      },
      age: newUser.age,
      latitude: newUser.latitude,
      longitude: newUser.longitude
    }
    this.setState(state => ({...state, ...{users: [...this.state.users, newUserModify] }} ))
  };


  componentDidMount(){
  
    httpService.get('/users')
      .then(res => {
        this.setState( state => ({ ...state, ...{ users: res.data } }) )
        // https://medium.freecodecamp.org/functional-setstate-is-the-future-of-react-374f30401b6b -lovit.
      }, error => {
        console.log("error")
      })
  }
}

export default App