import { useNavigate } from "react-router-dom";
import { NavSideBarLayout } from "../routes";
import ChatPage from "./ChatPage";

export default function Chatgpt() {
    const navigate = useNavigate();

    return (
        <div style={{ position: "relative", width: "100%", height: "100vh" }}>
    <NavSideBarLayout childCSS={{ marginTop: "4rem" }} childSX={{ flexGrow: 1 }}>
        <iframe
           src="/chat"
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                width: "100%",
                height: "100%",
                border: "none"
            }}
        ></iframe>
    </NavSideBarLayout>
</div>

    );
}
