import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav"
import {AuthContextProvider}  from "./context/AuthContext"
import Account from "./pages/Account";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>

      <AuthContextProvider>
          <Nav />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/account" element={<Account/>}/>
          </Routes>
      </AuthContextProvider>
      
    </>
  );  
}

export default App;
