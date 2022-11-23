import './App.css';
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer"
import UserForm from "./components/UserForm/UserForm"
import { BrowserRouter, Route, Routes } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>     
        <Route path="/" element={<Home />} /> 
        <Route path="/user" element={<UserForm />} />
      </Routes>
      <Footer />
      </BrowserRouter>     
      
    </div>
  );
}

export default App;
