import { useState } from "react";

const GolfRound = ({ round, index, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newCourse, setNewCourse] = useState(round.course);
  const [newScore, setNewScore] = useState(round.score);
  const [newStrokes, setNewStrokes] = useState(round.strokes); 

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (newCourse.trim() && newScore.trim() && newStrokes.trim()) {
      onEdit(index, newCourse, newScore, newStrokes); 
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setNewCourse(round.course);
    setNewScore(round.score);
    setNewStrokes(round.strokes);  
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newCourse}
            onChange={(e) => setNewCourse(e.target.value)}
            placeholder="Edit course"
          />
          <input
            type="number"
            value={newScore}
            onChange={(e) => setNewScore(e.target.value)}
            placeholder="Edit score"
          />
          <input
            type="number"
            value={newStrokes}
            onChange={(e) => setNewStrokes(e.target.value)}
            placeholder="Edit strokes"
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          <p>Course: {round.course}</p>
          <p>Score: {round.score}</p>
          <p>Strokes: {round.strokes}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => onDelete(round)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default GolfRound;
