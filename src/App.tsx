import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { Blank } from "./pages/Blank";
import Dashboard from "./pages/Dashboard";
import "./scss/app.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="*" element={<Blank />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
