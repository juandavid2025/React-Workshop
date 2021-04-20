import React, { Component, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'



export default class Sede extends Component {
    constructor({sede:{id,name,lastname,email,vality}}){
        super()
        this.state={
            sede:{
                name:"",
                phone:"",
                email:"",
                ciudad:"",
                direccion:"",
                zip:"",
                active:""
            }
        }
    }



    render(){
        console.log(this.props.sede.id)
        const myDivStyle={
            margin:"40px",
        };

        if(this.props.sede.id!=""){
            return (
                <div style={myDivStyle}>
                    <h4> Sede elegida</h4>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Nombre:{this.props.sede.name}</ListGroup.Item>
                        <ListGroup.Item>Telefono:{this.props.sede.phone}</ListGroup.Item>
                        <ListGroup.Item>Email:{this.props.sede.email}</ListGroup.Item>
                        <ListGroup.Item>Ciudad:{this.props.sede.ciudad}</ListGroup.Item>
                        <ListGroup.Item>Direccion:{this.props.sede.direccion}</ListGroup.Item>
                        <ListGroup.Item>Zip:{this.props.sede.zip}</ListGroup.Item>
                        <ListGroup.Item>Activa:{this.props.sede.active}</ListGroup.Item>
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
