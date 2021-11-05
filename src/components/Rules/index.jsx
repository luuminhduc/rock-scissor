import React from "react";
import RuleImg from "../../assets/images/image-rules-bonus.svg";
import Close from "../../assets/images/icon-close.svg";
const Rules = ({ setShowRule }) => {
  return (
    <div className="rules">
      <h3>Rules</h3>
      <img className="rule-img" src={RuleImg} alt="" />
      <img
        onClick={() => setShowRule(false)}
        src={Close}
        alt=""
        className="close"
      />
    </div>
  );
};

export default Rules;
