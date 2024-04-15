import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "./context/Provider";
import { Home } from "./modules/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider>
          <Routes>
            <Route path="/home" element={<Home/>} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
