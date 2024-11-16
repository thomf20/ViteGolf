import { useEffect, useState } from 'react'
import GolfForm from './GolfForm';
import GolfList from './GolfList';

function App() {
  const [rounds, setRounds] = useState([]);

  useEffect(() => {
    console.log("Antal rundor:", rounds.length);
  }, [rounds]);

  return (
    <div>
      <h1>Golfappen</h1>
      <GolfForm addRound={(newRound) => setRounds(prevRounds => [...prevRounds, newRound])} />
      <GolfList rounds={rounds} setRounds={setRounds} />
    </div>
  );
};

export default App
