import React from "react";

export const MessageBox = ({ state }): JSX.Element => {
  const { status, msg } = state;
  if (status === "Success") {
    return (
      <div className="relative z-50 px-6 py-4 mb-4 text-gray-800 bg-green-100 border-0 rounded transition: opacity 0.25s ease">
        <b className="capitalize">{status}!</b>
        <div className="mr-8 align-middle">{msg}!</div>
      </div>
    );
  }
  return (
    <div className="relative z-50 px-4 py-4 mb-4 text-gray-800 bg-red-100 border-0 rounded transition: opacity 0.25s ease">
      <b className="capitalize">{status}!</b>
      <div className="mr-8 align-middle">{msg}!</div>
    </div>
  );
};
