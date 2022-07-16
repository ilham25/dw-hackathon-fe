import React from "react";

export default function ModalBrowser() {
  return (
    <div className="w-full h-full ">
      <div
        className="w-full h-9 flex items-center justify-center"
        style={{ background: "#353535" }}
      >
        <p
          className="text-white px-2 rounded-lg text-center"
          style={{ width: "500px", background: "#2D2D2D" }}
        >
          https://google.com
        </p>
      </div>
      <div
        style={{ height: "100%", width: "100%" }}
        dangerouslySetInnerHTML={{
          __html:
            "<iframe src='https://dumbways.id/' height='100%' width='100%' sandbox='allow-same-origin allow-script'/>",
        }}
      />
    </div>
  );
}
