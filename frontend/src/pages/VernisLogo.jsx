import React from "react";

const VernisLogo = ({ size = 50 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 120 120"
    width={size}
    height={size}
  >
    <defs>
      <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stopColor="#0E58C7" />
        <stop offset="1" stopColor="#072B61" />
      </linearGradient>
    </defs>

    <path
      d="M60 12 L94 28 v24 c0 28 -18 48 -34 56 -16 -8 -34 -28 -34 -56V28z"
      fill="url(#g1)"
    />

    <circle
      cx="86"
      cy="74"
      r="14"
      fill="none"
      stroke="#FFC857"
      strokeWidth="4"
    />

    <rect
      x="94"
      y="86"
      width="18"
      height="6"
      rx="3"
      transform="rotate(30 103 89)"
      fill="#FFC857"
    />

    <path
      d="M45 64 l10 10 l20 -24"
      fill="none"
      stroke="#FFC857"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default VernisLogo;
