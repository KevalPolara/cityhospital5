import { Routes,Route } from "react-router-dom";
import UserRoute from "./routes/UserRoute";
import Adminroute from "./routes/Adminroute";

function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/*" element={<UserRoute/>}></Route>
        <Route path="/admin/*" element={<Adminroute/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
