import React from "react";

const HomeIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-home-2"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke="#909296"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <polyline points="5 12 3 12 12 3 21 12 19 12"></polyline>
      <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
      <rect x="10" y="12" width="4" height="4"></rect>
    </svg>
  );
};

export default HomeIcon;
