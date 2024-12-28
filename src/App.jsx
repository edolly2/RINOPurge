import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import MainComponent from "./components/MainComponent";
import HomePage from "./pages/HomePage";
import PurposePage from "./pages/PurposePage";
import NewsPage from "./pages/NewsPage";
import ListPage from "./pages/ListPage";
import ContactPage from "./pages/ContactPage";
import DonatePage from "./pages/DonatePage";

function App() {
  return (
    <div className="app-layout">
      <BrowserRouter>
        <HeaderComponent />
        <MainComponent>
          <Routes>
            <Route path="/" index element={<HomePage />} />
            <Route path="/about" element={<PurposePage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/list" element={<ListPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/donate" element={<DonatePage />} />
          </Routes>
        </MainComponent>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
