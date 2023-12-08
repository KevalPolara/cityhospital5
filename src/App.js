import { Routes, Route } from "react-router-dom";
import UserRoute from "./routes/UserRoute";
import Adminroute from "./routes/Adminroute";
import { Provider } from "react-redux";
import { configureStore, persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { ThmeProvider } from "./context/theme.context";
import { LanguageProvider } from "./context/language.context";
import { SnackbarProvider } from "notistack";
import Alert from "./components/Alert/Alert";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <SnackbarProvider>
          <ThmeProvider>
            <LanguageProvider>
              <PersistGate loading={null} persistor={persistor}>
                <Alert/>
                <Routes>
                  <Route path="/*" element={<UserRoute />} />
                  <Route path="/admin/*" element={<Adminroute />} />
                </Routes>
              </PersistGate>
            </LanguageProvider>
          </ThmeProvider>
        </SnackbarProvider>
      </Provider>
    </div>
  );
}

export default App;
