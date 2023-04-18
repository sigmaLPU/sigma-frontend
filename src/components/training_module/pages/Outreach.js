import { useNavigate } from "react-router-dom";
import { NavSideBarLayout } from "../../routes";


export default function Outreach(){

    
	const navigate = useNavigate()

    return (
        <div>
        <NavSideBarLayout childCSS={{marginTop:"4rem"}}childSX={{flexGrow:1}}>
            <h1>Induction</h1>
           
        </NavSideBarLayout>
    </div>
    )
}