// eslint-disable-next-line react/prop-types
const GolfRound = ({ course, score }) => {
    return (
      <div>
        <h3>Bana: {course}</h3>
        <p>Score: {score}</p>
      </div>
    );
  };
  
  export default GolfRound;