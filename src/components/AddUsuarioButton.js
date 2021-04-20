import {Button, Modal,Form} from "react-bootstrap"
import React, {useState,Component} from "react"
import {db} from "../config/firebase"


export default class AddUsuarioButton extends Component {
    constructor(){
        super()
        this.state={
            sedes:[],
            open:false,
            id:"",
            Nombre:"",
            password:"",
            Apellido:"",
            Email:"",
            Validez:"",
            Sede:"",
            Activo:""
        }
        this.openModal=this.openModal.bind(this)
        this.closeModal=this.closeModal.bind(this)
        this.generateUUID=this.generateUUID.bind(this)
    }

    componentDidMount(){
        this.getSedes()
        this.generateUUID()
    }

    generateUUID() { // Public Domain/MIT
        var d = new Date().getTime();//Timestamp
        var d2 = (performance && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
        var uuid= 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16;//random number between 0 and 16
            if(d > 0){//Use timestamp until depleted
                r = (d + r)%16 | 0;
                d = Math.floor(d/16);
            } else {//Use microseconds since page-load if supported
                r = (d2 + r)%16 | 0;
                d2 = Math.floor(d2/16);
            }
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });  
        this.state.id=uuid
        console.log(this.state.id)
    }

    
    getSedes(){
        let sedes = [];

        db.sedes
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            sedes.push(doc.data());
          });
        });
        this.state.sedes=sedes;
        console.log("sedes")
    }

    renderOptions(){
        let options=this.state.sedes.map((sede)=>(
            <option value={sede.id}>{sede.name}</option>
        ));
        return options
    }

    openModal(){
        this.setState({open:true})
    }

    closeModal(){
        this.setState({open:false})
    }

    handleInputChange = (event) =>{
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        let user= this.state.user;
    
        this.setState({
          [name]: value
        });
      }

    handleChange = event=>{
        const target= event.target;
        const value = target.value
        console.log(value)
        this.setState({Sede:value})
    }


    handleSubmit = (e) =>{
        
 //       db.sedes.doc(this.state.Sede.id).collection("usuarios").doc(this.state.id).set({id:this.state.id,name:this.state.Nombre, lastname:this.state.Apellido,
 //            email:this.state.Email,password:this.state.password, vality:this.state.Validez,
 //            campus:this.state.Sede,active:this.state.Activo})
             console.log({id:this.state.id,name:this.state.Nombre, lastname:this.state.Apellido,
                email:this.state.Email,password:this.state.password, vality:this.state.Validez,
                campus:this.state.Sede,active:this.state.Activo})

            db.usuarios.doc(this.state.id).set({id:this.state.id,name:this.state.Nombre, lastname:this.state.Apellido,
                email:this.state.Email,password:this.state.password, vality:this.state.Validez.toString(),
                campus:this.state.Sede,active:this.state.Activo})
             this.setState({
                id:"",
                open:false,
                Nombre:"",
                Apellido:"",
                Email:"",
                passwrod:"",
                Validez:"",
                Sede:"",
                Activo:""
             })
             this.generateUUID()
    }

    render(){
    return (
        <>
        <Button onClick={this.openModal} disabled={this.state.open} variant="outline-primary" size="sm">
            Agregar Usuario
        </Button>
        <Modal show={this.state.open} onHide={this.closeModal}>
            <Form onSubmit= {this.handleSubmit.bind(this)}>
                <Modal.Body>
                <Form.Group controlId="formName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Nombre" ref="Nombre" value={this.state.Nombre} onChange= {this.handleInputChange}
                        name="Nombre"/>
                    </Form.Group>
                    <Form.Group controlId="formName">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control type="text" placeholder="Apellido" ref="Apellido" value={this.state.Apellido} onChange= {this.handleInputChange}
                        name="Apellido"/>
                    </Form.Group>
                    <Form.Group controlId="formName">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" ref="Email" value={this.state.Email} onChange= {this.handleInputChange}
                        name="Email"/>
                    </Form.Group>
                    <Form.Group controlId="formName">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Contraseña" ref="password" value={this.state.Email} onChange= {this.handleInputChange}
                        name="password"/>
                    </Form.Group>
                    <Form.Group controlId="formName">
                        <Form.Label>Validez</Form.Label>
                        <Form.Control type="Date" placeholder="Validez" ref="Validez" value={this.state.Validez} onChange= {this.handleInputChange}
                        name="Validez"/>
                    </Form.Group>
                    <Form.Group controlId="formName">
                        <Form.Label>Sede</Form.Label>
                        <select name="Sede" value={this.state.sede} onChange={this.handleChange}>
                            <option>Seleccionar Una Opcion</option>
                            {this.renderOptions()}
                        </select>
                    </Form.Group>
                    <Form.Group controlId="formName">
                        <Form.Label>Activo</Form.Label>
                        <Form.Control type="text" placeholder="Activo" ref="Activo" value={this.state.name} onChange= {this.handleInputChange}
                        name="Activo"/>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.closeModal}> Cerrar </Button>
                    <Button variant="success" type="submit"> Agregar Usuario</Button>
                </Modal.Footer>
            </Form>
        </Modal>
        </>
    )
    }
}
