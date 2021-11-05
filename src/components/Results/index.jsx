import React from "react";

const Results = ({ score, computerScore }) => {
  return (
    <div className="result-container">
      <div className="score">
        <h3>Your score</h3>
        {score}
      </div>
      <div className="score">
        <h3>Computer score</h3>
        {computerScore}
      </div>
    </div>
  );
};

export default Results;
