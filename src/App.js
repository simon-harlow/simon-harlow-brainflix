import './App.scss';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import BelowVideoContent from './components/BelowVideoContent/BelowVideoContent'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <BelowVideoContent />
    </div>
  );
}

export default App;
