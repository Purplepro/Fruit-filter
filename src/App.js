import {useState} from 'react';
import './App.css';
import Fruit from './components/Fruit'

function App() {
  const fruits = ['apple🍎', 'avacado🥑', 'banana🍌', 'watermelon🍉', 'grapes🍇'];

  return (
    <div className="App">
      <h1>Fruit Filter</h1>
      <Fruit fruits={fruits}/>
    </div>
  );
}

export default App;
