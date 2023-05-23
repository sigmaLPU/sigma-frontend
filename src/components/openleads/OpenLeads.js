import { NavSideBarLayout } from "../routes";
import WorldMap from "./WorldMap";

export default function OpenLeads(){
    return(
        <div>
        <NavSideBarLayout childCSS={{marginTop:"3rem"}}>
            <WorldMap/>
					
				</NavSideBarLayout>
        </div>
    )
}