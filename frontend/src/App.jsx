import { Routes, Route } from 'react-router-dom';
import Portfolio from './pages/portfolio';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Portfolio />} />
        <Route path='#contact' element={<Portfolio />} />
      </Routes>
    </div>
  );
};

export default App;
