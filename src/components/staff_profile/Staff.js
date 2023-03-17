import React from "react";
import { NavSideBarLayout } from "../routes";
import StaffInfo from './StaffInfo'


export default function Staff(){
    return(
        <div>
      <NavSideBarLayout childCSS={{ marginTop: "2rem" }}>
      <div className="App" style={{ position: 'fixed', top: '0', left: '0' }}>
        <StaffInfo/>
        </div>


      </NavSideBarLayout>
      </div>

    );
}