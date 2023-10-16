import { Routes,Route } from "react-router-dom";
import UserRoute from "./routes/UserRoute";
import Adminroute from "./routes/Adminroute";
import { Provider } from "react-redux";
import { configureStore } from "./redux/store";

function App() {
  let store=configureStore();
  return (
    <div className="App">
     <Provider store={store}>
      <Routes>
        <Route path="/*" element={<UserRoute/>}></Route>
        <Route path="/admin/*" element={<Adminroute/>}></Route>
      </Routes>
      </Provider>
      
    </div>
  );
}

export default App;
