import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Docs from "./pages/Docs";
import ProtectedLayout from "./components/ProtectedLayout";
import { useImageLoader } from "./components/AppHooks";
import ScrollToTop from "./components/ScrollToTop";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Security from "./pages/Security";

function App() {
  useImageLoader();
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<ProtectedLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/docs" element={<Docs />} />
            <Route index={true} element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/security" element={<Security />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
