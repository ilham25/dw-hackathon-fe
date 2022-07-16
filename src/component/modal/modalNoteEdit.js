import React, { useState } from "react";

import {
  VscChromeMaximize,
  VscClose,
  VscChromeMinimize,
} from "react-icons/vsc";
export default function ModalNoteEdit({ handleMinClose, handleMaximize }) {
  const [maximum, setMaximum] = useState(false);

  return (
    <div className="w-full h-screen overflow-hidden flex items-center justify-center ">
      <div className={maximum ? "w-full h-full" : "w-1/4 h-3/5"}>
        <div
          className="w-full text-center rounded-t-lg text-white flex justify-between p-2"
          style={{ background: "#353535" }}
        >
          <div></div>
          <div className="pl-6">File</div>
          <div className="flex gap-2 items-center">
            <VscChromeMinimize onClick={handleMinClose} />
            <VscChromeMaximize onClick={() => setMaximum(!maximum)} />
            <VscClose onClick={handleMinClose} />
          </div>
        </div>
        <div
          className="h-full rounded-b-lg pt-2 px-2 text-white"
          style={{ background: "#1E1E1E" }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </div>
      </div>
    </div>
  );
}
