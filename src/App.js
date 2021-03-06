import './App.css';
import Header from './components/Header';
import Meme from './components/Meme';

function App() {
  return (
    <div className="App">
      <Header 
        src="./images/troll-face.png"
        alt="troll face"
        headerTitle="Meme Generator"
        course="React Course - Project 3"
      />
      <Meme />
    </div>
  );
}

export default App;
