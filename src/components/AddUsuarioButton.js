import {Button, Modal,Form} from "react-bootstrap"
import React, {useState} from "react"
import {db} from "../config/firebase"


export default function AddUsuarioButton() {

    const [open, setOpen] = useState(false)
    const [Nombre, setNombre] = useState("")
    const [Apellido, setApellido] = useState("")
    const [Email, setEmail] = useState("")
    const [Validez, setValidez] = useState("")
    const [Sede, setSede] = useState("")
    const [Activo, setActivo] = useState("")


    function openModal(){
        setOpen(true)
    }

    function closeModal(){
        setOpen(false)
    }

    function listar(){
        console.log( Nombre, Apellido, Email, Validez,Sede,
            Activo)
    }

    function handleSubmit(e){
        e.preventDefault();
        db.usuarios.add({name:Nombre, lastname:Apellido, email:Email, vality:Validez,campus:Sede,
            active:Activo})
        setNombre("")
        setApellido("")
        setEmail("")
        setValidez("")
        setSede("")
        setActivo("")
        closeModal()

    }
    return (
        <>
        <Button onClick={openModal} variant="outline-primary" size="sm">
            Agregar Usuario
        </Button>
        <Modal show={open} onHide={closeModal}>
            <Form onSubmit= {handleSubmit}>
                <Modal.Body>
                <Form.Group controlId="formName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Nombre" value={Nombre} onChange={e=> setNombre(e.target.value)}
                        name="Nombre"/>
                    </Form.Group>
                    <Form.Group controlId="formName">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control type="text" placeholder="Apellido" value={Apellido} onChange={e=> setApellido(e.target.value)}
                        name="Apellido"/>
                    </Form.Group>
                    <Form.Group controlId="formName">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" value={Email} onChange={e=> setEmail(e.target.value)}
                        name="Email"/>
                    </Form.Group>
                    <Form.Group controlId="formName">
                        <Form.Label>Validez</Form.Label>
                        <Form.Control type="text" placeholder="Validez" value={Validez} onChange={e=> setValidez(e.target.value)}
                        name="Validez"/>
                    </Form.Group>
                    <Form.Group controlId="formName">
                        <Form.Label>Sede</Form.Label>
                        <Form.Control type="text" placeholder="Sede" value={Sede} onChange={e=> setSede(e.target.value)}
                        name="Sede"/>
                    </Form.Group>
                    <Form.Group controlId="formName">
                        <Form.Label>Activo</Form.Label>
                        <Form.Control type="text" placeholder="Activa" value={Activo} onChange={e=> setActivo(e.target.value)}
                        name="Activa"/>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}> Cerrar </Button>
                    <Button variant="success" type="submit" onClick ={listar}> Agregar Sede</Button>
                </Modal.Footer>
            </Form>
        </Modal>
        </>
    )
}
