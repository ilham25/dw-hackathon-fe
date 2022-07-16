import React, { useState } from "react";

import FolderImg from "../../assets/folder.png";
import FileImg from "../../assets/file.png";

import {
  VscChromeMaximize,
  VscClose,
  VscChromeMinimize,
} from "react-icons/vsc";

export default function ModalFileManager({ handleMinClose, handleMaximize }) {
  const [maximum, setMaximum] = useState(false);
  const [items] = useState([
    {
      id: 1,
      name: "Folder 1",
      type: "folder",
    },
    {
      id: 1,
      name: "My Note.txt",
      type: "file",
    },
    {
      id: 1,
      name: "index.js",
      type: "file",
    },
    {
      id: 1,
      name: "Folder 2",
      type: "folder",
    },
    {
      id: 1,
      name: "Pictures",
      type: "folder",
    },
    {
      id: 1,
      name: "Gallery",
      type: "folder",
    },
    {
      id: 1,
      name: "Documents",
      type: "folder",
    },
  ]);

  const ReuseItem = ({ name, type }) => {
    const images = {
      file: FileImg,
      folder: FolderImg,
    };
    return (
      <div className="flex flex-col justify-center items-center">
        <img
          // src={type === "folder" ? FolderImg : FileImg}
          src={images[type]}
          alt=""
          className="w-10 h-10"
        />
        <p className="text-xs pt-1">{name}</p>
      </div>
    );
  };

  return (
    <div className="w-full h-screen overflow-hidden flex items-center justify-center ">
      <div className={maximum ? "w-full h-full" : "w-1/4 h-3/5"}>
        <div
          className="w-full text-center rounded-t-lg text-white flex justify-between p-2"
          style={{ background: "#353535" }}
        >
          <div></div>
          <div
            className="text-white px-2 rounded-lg text-center flex justify-center items-center gap-4"
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
            {items &&
              items.map((item) => <ReuseItem key={item.id} {...item} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
