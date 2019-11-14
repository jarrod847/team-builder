import React, {useState} from 'react';
import './App.css';
import data from "./data";

function App() {
  const [team, setTeam] = useState(data)

  const addNewMember = Member => {
    setTeam([...team, Member])
  }
  
  return (
    <div className="App">
      <h1>Team Builder</h1>
    </div>
  );
}

export default App;
