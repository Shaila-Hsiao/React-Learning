
import './App.css';

// router
// import { HashRouter } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/index";
import SecondPage from "./pages/SecondPage";


function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/SecondPage" element={<SecondPage />} />
          
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
