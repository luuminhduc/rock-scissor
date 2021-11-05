import React from "react";
import Rock from "../../assets/images/icon-rock.svg";
import Scissor from "../../assets/images/icon-scissors.svg";
import Paper from "../../assets/images/icon-paper.svg";
import Spock from "../../assets/images/icon-spock.svg";
import Lizard from "../../assets/images/icon-lizard.svg";

const PlayingGround = ({ iconClick, arr }) => {
  const getIcon = (name) => {
    switch (name) {
      case "paper":
        return Paper;
      case "scissor":
        return Scissor;
      case "spock":
        return Spock;
      case "lizard":
        return Lizard;
      default:
        return Rock;
    }
  };

  return (
    <div className="play-ground">
      {arr.map((item, idx) => {
        return (
          <div
            onClick={() => iconClick(item)}
            key={idx}
            className={`icon-container ${item} in`}
          >
            <div className="icon">
              <img src={getIcon(item)} alt="" />
            </div>
          </div>
        );
      })}
      {/* <div className="icon-container rock in">
        <div className="icon">
          <img src={Rock} alt="" />
        </div>
      </div>
      <div className="icon-container paper in">
        <div className="icon">
          <img src={Paper} alt="" />
        </div>
      </div>
      <div className="icon-container scissor in">
        <div className="icon">
          <img src={Scissor} alt="" />
        </div>
      </div>
      <div className="icon-container spock in">
        <div className="icon">
          <img src={Spock} alt="" />
        </div>
      </div>
      <div className="icon-container lizard in">
        <div className="icon">
          <img src={Lizard} alt="" />
        </div>
      </div> */}
    </div>
  );
};

export default PlayingGround;
