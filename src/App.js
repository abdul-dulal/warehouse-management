import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Inventory from "./Components/Inventory";
import ManageItem from "./Components/ManageItem";
import AddItem from "./Components/pages/AddItem";
import Blogs from "./Components/pages/Blogs";
import Home from "./Components/pages/Home";
import Login from "./Components/pages/Login";
import Myitem from "./Components/pages/Myitem";
import NotFound from "./Components/pages/NotFound";
import Signup from "./Components/pages/Signup";
import RequirAuth from "./Components/RequirAuth";

function App() {
  return (
    // <div className="bg-[#111827]">
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/manageitem" element={<ManageItem />} />
        <Route
          path="/inventory/:id"
          element={
            <RequirAuth>
              <Inventory />
            </RequirAuth>
          }
        />
        <Route path="/additem" element={<AddItem />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/myitem" element={<Myitem />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
