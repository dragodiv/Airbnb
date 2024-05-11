import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import SendEmail from "./sendEmail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/api/mail" element={<SendEmail />} />
    </Routes>
  );
}

export default App;
