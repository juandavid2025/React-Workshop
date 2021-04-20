import React, { Component, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

export default class usuario extends Component {
    constructor({user:{id,name,lastname,email,vality}}){
        super()
        this.state={
            name:"",
            password:"",
            lastname:"",
            email:"",
            vality:"",
            campus:"",
            active:"",
            sedes:[]
        }
    }
    render(){
        const myDivStyle={
            margin:"40px",
        };

        if(this.props.user.id!=""){
            return (
                <div style={myDivStyle}>
                    <h4> Usuario Elegido</h4>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Nombre:{this.props.user.name}</ListGroup.Item>
                        <ListGroup.Item>Apellido:{this.props.user.lastname}</ListGroup.Item>
                        <ListGroup.Item>Email:{this.props.user.email}</ListGroup.Item>
                        <ListGroup.Item>Contraseña:{this.props.user.password}</ListGroup.Item>
                        <ListGroup.Item>Validez:{this.props.user.vality}</ListGroup.Item>
                        <ListGroup.Item>Sede:{this.props.user.campus}</ListGroup.Item>
                        <ListGroup.Item>Activo:{this.props.user.active}</ListGroup.Item>
                    </ListGroup>
                </div>
            )
        }else{
            return (
                <div></div>
            )
        }
        
    }

}
