import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  let army = "김민규 내년에 군대 가라 ";

  function click(){
    setCount((count)=>count + 1);
  }

  return (
    <div className="App">
      <h1>React study</h1>
      <div>{count}</div>
      <div>
        <button onClick={click}>김민규</button>
      </div>
      <p></p>
      {army}{army}{army}{army}
      <p></p>
      {army}{army}{army}{army}
      <p></p>
      {army}{army}{army}{army}
    </div>
  );
}

export default App;
