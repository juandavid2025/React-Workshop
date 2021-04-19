import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import routes from "./config/routes";
//import NavBar from "./components/NavBar";
import { AuthProvider } from "./context/AuthContext";
//import firebase from "firebase/app";


function App() {
  return (
    <AuthProvider>
      <Router>
          {routes}
      </Router>
    </AuthProvider>
  );
}

export default App;
