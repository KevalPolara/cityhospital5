import { Routes, Route } from "react-router-dom";
import UserRoute from "./routes/UserRoute";
import Adminroute from "./routes/Adminroute";
import { Provider } from "react-redux";
import { configureStore } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { ThmeProvider } from "./context/theme.context";

function App() {
  let { store, persistor } = configureStore();
  return (
    <div className="App">
      <Provider store={store}>
        <ThmeProvider>
          <PersistGate loading={null} persistor={persistor}>
            <Routes>
              <Route path="/*" element={<UserRoute />} />
              <Route path="/admin/*" element={<Adminroute />} />
            </Routes>
          </PersistGate>
        </ThmeProvider>
      </Provider>
    </div>
  );
}

export default App;
