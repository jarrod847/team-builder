import React, {useState} from 'react';
import './App.css';
import data from "./data";
import TeamMemeber from './Components/Form';
import People from './Components/TeamMember';

function App() {
  const [team, setTeam] = useState(data)

  const addNewMember = Member => {
    setTeam([...team, Member])
  }


  return (
    <div className="App">
      <h1>Team Builder</h1>
      <TeamMemeber addNewMember={addNewMember}/>
      <People person={team}/>
    </div>
  );
}

export default App;
