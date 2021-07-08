import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
// import './Table';

class Posts extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      const posts = res.data;
      this.setState({ posts });
    });
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron-div col s12">
          <ul className="collection">
            {this.state.posts.map(post => (
              <li
                key={post.id}
                className="collection-item left-align red lighten-3">
                <h5>User ID: {post.id}</h5>
                <p>Post: {post.body}</p>
              </li>
            ))}
          </ul>
        </div>
        </div>
    );
  }
}

export default Posts;