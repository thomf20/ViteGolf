import { useState } from "react";

// eslint-disable-next-line react/prop-types
const GolfForm = ({ addRound }) => {
    const [course, setCourse] = useState("");
    const [score, setScore] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (course.trim() && score.trim()) {
            addRound({ course, score})
            setCourse("");
            setScore("");
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
            onChange={(e) => setScore(e.target.value)}
            />
            <button type="submit">Add Golf Round</button>
        </form>
    );
};

export default GolfForm