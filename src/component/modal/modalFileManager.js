import React, { useState } from "react";

import Folder from "../../assets/folder.png";

import {
  VscChromeMaximize,
  VscClose,
  VscChromeMinimize,
} from "react-icons/vsc";
export default function ModalFileManager({ handleMinClose, handleMaximize }) {
  const [maximum, setMaximum] = useState(false);
  const [folders] = useState([
    {
      id: 1,
      label: "Folder 1",
    },
    {
      id: 2,
      label: "Folder 2",
    },
    {
      id: 3,
      label: "Folder 3",
    },
    {
      id: 4,
      label: "Folder 4",
    },
    {
      id: 5,
      label: "Folder 5",
    },
    {
      id: 6,
      label: "Folder 6",
    },
    {
      id: 7,
      label: "Folder 7",
    },
    {
      id: 8,
      label: "Folder 8",
    },
    {
      id: 9,
      label: "Folder 9",
    },
  ]);
  const ReuseFolder = ({ label }) => (
    <div className="flex flex-col w-12  justify-center items-center">
      <img src={Folder} alt="" className="w-10 h-10" />
      <p className="text-xs pt-1">{label}</p>
    </div>
  );

  return (
    <div className="w-full h-screen overflow-hidden flex items-center justify-center ">
      <div className={maximum ? "w-full h-full" : "w-1/4 h-3/5"}>
        <div
          className="w-full text-center rounded-t-lg text-white flex justify-between p-2"
          style={{ background: "#353535" }}
        >
          <div></div>
          <div
            className="text-white px-2 rounded-lg text-center"
            style={{ width: "500px", background: "#2D2D2D" }}
          >
            Home
          </div>
          <div className="flex gap-2 items-center">
            <VscChromeMinimize onClick={handleMinClose} />
            <VscChromeMaximize onClick={() => setMaximum(!maximum)} />
            <VscClose onClick={handleMinClose} />
          </div>
        </div>
        <div
          className="h-full w-full rounded-b-lg pt-2 px-2 text-white"
          style={{ background: "#1E1E1E" }}
        >
          <div
            className={`grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-3 gap-3 ${
              maximum ? `lg:grid-cols-10` : `lg:grid-cols-3`
            }`}
          >
            {folders &&
              folders.map((folder) => (
                <ReuseFolder key={folder.id} label={folder.label} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
