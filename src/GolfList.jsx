import GolfRound from "./GolfRound";
import ConfirmDelete from "./ConfirmDeleteModal";
import { useState } from "react";

const GolfList = ({ rounds, setRounds }) => {
    const [isConfirming, setIsConfirming] = useState(false);
    const [roundToDelete, setRoundToDelete] = useState(null);
  
    const handleDelete = (round) => {
      setRoundToDelete(round);
      setIsConfirming(true); 
    };
  
    const confirmDelete = () => {
      setRounds(rounds.filter((round) => round !== roundToDelete));
      setIsConfirming(false); 
    };
  
    const cancelDelete = () => {
      setIsConfirming(false); 
    };
  
    const handleEdit = (index, newCourse, newScore, newStrokes) => {
      const updatedRounds = [...rounds];
      updatedRounds[index] = { course: newCourse, score: newScore, strokes: newStrokes };
      setRounds(updatedRounds);
    };
  
    return (
      <div>
        {rounds.map((round, index) => (
          <GolfRound
            key={index}
            round={round}
            index={index}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
              {isConfirming && (
        <ConfirmDelete onConfirm={confirmDelete} onCancel={cancelDelete} />
      )}
      </div>
    );
  };
  
  export default GolfList;
  