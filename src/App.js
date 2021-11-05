import React, { useEffect, useState } from 'react';
import CompareGround from './components/CompareGround';
import PlayingGround from './components/PlayingGround';
import Results from './components/Results';
import Rules from './components/Rules';

const App = () => {
  const [showRule,setShowRule] = useState(false);
  const [myChoice,setMyChoice] = useState(null);
  const [computerChoice,setComputerChoice] = useState(null);
  const [isPlay, setIsPlay] = useState(true);
  const arr = ["rock", "paper", "scissor", "spock", "lizard"];
  const [computerScore,setComputerScore] = useState(0);
  const [score,setScore] = useState(0);
  const [winner,setWinner] = useState("");
  const [compareText,setCompareText] = useState("");


  // hanlde click icon
  const iconClick = (item) => {
    if(isPlay)setMyChoice(item);
  }

  // Get computer choice;
  const getComputerChoice = () => {
    setComputerChoice(arr[Math.floor(Math.random() * arr.length)]);
  }

  const iWin = () => {
    setCompareText("Kinh đấy");
    setScore(score+1);
    setWinner("i");
  }
  const even = () => {
    setCompareText("Hòa rồi");
  }

  const computerWin = () => {
    setCompareText("Ngu như một con chó, dit me may")
    setComputerScore(computerScore+1);
    setWinner("computer");
  }

  const newRound = () => {
    setIsPlay(true);

    setMyChoice(null);
    setComputerChoice(null);
    setWinner(null);
    setCompareText("")
  }

  const reset = () => {
    newRound();
    setScore(0);
    setComputerScore(0);
  }


  const withRock = () => {
    switch(computerChoice) {
      case "scissor": iWin();break;
      case "paper": computerWin();break;
      case "lizard":iWin();break;
      case "spock":computerWin(); break;
      default: even();
    }
  }

  const withScissor = () => {
    switch(computerChoice) {
      case "rock": computerWin();break;
      case "paper": iWin();break;
      case "lizard":iWin();break;
      case "spock":computerWin(); break;
      default: even();
    }
  }


  const withPaper = () => {
    switch(computerChoice) {
      case "rock": iWin();break;
      case "scissor": computerWin();break;
      case "lizard":computerWin();break;
      case "spock":iWin(); break;
      default: even();
    }
  }

  const withLizard = () => {
    switch(computerChoice) {
      case "rock": computerWin();break;
      case "scissor": computerWin();break;
      case "paper":iWin();break;
      case "spock":iWin(); break;
      default: even();
    }
  }

  const withSpock = () => {
    switch(computerChoice) {
      case "rock": iWin();break;
      case "scissor": iWin();break;
      case "paper":computerWin();break;
      case "lizard":computerWin(); break;
      default: even();
    }
  }

  const compare = () => {
    if(myChoice === computerChoice) {
      even();
    }else{
      switch(myChoice) {
        case "rock": withRock();
        break
        case "paper":withPaper();
        break;
        case "lizard":withLizard();
        break;
        case "spock":withSpock();
        break;
        default: withScissor();
      }
    }
  }

  useEffect(() => {
    if(isPlay && myChoice){
      setTimeout(() => {
        getComputerChoice()
      }, [1500])

    };
    // eslint-disable-next-line
  }, [myChoice]);

  useEffect(() => {
    if(computerChoice) {
      setIsPlay(false);
      setTimeout(() => {
        compare()
      }, [500])
    }
    // eslint-disable-next-line
  }, [computerChoice])


  return (
    <div className="container">
      {showRule && <Rules setShowRule={setShowRule}/>}
      <Results score={score} computerScore={computerScore}/>
      {
        !myChoice ? <PlayingGround arr={arr} iconClick={iconClick}/>: <CompareGround reset={reset} newRound={newRound} winner={winner} compareText={compareText} computerChoice={computerChoice} myChoice={myChoice}/>
      }
      <div className="btn-container">
      <button onClick={() => setShowRule(true)} className="btn-show-rule">Rules</button>

      </div>
    </div>
  );
}
 
export default App;