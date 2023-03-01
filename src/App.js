import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.scss';
import Header from './components/Header/Header'
import Home from "./pages/Home/Home"
import Upload from "./pages/Upload/Upload"
import NotFound from './pages/NotFound/NotFound';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/:videoId" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
