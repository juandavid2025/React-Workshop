import React, { Component } from 'react'
import {Table,Button} from "react-bootstrap";
import {db} from "../config/firebase";
export default class ListaUsuarios extends Component {
    constructor({sede:{id,name,lastname,email,vality}}) {
        super()
        this.state = {
            usuarios: []
        }
        this.update=this.update.bind(this)
    }

    loadUsers() {
        db.usuarios.where("campus", "==", this.props.sede.id).get()
            .then((querySnapshot) => {
                let users = [];
                querySnapshot.forEach((doc) => {
                    users.push(doc.data());
                    this.setState({ usuarios: users })
                });
            })
    }

    update(){
        this.loadUsers()
    }
    renderizarUsuarios() {
        let lista = this.state.usuarios.map((usuario) => (
            <tr key={usuario.id}>
                <td>{usuario.name}</td>
                <td>{usuario.lastname}</td>
                <td>{usuario.email}</td>
                <td>{usuario.vality}</td>
            </tr>
        ));

        return lista;
    }

    render() {
        if(this.props.sede.id!=""){
        return (
            <div>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Email</th>
                            <th>Vigencia</th>
                        </tr>
                    </thead>
                    <tbody>{this.renderizarUsuarios()}</tbody>
                </Table>
                <Button onClick={this.update}>Update </Button>
            </div>
        );
        }else{
            return(
                <div></div>
            )
        }
    }
}
