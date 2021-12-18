import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Intro from './components/Intro'


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Intro />} />
      </Routes>
    </div>
  );
}

export default App;
