import { Route, Routes, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";
import axios from "axios";
import AllPlanetsPage from "./pages/AllPlanets";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<AllPlanetsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
