import React from "react";

export default function input(props) {
  return (
    <input
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
      className="input-login p-2 mb-2 rounded-lg w-full"
    />
  );
}
