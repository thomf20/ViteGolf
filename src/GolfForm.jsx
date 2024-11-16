import { useState } from "react";

// eslint-disable-next-line react/prop-types
const GolfForm = ({ addRound }) => {
    const [course, setCourse] = useState("");
    const [score, setScore] = useState("");
    const [strokes, setStrokes] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (course.trim() && score.trim() && strokes.trim()) {
            addRound({ course, score, strokes})
            setCourse("");
            setScore("");
            setStrokes("");
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
            type = "text"
            placeholder = "Course"
            value = {course}
            onChange={(e) => setCourse(e.target.value)}
            />
            <input
            type = "number"
            placeholder = "Score"
            value = {score}
            min= '50'
            max='200'
            onChange={(e) => setScore(e.target.value)}
            />
            <input
            type = "number"
            placeholder = "Strokes"
            value = {strokes}
            min= '50'
            max='200'
            onChange={(e) => setStrokes(e.target.value)}
            />
            <button type="submit">Add Golf Round</button>
        </form>
    );
};

export default GolfForm