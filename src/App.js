import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Board from "./components/Board";
import Reset from "./components/Reset"

function App() {
  return (
    <div className="App">
      <Header/>
      <Board/>
      <Reset/>


    </div>
  );
}

export default App;
