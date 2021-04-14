import {Route, Switch} from "react-router-dom";

import Home from "../pages/Home";
import Usuarios from "../pages/Usuarios";
import Sedes from "../pages/Sedes";
import Buscador from "../pages/Buscador";
import NotFound from "../pages/NotFound";
import Signup from "../components/Signup";
import { Container } from "react-bootstrap";
import NavBar from "../components/NavBar";
import Login from "../components/Login";
import PrivateRoute from "../components/PrivateRoute";

export default (
    <Switch>
        <PrivateRoute exact path="/home">
            <NavBar />
            <Home />
        </PrivateRoute>
        <PrivateRoute path="/usuarios">
            <NavBar />
            <Usuarios />
        </PrivateRoute>
        <PrivateRoute path="/buscador">
            <NavBar />
            <Buscador />
        </PrivateRoute>
        <PrivateRoute path="/sedes">
            <NavBar />
            <Sedes />
        </PrivateRoute>
        <Route path="*">
            <NavBar />
            <NotFound />
        </Route>
    </Switch>
)