import {Button, Modal,Form} from "react-bootstrap"
import React, {useState} from "react"
import {db} from "../config/firebase"


export default function AddUsuarioButton() {

    const [sedes,setSedes]= useState([])
    const [open, setOpen] = useState(false)
    const [id, setId] = useState("")
    const [Nombre, setNombre] = useState("")
    const [Apellido, setApellido] = useState("")
    const [Email, setEmail] = useState("")
    const [Validez, setValidez] = useState("")
    const [Sede, setSede] = useState("")
    const [Activo, setActivo] = useState("")

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
        console.log(id)
    }

    
    function getSedes(){
        let sedes = [];

        db.sedes
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            sedes.push(doc.data());
          });
        });
        setSedes({sedes});
        console.log("sedes")
    }

    function renderOptions(){
        let options=[];
        for(let i=0;i<sedes.length;i++){
            options.push(<option value={sedes[i].id}>{sedes[i].name}</option>)
        }
        console.log("vista")
        return options;
    }

    function openModal(){
        getSedes()
        generateUUID()
        setOpen(true)
    }

    function closeModal(){
        setOpen(false)
    }


    function handleSubmit(e){
        e.preventDefault();
        db.sedes.doc(Sede).collection("usuarios").doc(id).set({id:id,name:Nombre, lastname:Apellido, email:Email, vality:Validez,campus:Sede,
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
        <Button onClick={openModal} disabled={open} variant="outline-primary" size="sm">
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
                        <Form.Control as="select">
                            {renderOptions()}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formName">
                        <Form.Label>Activo</Form.Label>
                        <Form.Control type="text" placeholder="Activa" value={Activo} onChange={e=> setActivo(e.target.value)}
                        name="Activa"/>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}> Cerrar </Button>
                    <Button variant="success" type="submit"> Agregar Sede</Button>
                </Modal.Footer>
            </Form>
        </Modal>
        </>
    )
}
