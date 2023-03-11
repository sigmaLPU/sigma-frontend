import React from "react";

import { NavSideBarLayout } from "../../routes";
import ProgressBar from "./ProgressBar";

export default function StudentProfile(props) {
  return (
    <div>
      <NavSideBarLayout childCSS={{ marginTop: "4rem" }}>
        <div className="App">
          <ProgressBar />
        
          <div
            style={{
              boxSizing: "border-box",

              position: "absolute",
              width: "25vw",
              height: "74vh",
              left: "73vw",
              top: "23vh",

              background: "#FFFFFF",
              border: "1px solid #F07F1A",
              boxShadow: "0px 0px 14px rgba(0, 0, 0, 0.25)",
              borderRadius: "8px",
            }}
          >
            <p className="heading2">Notes</p>
          </div>
        </div>
      </NavSideBarLayout>
      <style>{`
        .heading2 {
          margin-top: -2vh;
          background-color: #F07F1A;
          width: 10vw;
          border-bottom-right-radius: 50%;
          border-bottom-left-radius: 50%;
          padding-bottom: 1vh;
          padding-top: 1vh;
          font-size: 22px;
          text-align: center;
          margin-left: 8vw;
        }
      `}</style>
    </div>
  );
}
