import React from "react";
import Windows from "../assets/windows.png";
import FileManager from "../assets/filemanager.png";
import Chrome from "../assets/chrome.png";
import VSCode from "../assets/vscode.png";
import Camera from "../assets/camera.png";
import NoteEdit from "../assets/noteedit.png";
import Setting from "../assets/setting.png";

export default function Taskbar({ showBrowser }) {
  return (
    <div className="w-full sticky bottom-0 bg-black/60  h-9 flex items-center justify-between p-2">
      <div></div>
      <div className="flex gap-8 h-5">
        <img src={Windows} alt="" />
        <img src={FileManager} alt="" />
        <img src={Chrome} alt="" onClick={showBrowser} />
        <img src={VSCode} alt="" onClick={showBrowser} />
        <img src={Camera} alt="" />
        <img src={NoteEdit} alt="" />
        <img src={Setting} alt="" />
      </div>
      <p className="text-white">13.44</p>
    </div>
  );
}
