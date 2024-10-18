import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Books from "./Components/Books";
import ContactUs from "./Components/ContactUs";
import Signup from "./Components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./Context/AuthProvider";

function App() {
  const[authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/books" element={authUser ?<Books /> : <Navigate to="/signup"/>}></Route>
        <Route path="/contactus" element={<ContactUs />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
      <Toaster/>
    </>
  );
}

export default App;
