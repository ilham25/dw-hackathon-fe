import React, { useState } from "react";
import backgroundDefault from "../assets/aether-dark.svg";
import Taskbar from "../component/taskbar";
import ModalNoteEdit from "../component/modal/modalNoteEdit";
import ModalFileManager from "../component/modal/modalFileManager";

export default function Desktop() {
  const [showNote, setShowNote] = useState(false);
  const [showFileManager, setShowFileManager] = useState(false);

  return (
    <div
      className="w-full h-screen overflow-hidden "
      style={{ backgroundImage: `url(${backgroundDefault})` }}
    >
      {showNote && <ModalNoteEdit handleMinClose={() => setShowNote(false)} />}
      {!showFileManager && <div className="h-full" />}

      {showFileManager && (
        <ModalFileManager handleMinClose={() => setShowFileManager(false)} />
      )}
      <Taskbar
        showNoteEdit={() => setShowNote(!showNote)}
        showFileManager={() => setShowFileManager(!showFileManager)}
      />
    </div>
  );
}
