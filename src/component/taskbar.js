import React, { useState, useEffect } from "react";
import Windows from "../assets/windows.png";
import FileManager from "../assets/filemanager.png";
import Chrome from "../assets/chrome.png";
import VSCode from "../assets/vscode.png";
import Camera from "../assets/camera.png";
import NoteEdit from "../assets/noteedit.png";
import Setting from "../assets/setting.png";

const TimeClock = () => {
  const [time, setTime] = useState("");
  function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    setTime(h + ":" + m);
    setTimeout(startTime, 1000);
  }

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    } // add zero in front of numbers < 10
    return i;
  }

  useEffect(() => {
    startTime();
  }, []);

  return <p className="text-white">{time}</p>;
};

export default function Taskbar({
  showBrowser,
  showNoteEdit,
  showFileManager,
}) {
  const ReuseTaskbar = ({ image, onClick }) => (
    <div onClick={onClick} className="hover:bg-gray-500 h-10 p-2">
      <img src={image} alt="" className="h-5" />
    </div>
  );
  return (
    <div className="w-full sticky bottom-0 bg-black/60  h-9 flex items-center justify-between p-2">
      <div></div>
      <div className="flex gap-4">
        <ReuseTaskbar image={Windows} />
        <ReuseTaskbar image={FileManager} onClick={showFileManager} />
        <ReuseTaskbar image={Chrome} onClick={showBrowser} />
        <ReuseTaskbar image={VSCode} onClick={showBrowser} />
        <ReuseTaskbar image={Camera} />
        <ReuseTaskbar image={NoteEdit} onClick={showNoteEdit} />
        <ReuseTaskbar image={Setting} />
      </div>
      <TimeClock />
    </div>
  );
}
