import React from "react";

export default function button(props) {
  return (
    <button
      type={props.type}
      className=" mt-5 p-3 w-min rounded-lg px-10"
      style={{ backgroundColor: "#55AEFF", color: "white", fontWeight: "600" }}
    >
      {props.label}
    </button>
  );
}
