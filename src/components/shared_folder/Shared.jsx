import { NavSideBarLayout } from "../routes";

export default function Shared() {
  return (
    <div>
    <NavSideBarLayout childCSS={{ marginTop: '3rem' }}>
    <iframe
      src="https://google-drive-master.vercel.app/"
      width="100%"
      height="600"
      frameborder="0"
      title="Google Drive Folder"
    />

        </NavSideBarLayout>
    </div>
  );
}