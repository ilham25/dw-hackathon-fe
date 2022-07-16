import React from "react";
import Windows from "../assets/windows.png";
import FileManager from "../assets/filemanager.png";
import Chrome from "../assets/chrome.png";
import VSCode from "../assets/vscode.png";
import Camera from "../assets/camera.png";
import NoteEdit from "../assets/noteedit.png";
import Setting from "../assets/setting.png";
import backgroundDefault from "../assets/aether-dark.svg";

export default function desktop() {
  return (
    <div
      className="w-full h-screen "
      style={{ backgroundImage: `url(${backgroundDefault})` }}
    >
      <div className="w-full absolute bottom-0 bg-slate-500/50 flex items-center justify-between p-2">
        <div></div>
        <div className="flex gap-8 h-5">
          <img src={Windows} alt="" />
          <img src={FileManager} alt="" />
          <img src={Chrome} alt="" />
          <img src={VSCode} alt="" />
          <img src={Camera} alt="" />
          <img src={NoteEdit} alt="" />
          <img src={Setting} alt="" />
        </div>
        <div className="text-white">13.44</div>
      </div>
    </div>
  );
}
