import React, { Component, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { useParams } from 'react-router'
import {db} from "../config/firebase";

export default class Sede extends Component {
    constructor(){
        super()
        this.state={
            sede:{
                id:this.props.match.params.id,
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

    componentDidMount(){
        db.sedes.doc(this.state.id).get().then((doc)=>{
            if(doc.exists){
                this.setState({sede:doc.data})
            }
        })
        console.log(this.state.sede)
    }

    render(){
        return (
            <div>
                <ListGroup variant="flush">
                    <ListGroup.Item>{this.state.sede.name}</ListGroup.Item>
                    <ListGroup.Item>{this.state.sede.phone}</ListGroup.Item>
                    <ListGroup.Item>{this.state.sede.email}</ListGroup.Item>
                    <ListGroup.Item>{this.state.sede.ciudad}</ListGroup.Item>
                    <ListGroup.Item>{this.state.sede.direccion}</ListGroup.Item>
                    <ListGroup.Item>{this.state.sede.zip}</ListGroup.Item>
                    <ListGroup.Item>{this.state.sede.active}</ListGroup.Item>
                </ListGroup>
            </div>
        )
    }

}
