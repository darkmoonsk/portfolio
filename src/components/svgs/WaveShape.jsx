import React from "react";

function WaveShape({ fill, rotate }) {
  return (
    <svg
      style={{ transform: `rotate(${rotate ?? 0}deg)`}}
      xmlns="http://www.w3.org/2000/svg"
      width="100vw"
      height="540"
      version="1.1"
      viewBox="0 0 960 540"
      preserveAspectRatio="none"
    >
      {/* <path fill="#023" d="M0 0H960V540H0z"></path> */}
      <defs>
      <linearGradient id="gradient" x1="0%" y1="10.4%" x2="0%" y2="87.7%">
          <stop offset="10.4%" stopColor="#0E2954" />
          <stop offset="87.7%" stopColor="#0E2954" />
      </linearGradient>
      </defs>
      <path
        fill={fill ?? "#06F"}
        strokeLinecap="round"
        d="M0 415l32 2.2c32 2.1 96 6.5 160-3.9C256 403 320 378 384 362s128-23 192-13.7c64 9.4 128 35 192 44s128 1.4 160-2.5l32-3.8v155H0z"
      ></path>

    </svg>
  );
}

export default WaveShape;