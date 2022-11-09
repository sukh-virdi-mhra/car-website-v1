import CurrentCars from "./components/CurrentCars";
// import CarDetails from "./components/CarDetails";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import UnderMaintenance from "./components/UnderMaintenance";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cars" element={<CurrentCars />} />
          {/* <Route path="/:name" element={<CarDetails />} /> */}
          <Route path="/parts" element={<UnderMaintenance />} />
          <Route path="/servicing" element={<UnderMaintenance />} />
          <Route path="/contact" element={<UnderMaintenance />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
