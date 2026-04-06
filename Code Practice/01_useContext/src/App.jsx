import './App.css';
import Parent from './components/Parent';
import {useState} from 'react';
import myContext from './context/myContext';

function App() {

  let message = useState(true);

  return (
    <>
      <myContext.Provider value={message}>
        <Parent />
      </myContext.Provider>

    </>
  )
}

export default App
