import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StockOverview from './pages/StockOverview';
import StockDetail from './pages/StockDetail';

function App() {
  return (
    <main className="container">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StockOverview />} />
          <Route path='/detail/:symbol' element={<StockDetail />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
