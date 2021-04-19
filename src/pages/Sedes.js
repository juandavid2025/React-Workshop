import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import AddSedeButton from "../components/AddSedeButton";
import {db} from "../config/firebase";

export default class Sedes extends Component {
  constructor() {
    super();
    this.state = {
      sedes: [],
      sede: {
        id: "",
        name: "",
        phone: "",
        email: "",
        location: "",
        active: "",
      },
    };
  }

  componentDidMount = () =>{
      this.getSedes();
  }

  getSedes = () => {
      let sedes = [];

      db.sedes
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
          sedes.push(doc.data());
        });
        this.setState({sedes});
      });
  }

  deleteSede =(sede)=>{
      db.sedes.doc(sede.id).delete()
      this.getSedes()
  }

  renderizarSedes(){
      let listaSedes = this.state.sedes.map((sede) => (
          <tr key={sede.id}>
              <td>{sede.id}</td>
              <td>{sede.name}</td>
              <td>{sede.phone}</td>
              <td>{sede.email}</td>
              <td>{sede.location}</td>
              <td>{sede.active}</td>
              <td>
                <Button variant="info">editar</Button>
                <Button variant="danger" onClick={()=>this.deleteSede(sede)} >Eliminar</Button>
              </td>
          </tr>
      ));

      return listaSedes;
  }
  
  render() {
    return (
      <div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Location</th>
              <th>Active</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.renderizarSedes()}</tbody>
        </Table>
        <AddSedeButton/>
      </div>
    );
  }
}
