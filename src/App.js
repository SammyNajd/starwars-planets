import { Fragment } from "react";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import AllPlanetsPage from "./pages/AllPlanets";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<AllPlanetsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
