import React from "react";
import "./ProgressBar.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const Progress = ({ page, onPageNumberClick }) => {
  var stepPercentage = 0;
  if (page === "pageone") {
    stepPercentage = 16;
  } else if (page === "pagetwo") {
    stepPercentage = 49.5;
  } else if (page === "pagethree") {
    stepPercentage = 82.5;
  } else if (page === "pagefour") {
    stepPercentage = 100;
  } else {
    stepPercentage = 0;
  }

  return (
    <div className="bar">
    
    <ProgressBar  percent={stepPercentage}>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageNumberClick("1")}
          >
            <p className="tick">&#10003;</p>
            
            {index + 1}
          </div>
        )}
        
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageNumberClick("2")}
          >
              <p className="tick">&#10004;</p>
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageNumberClick("3")}
          >
              <p className="tick">&#10004;</p>
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageNumberClick("4")}
          >
              <p className="tick">&#10004;</p>
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageNumberClick("2")}
          >
              <p className="tick">&#10004;</p>
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageNumberClick("2")}
          >
              <p className="tick">&#10004;</p>
            {index + 1}
          </div>
        )}
      </Step>
    </ProgressBar>
    </div>
  );
};

export default Progress;
