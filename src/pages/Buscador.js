import React, { Component } from 'react';
import  { db } from "../config/firebase";
import {InputGroup, FormControl, Button, Spinner} from "react-bootstrap";
import SearchCard from "../components/SearchCard";
import "./styles/Buscador.css";

export default class Buscador extends Component {
    
    constructor(){
        super();
        this.state = {
            usuarios: [],
            loading: false,
            inputValue: ""
        }
    }

    componentDidMount(){
    }

    // showQuery = () =>{
    //     if(this.state.usuarios.length === 0){
    //         console.log("si vacio");
    //         this.setState({showPersons: false});
    //     }
    //     else{
    //         console.log("no vacio");
    //         this.setState({showPersons: true});
    //     }
    // }

    toggleSearch = () =>{
        this.setState({loading: true});
        this.SearchUsersQuery();
        //this.showQuery();
    }

    SearchUsersQuery=()=>{
        //console.log(this.state.inputValue);

        //console.log("going to query");
        db.usuarios.where("name", "==", ""+this.state.inputValue).get().then((querySnapshot) =>{
            let users = [];
                querySnapshot.forEach((doc) => {
                    
                    users.push({...doc.data(), id:doc.id});
                    this.setState({usuarios: users});
                    this.setState({loading: false});
                });
                console.log(this.state.usuarios);
            });
    }
    renderSearch(){
        let usuarios = this.state.usuarios.map((usuario) =>(
            <div key={usuario.id}>
                <SearchCard user={usuario} />
            </div>
        ));
        
        return usuarios;
    }

    inputChange = (event) =>{
       const target = event.target;
       const value = target.type === 'checkbox' ? target.checked : target.value;
       
        this.setState({inputValue: value});

    }
    
    render() {
        const {loading} = this.state;

        return (
            <div>
               <h1>welcome to buscador</h1> 
                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Prepend>
                        <Button variant="info" onClick={this.toggleSearch} disabled={loading}>
                            { loading && <Spinner className="search-spinner" animation="border" variant="primary" />}
                            { loading && <span></span>}
                            { !loading && <span>Buscar</span>}
                        </Button>
                    </InputGroup.Prepend>
                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={this.inputChange}/>
                </InputGroup>
                <div>
                    {this.renderSearch()}
                </div>
            </div>
        )
    }
}
