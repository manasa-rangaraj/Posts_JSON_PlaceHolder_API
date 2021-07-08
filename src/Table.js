import React, { Component } from 'react';
import './App.css';
import axios from "axios";

class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      posts: []
    }
  }

  async componentDidMount() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    if (response.ok) {
      const users = await response.json()
      this.setState({ users})
    } 

    axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
      const posts = res.data;
      this.setState({ posts });
    });
  }

  render() {
    const { users } = this.state
    if(users.length > 0) {
    return  (
      <div class="container">
        <h1>TABLE</h1>
      <div class="table-wrapper">
        <table class="trth-table">
        <thead>
          <tr>
            {this.renderTH()}
          </tr>
        </thead>
        <tbody>
          {this.renderTR()}
        </tbody>
      </table>
      </div>
      <div>
      <h1>LIST</h1>
      <ul class="collection">
        {this.state.posts.map(post => (
          <li
            key={post.id}>
            <h5>User ID: {post.id}</h5>
            <p>Post: {post.body}</p>
          </li>
        ))}
      </ul>
    </div> 
      </div> 
    )}
     else { 
       return (
      <div>No users found</div>
    )
    }
  }


renderTH = () => {
    return Object.keys(this.state.users[0]).map(attr => <th key={attr}>{attr.toUpperCase()}</th>)
  }

renderTR = () => {
    return this.state.users.map(user => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{`${user.address.street}, ${user.address.city}`}</td>
          <td>{user.phone}</td>
          <td>{user.website}</td>
          <td>{user.company.name}</td>
        </tr>
      )
    })
  }

}
export default Table;

