import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Intro from './components/Intro'
import BlogList from './components/BlogList';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/' element={<BlogList />} />
      </Routes>
      <Routes>
        <Route path='/' element={<BlogList />} />
      </Routes>
    </div>
  );
}

export default App;
