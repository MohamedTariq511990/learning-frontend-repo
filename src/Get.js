import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Post.css';
class Get extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://127.0.0.1:8080/showDetails')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}


  render() {   
    return (
        <div className="box2">
      <table border={1}>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>category</th>
          <th>price</th>
          <th>rating</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.category}</td>
            <td>{user.price}</td>
            <td>{user.rating}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <button className="button1">
        <Link to="/">Add Item</Link>
        </button>
        <button className="button2">
        <Link to="/Put" >Update Item</Link>
        </button>
        <button className="button3">
        <Link to="/Delete">Delete Item</Link>
        </button>
    </div>
    );
  }}
  
export default Get;