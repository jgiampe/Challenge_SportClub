import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterForm from "./components/RegisterForm/RegisterForm";

import axios from "axios";
import NavBar from "./components/NavBar/NavBar";
axios.defaults.baseURL = "http://localhost:3001";

function App() {
  return (
    <div style={{height:'100vh', 'background-color': '#282828'}}>
      <NavBar/>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<RegisterForm />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
