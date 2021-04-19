import {Button, Modal,Form} from "react-bootstrap"
import React, {useState} from "react"
import {db} from "../config/firebase"

export default function AddSedeButton() {

    const [id, setId] = useState("")
    const [open,setOpen] = useState(false)
    const [nombre,setName]=useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [ciudad,setCity]=useState("")
    const [direccion,setDir]=useState("")
    const [zip,setZip]=useState("")
    const [activa, setActive]=useState()

    function generateUUID() { // Public Domain/MIT
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
        setId(uuid)
        console.log(uuid)      
    }

    function openModal(){
        setOpen(true)
        generateUUID();
    }

    function closeModal(){
        setOpen(false)
    }

    function listar(){
        console.log( nombre, telefono, email, ciudad,direccion,
            zip, activa)
    }

    function saveSede(){
        db.sedes.doc(id).set({id:id,name:nombre, phone:telefono, email:email, ciudad:ciudad,direccion:direccion,
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

    function handleSubmit(e){
        e.preventDefault();
        saveSede();
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
