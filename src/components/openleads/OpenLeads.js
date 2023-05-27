import { NavSideBarLayout } from "../routes";
import LineChart from "./LineChart";
import WorldMap from "./WorldMap";

export default function OpenLeads(){
    return(
        <div>
        <NavSideBarLayout childCSS={{marginTop:"3rem"}}>
            <WorldMap/>
            {/* <LineChart/> */}
					
				</NavSideBarLayout>
        </div>
    )
}