import "./App.css";
import CustomersPage from "./pages/CustomersPage";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CourierPage from "./pages/CourierPage";
import BizinesPage from "./pages/BizinesPage";
import JobsPage from "./pages/JobsPage";
import WeblogPage from "./pages/WeblogPage";
import DownloadPage from "./pages/DownloadPage";
import GhoreKeshiPage from "./pages/GhoreKeshiPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/customers" element={<CustomersPage />} />
        <Route path="/courier" element={<CourierPage />} />
        <Route path="/bizines" element={<BizinesPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/weblog" element={<WeblogPage />} />
        <Route path="/download" element={<DownloadPage />} />
        <Route path="/ghorekeshi" element={<GhoreKeshiPage />} />
      </Routes>
    </>
  );
}

export default App;
