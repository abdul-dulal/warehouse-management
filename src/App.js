import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Inventory from "./Components/Inventory";
import ManageInventory from "./Components/ManageInventory";
import Home from "./Components/pages/Home";
import Login from "./Components/pages/Login";
import Signup from "./Components/pages/Signup";

function App() {
  return (
    // <div className="bg-[#111827]">
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inventory" element={<ManageInventory />} />
        <Route path="/inventory/:id" element={<Inventory />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
