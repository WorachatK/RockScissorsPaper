import { useState } from 'react';
import './App.css'
import Land from './components/Land/Land';
import Score from './components/Score/Score'

function App() {
  const [yourscore,setYourScore] = useState(0)
  const [botscore,setBotScore] = useState(0)

  return (
    <div className="App">
      <Score yourscore={yourscore} botscore={botscore}/>
      <Land setYourScore={setYourScore} yourscore={yourscore} botscore={botscore} setBotScore={setBotScore}/>
    </div>
  );
}

export default App;
