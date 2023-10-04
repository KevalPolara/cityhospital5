import { Routes,Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import UserRoute from "./routes/UserRoute";
import Adminroute from "./routes/Adminroute";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/*" element={<UserRoute/>}></Route>
        <Route path="/admin/*" element={<Adminroute/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
