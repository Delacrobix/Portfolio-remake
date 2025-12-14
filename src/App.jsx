import { Routes, Route } from "react-router-dom";

import Portfolio from "./pages/portfolio";

export default function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Portfolio />} />
        {/* TODO: Check what do the path below */}
        <Route path='#contact' element={<Portfolio />} />
      </Routes>
    </div>
  );
}
