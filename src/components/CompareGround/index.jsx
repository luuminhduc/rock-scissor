import React from "react";
import Rock from "../../assets/images/icon-rock.svg";
import Scissor from "../../assets/images/icon-scissors.svg";
import Paper from "../../assets/images/icon-paper.svg";
import Spock from "../../assets/images/icon-spock.svg";
import Lizard from "../../assets/images/icon-lizard.svg";

const CompareGround = ({
  myChoice,
  computerChoice,
  compareText,
  newRound,
  winner,
  reset,
}) => {
  const renderIcon = (choice) => {
    switch (choice) {
      case "rock":
        return (
          <div className="icon-container rock">
            <div className="icon">
              <img src={Rock} alt="" />
            </div>
          </div>
        );
      case "scissor":
        return (
          <div className="icon-container scissor">
            <div className="icon">
              <img src={Scissor} alt="" />
            </div>
          </div>
        );
      case "spock":
        return (
          <div className="icon-container spock">
            <div className="icon">
              <img src={Spock} alt="" />
            </div>
          </div>
        );
      case "lizard":
        return (
          <div className="icon-container lizard">
            <div className="icon">
              <img src={Lizard} alt="" />
            </div>
          </div>
        );
      default:
        return (
          <div className="icon-container paper">
            <div className="icon">
              <img src={Paper} alt="" />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="compare-ground">
      <div className="show-case">
        <div className={`block ${winner === "i" && "win"}`}>
          {myChoice && renderIcon(myChoice)}
          <p>You pick {myChoice}</p>
        </div>

        <div className={`block ${winner === "computer" && "win"}`}>
          {computerChoice ? (
            renderIcon(computerChoice)
          ) : (
            <div className="circle"></div>
          )}
          <p>Computer pick {computerChoice}</p>
        </div>
      </div>

      {computerChoice && compareText && (
        <div className="compare-text">
          <p>{compareText}</p>
          <div className="flex">
            <button onClick={() => newRound()}>New round</button>
            <button onClick={() => reset()} className="reset">
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompareGround;
