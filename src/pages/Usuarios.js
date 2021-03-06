import React, { Component } from "react";
import {db} from "../config/firebase";
import {Table} from "react-bootstrap";
import {Button} from "react-bootstrap";
import AddUsuarioButton from "../components/AddUsuarioButton";
import Usuario from "../pages/Usuario"

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
    };
  }

  componentDidMount = () => {
    this.getUsuarios();
  };

  getUsuarios = () => {
    let usuarios = [];

    db.usuarios
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
          usuarios.push(doc.data());
        });
        this.setState({usuarios});
      });
  };

  deleteUser = (usuario) =>{
      db.usuarios.doc(usuario.id).delete()
      this.getUsuarios()
  }

  edit=(selected)=>{
    this.setState({usuario:selected})
  }

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
                <Button variant="info" onClick={()=>this.edit(usuario)}>editar</Button>
                <Button variant="danger" onClick={()=>this.deleteUser(usuario)}>Eliminar</Button>
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
              <th>Contrase??a</th>
              <th>Vigencia</th>
              <th>Sedes</th>
              <th>Activo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>{this.renderizarUsuarios()}</tbody>
        </Table>
        <AddUsuarioButton/>
        <Usuario user={this.state.usuario}/>
      </div>
    );
  }
}
