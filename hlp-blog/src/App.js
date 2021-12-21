import './App.css';
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Header from './components/Header'
import Intro from './components/Intro'
import BlogList from './components/BlogList';
import Blog from './components/Blog';


function App() {
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<BlogList title={title} setTitle={setTitle} content={content} setContent={setContent}/>} />
          <Route path='/content' element={<Blog title={title} setTitle={setTitle} content={content} setContent={setContent}/>} />
      </Routes>
      {/* <Route path='/' element={<Intro />} /> */}
    </div>
  );
}

export default App;


