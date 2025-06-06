import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Create from "./components/Create";
import Login from "./components/Login";
import Register from "./components/Register";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="bg-white">
      <Navbar/>

      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/create" element={ <Create/>} />
        <Route path="/login" element={ <Login/>} />
        <Route path="/signup" element={ <Register/>} />
        <Route path="/about" element={ <About/>} />
      </Routes>
    </div>
  )
}

export default App;
