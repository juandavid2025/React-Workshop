import React, { Component } from "react";
import firebase from "../config/firebase";
import {Table} from "react-bootstrap";
import {Button} from "react-bootstrap";

export default class Usuarios extends Component {
  constructor() {
    super();
    this.state = {
      usuarios: [],
      usuario:
      {
          id: "",
          name: "",
          lastname: "",
          email: "",
          password: "",
          vality: "",
          campus: "",
          active: "",
      },
      db: firebase.firestore(),
    };
  }

  componentDidMount = () => {
    this.getUsuarios();
  };

  getUsuarios = () => {
    let usuarios = [];

    this.state.db
      .collection("usuarios")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
          usuarios.push(doc.data());
        });
        this.setState({usuarios});
      });
  };

  renderizarUsuarios(){
      let lista = this.state.usuarios.map((usuario) => (
          <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.name}</td>
              <td>{usuario.lastname}</td>
              <td>{usuario.email}</td>
              <td>{usuario.password}</td>
              <td>{usuario.vality}</td>
              <td>{usuario.campus}</td>
              <td>{usuario.active}</td>
              <td>
                <Button variant="info">editar</Button>
                <Button variant="danger">Eliminar</Button>
              </td>
          </tr>
      ));

      return lista;
  }

  render() {
    return (
      <div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Contraseña</th>
              <th>Vigencia</th>
              <th>Sedes</th>
              <th>Activo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>{this.renderizarUsuarios()}</tbody>
        </Table>
      </div>
    );
  }
}
