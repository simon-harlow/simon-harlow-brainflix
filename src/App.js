import './App.scss';
import Header from './components/Header/Header'
import MainVideo from './components/MainVideo/MainVideo'
import Comments from './components/Comments/Comments'
import NextVideos from './components/NextVideos/NextVideos'

function App() {
  return (
    <div className="App">
      <Header />
      <MainVideo />
      <Comments />
      <NextVideos />
    </div>
  );
}

export default App;
