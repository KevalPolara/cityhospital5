import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./container/About/About";
import Appointement from "./container/Appointement/Appointement";
import Auth from "./container/Auth/Auth";
import Contact from "./container/Contact/Contact";
import Department from "./container/Department/Department";
import Doctor from "./container/Doctor/Doctor";
import Home from "./container/Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/department" element={<Department/>}/>
        <Route path="/doctor" element={<Doctor/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/appointement" element={<Appointement/>}/>
        <Route path="/auth" element={<Auth/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
