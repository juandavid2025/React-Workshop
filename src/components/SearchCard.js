import React, { Component } from "react";
import {Card} from "react-bootstrap";

export default class SearchCard extends Component {
  constructor({user: { id, name, lastname, email, vality }}) {
    super();

    this.state ={
    }
  }

  render() {

    const myBodyStyle = {
        padding: "2px",
    };

    const myCardStyle = {
        margin: "10px",
    };

    return (
      <div>
        <Card style={myCardStyle}>
          <Card.Body style={myBodyStyle}>Id: {this.props.user.id}</Card.Body>
          <Card.Body style={myBodyStyle}>Name: {this.props.user.name}</Card.Body>
          <Card.Body style={myBodyStyle}>LastName: {this.props.user.lastname}</Card.Body>
          <Card.Body style={myBodyStyle}>email: {this.props.user.email}</Card.Body>
          <Card.Body style={myBodyStyle}>vality: {this.props.user.vality}</Card.Body>
        </Card>
      </div>
    );
  }
}
