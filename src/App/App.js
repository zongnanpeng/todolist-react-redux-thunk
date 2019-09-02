import React from 'react';
import './App.css';
import Todolist from '../Todolist/Todolist';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        TODOLIST( react + redux-thunk)
      </header>
      <main>
        <Todolist />
      </main>
    </div>
  );
}

export default App;
