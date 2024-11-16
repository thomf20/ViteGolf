import GolfRound from "./GolfRound";

// eslint-disable-next-line react/prop-types
const GolfList = ({ rounds }) => {
    return (
        <div> 
        {rounds.map((round, index) => (
          <GolfRound key={index} course={round.course} score={round.score} />
        ))}
      </div>
    )
}

export default GolfList;