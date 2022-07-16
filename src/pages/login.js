import React from "react";
import Input from "../component/input";
import Button from "../component/button";
export default function login() {
  return (
    <div className="w-full h-screen bg-gray-600 flex justify-center items-center">
      <div className="bg-neutral-200 w-1/2 px-28 py-14 rounded-lg">
        <div
          className="text-center mb-12 font-semibold text-3xl"
          style={{ color: "#47B9FF " }}
        >
          Login
        </div>
        <form className="flex flex-col items-center">
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Button type="submit" label="Submit" />
        </form>
      </div>
    </div>
  );
}
