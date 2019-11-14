import React, {useState} from 'react';
import './App.css';
import data from "./data";
import TeamMemeber from './Components/Form';
import People from './Components/TeamMember';

function App() {
  const [members, setMembers] = useState([
    { id: 1,
      name:"Jarrod",
    email:"Jarrodskahill@gmail.com",
    role: "Front End"}
  ])


 const addNewMember = memeber => {
   const newMember = {
     id: Date.now(),
     name: memeber.name,
     email: memeber.email,
     role: memeber.role
   }
   setMembers([...members, newMember])
 }

  return (
    <div className="App">
      <h1>Team Builder</h1>
      <TeamMemeber addNewMember={addNewMember}/>
      <People person={members}/>
    </div>
  );
}

export default App;
