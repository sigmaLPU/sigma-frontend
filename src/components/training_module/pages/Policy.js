import { useNavigate } from "react-router-dom";
import { NavSideBarLayout } from "../../routes";

export default function Policy(){
	const navigate = useNavigate();

	return (
		<div>
			<NavSideBarLayout childCSS={{ marginTop: "4rem" }} childSX={{ flexGrow: 1 }}>
				<iframe src="https://ums.lpu.in/lpuums/frmPolicy.aspx?folder=HR" title="LPU Policy"></iframe>
			</NavSideBarLayout>
		</div>
	);
}
