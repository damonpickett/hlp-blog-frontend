import './App.css';
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import Header from './components/Header'
import BlogList from './components/BlogList';
import Contact from './components/Contact';


function App() {
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState([]);
  const [date, setDate] = useState([]);

  return (
    <div>
      {/* header is passed states so that states can be cleared upon clicking on the header link */}
      <Header setTitle={setTitle} setContent={setContent}/>
      <Routes>
        <Route path='/' element={<BlogList title={title} setTitle={setTitle} content={content} setContent={setContent} date={date} setDate={setDate}/>} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;


