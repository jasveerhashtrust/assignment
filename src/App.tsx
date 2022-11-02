import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import First from './pages/First';
import Secound from './pages/Secound';
import Third from './pages/Third';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<First />} />
          <Route path='/secound' element={<Secound />} />
          <Route path='/third' element={<Third />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
