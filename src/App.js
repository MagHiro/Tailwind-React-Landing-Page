import './App.css';
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './assets/Loading.css';
const Navbar = React.lazy(() => import('./component/Navbar'));
const Home = React.lazy(() => import('./component/Home'));
const About = React.lazy(() => import('./component/About'));



function App() {
  return (
    <>
    <React.Suspense fallback={ 
        <div className="loader-container">
      	  <div className="spinner"></div>
        </div>}>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </React.Suspense>
    </>
  );
}

export default App;
