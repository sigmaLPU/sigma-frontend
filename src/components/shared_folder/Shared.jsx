import { NavSideBarLayout } from "../routes";

export default function Shared() {
  return (
    <div>
    <NavSideBarLayout childCSS={{ marginTop: '1.5rem' }}>
    <iframe
      src="https://drive.google.com/drive/folders/1v-_Tur-UFxoJ3ctjDWzkUOe4nFceh5Ki?usp=sharing"
      width="100%"
      height="600"
      frameborder="0"
      title="Google Drive Folder"
    />

        </NavSideBarLayout>
    </div>
  );
}