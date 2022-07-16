import React, { useState } from "react";
import Taskbar from "../component/taskbar";
import ModalBroswer from "../component/modal/modalbrowser";

export default function Browser() {
  const [showBrowser, setShowBrowser] = useState(false);
  const handleCloseBrowser = () => setShowBrowser(false);
  const handleShowBrowser = () => setShowBrowser(true);

  return (
    <div className="w-full h-screen overflow-hidden">
      {showBrowser ? <ModalBroswer /> : <div className="h-full" />}
      <Taskbar
        showBrowser={showBrowser ? handleCloseBrowser : handleShowBrowser}
      />
    </div>
  );
}
