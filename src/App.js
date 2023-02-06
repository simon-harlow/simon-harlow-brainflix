import './App.scss';
import Header from './components/Header/Header'
import MainVideo from './components/MainVideo/MainVideo'
import BelowVideoContent from './components/BelowVideoContent/BelowVideoContent'

function App() {
  return (
    <div className="App">
      <Header />
      <MainVideo />
      <BelowVideoContent />
    </div>
  );
}

export default App;
