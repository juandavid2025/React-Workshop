import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import routes from "./config/routes";
//import NavBar from "./components/NavBar";
import { AuthProvider } from "./context/AuthContext";
//import firebase from "firebase/app";
import {Container} from "react-bootstrap";
import {Route} from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="container">{routes}</div>
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
      </Router>
    </AuthProvider>
  );
}

export default App;
