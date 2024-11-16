import { useState } from "react";

const GolfRound = ({ round, index, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newCourse, setNewCourse] = useState(round.course);
  const [newScore, setNewScore] = useState(round.score);
  const [newStrokes, setNewStrokes] = useState(round.strokes);  // För antal slag

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (newCourse.trim() && newScore.trim() && newStrokes.trim()) {
      onEdit(index, newCourse, newScore, newStrokes);  // Skicka uppdaterade värden
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setNewCourse(round.course);
    setNewScore(round.score);
    setNewStrokes(round.strokes);  // Återställ till originalvärde
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newCourse}
            onChange={(e) => setNewCourse(e.target.value)}
            placeholder="Enter course name"
          />
          <input
            type="number"
            value={newScore}
            onChange={(e) => setNewScore(e.target.value)}
            placeholder="Enter score"
          />
          <input
            type="number"
            value={newStrokes}
            onChange={(e) => setNewStrokes(e.target.value)}
            placeholder="Enter strokes"
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
