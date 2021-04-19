import {Button, Modal,Form} from "react-bootstrap"
import React, {useState} from "react"
import {db} from "../config/firebase"

export default function AddSedeButton() {

    const [open,setOpen] = useState(false)
    const [nombre,setName]=useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [ciudad,setCity]=useState("")
    const [direccion,setDir]=useState("")
    const [zip,setZip]=useState("")
    const [activa, setActive]=useState()

    function openModal(){
        setOpen(true)
    }

    function closeModal(){
        setOpen(false)
    }

    function listar(){
        console.log( nombre, telefono, email, ciudad,direccion,
            zip, activa)
    }

    function handleSubmit(e){
        e.preventDefault();
        db.sedes.add({name:nombre, phone:telefono, email:email, ciudad:ciudad,direccion:direccion,
            zip:zip, active:activa})
        setName("")
        setTelefono("")
        setEmail("")
        setCity("")
        setDir("")
        setZip("")
        setActive("")
        closeModal()

    }
    return (
        <>
        <Button onClick={openModal} variant="outline-primary" size="sm">
            Agregar Sede
        </Button>
        <Modal show={open} onHide={closeModal}>
            <Form onSubmit= {handleSubmit}>
                <Modal.Body>
                <Form.Group controlId="formName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Nombre" value={nombre} onChange={e=> setName(e.target.value)}
                        name="Nombre"/>
                    </Form.Group>
                    <Form.Group controlId="formName">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control type="text" placeholder="Telefono" value={telefono} onChange={e=> setTelefono(e.target.value)}
                        name="Telefono"/>
                    </Form.Group>
                    <Form.Group controlId="formName">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" value={email} onChange={e=> setEmail(e.target.value)}
                        name="Email"/>
                    </Form.Group>
                    <Form.Group controlId="formName">
                        <Form.Label>Ciudad</Form.Label>
                        <Form.Control type="text" placeholder="Ciudad" value={ciudad} onChange={e=> setCity(e.target.value)}
                        name="Ciudad"/>
                    </Form.Group>
                    <Form.Group controlId="formName">
                        <Form.Label>Direccion</Form.Label>
                        <Form.Control type="text" placeholder="Direccion" value={direccion} onChange={e=> setDir(e.target.value)}
                        name="Direccion"/>
                    </Form.Group>
                    <Form.Group controlId="formName">
                        <Form.Label>Codigo Zip</Form.Label>
                        <Form.Control type="text" placeholder="Codigo Zip" value={zip} onChange={e=> setZip(e.target.value)}
                        name="Zip"/>
                    </Form.Group>
                    <Form.Group controlId="formName">
                        <Form.Label>Activa</Form.Label>
                        <Form.Control type="text" placeholder="Activa" value={activa} onChange={e=> setActive(e.target.value)}
                        name="Bool"/>
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
