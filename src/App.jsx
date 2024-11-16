import { useEffect, useState } from 'react'
import GolfForm from './GolfForm';
import GolfList from './GolfList';

function App() {
  const [rounds, setRounds] = useState([]);

  const addRound = (newRound => {
    setRounds([...rounds, newRound]);
  })

  useEffect(() => {
    console.log("Antal rundor:", rounds.length);
  }, [rounds]);

  return (
    <div>
      <h1>Min Golfapp</h1>
      <GolfForm addRound={addRound} />
      <GolfList rounds={rounds} />
    </div>
  );
};

export default App
