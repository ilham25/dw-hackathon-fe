import React, { useState } from "react";
import backgroundDefault from "../assets/aether-dark.svg";
import Taskbar from "../component/taskbar";
import ModalNoteEdit from "../component/modal/modalNoteEdit";

export default function Desktop() {
  const [showNote, setShowNote] = useState(false);

  return (
    <div
      className="w-full h-screen overflow-hidden "
      style={{ backgroundImage: `url(${backgroundDefault})` }}
    >
      {showNote ? (
        <ModalNoteEdit handleMinClose={() => setShowNote(false)} />
      ) : (
        <div className="h-full" />
      )}
      <Taskbar showNoteEdit={() => setShowNote(!showNote)} />
    </div>
  );
}
