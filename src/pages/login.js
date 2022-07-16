import React from "react";
import Input from "../component/input";
import Button from "../component/button";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

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
        <div className="flex items-center justify-center mt-7">
          <p className="text-gray-500">don't have an account?</p>
          <Link to="/register">
            <p className="text-gray-500 flex items-center ml-2 border-2 p-1 border-gray-300	rounded-lg">
              Get access <IoIosArrowRoundForward />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
