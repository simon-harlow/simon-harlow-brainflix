import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom'

import './App.scss';
import Header from './components/Header/Header'
import Home from "./pages/Home/Home"
import Upload from "./pages/Upload/Upload"
import NotFound from './pages/NotFound/NotFound';
import React from 'react';


function App() {

  function ValidVideoId() {
    const { videoId } = useParams();
    const validVideoId = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
    
    // if the video ID is not valid, render the NotFound component
    if (!validVideoId.test(videoId)) {
      return <NotFound />;
    }
    return <Home />;
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos/:videoId" element={<ValidVideoId />} />
        <Route path="/videos/*" element={<NotFound />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
