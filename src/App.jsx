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
import PanelPage from "./pages/PanelPage";
import LoginPanelPage from "./pages/LoginPanelPage";
import CopunPage from "./pages/CopunPage";
import WebAppTapsi from "./pages/WebAppTapsi";
import TapsiMe from "./pages/TapsiMe";

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
        <Route path="/panelpage" element={<PanelPage />} />
        <Route path="/loginpanelpage" element={<LoginPanelPage />} />
        <Route path="/copunpage" element={<CopunPage />} />
        <Route path="/webapptapsi" element={<WebAppTapsi />} />
        <Route path="/tapsime" element={<TapsiMe />} />
      </Routes>
    </>
  );
}

export default App;
