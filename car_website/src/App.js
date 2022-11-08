import CurrentCars from "./components/CurrentCars";
import CarDetails from "./components/CarDetails";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cars" element={<CurrentCars />} />
          <Route path="/:id" element={<CarDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
