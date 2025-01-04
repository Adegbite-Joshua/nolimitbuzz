import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ViewDetails from "./pages/ViewDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/user/:id" element={<ViewDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
