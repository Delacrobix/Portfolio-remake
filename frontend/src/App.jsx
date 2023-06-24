import Portfolio from './pages/portfolio';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
