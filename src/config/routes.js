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
import Sede from "../pages/Sede";

export default (
    <Switch>
        <PrivateRoute exact path="/home">
            <Container>
            <NavBar />
            <Home />
            </Container>
        </PrivateRoute>
        <PrivateRoute path="/usuarios">
            <Container>
            <NavBar />
            <Usuarios />
            </Container>
        </PrivateRoute>
        <PrivateRoute path="/buscador">
            <Container>
            <NavBar />
            <Buscador />
            </Container>
        </PrivateRoute>
        <PrivateRoute path="/sedes">
            <Container>
            <NavBar />
            <Sedes />
            </Container>
        </PrivateRoute>
        <PrivateRoute exact path="/sede/:id">
            <Container>
                <NavBar/>
                <Sede/>
            </Container>
        </PrivateRoute>
        <Route exact path="/signup">
            <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh"}}>
                <div className="w-100" style={{maxWidth:"400px"}}>
                    <Signup />
                </div>
            </Container>
        </Route>
        <Route exact path="/">
            <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh"}}>
                <div className="w-100" style={{maxWidth:"400px"}}>
                    <Login />
                </div>
            </Container>
        </Route>
        <Route path="/*">
            <Container>
            <NavBar />
            <NotFound />
            </Container>
        </Route>
    </Switch>
)