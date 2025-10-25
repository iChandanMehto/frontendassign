"use client";
import React from "react";

export default function GlassUserIcon({ size = 50 }: { size?: number }) {
  const px = `${size}px`;
  return (
    <div
      className="rounded-full flex items-center justify-center"
      style={{
        width: px,
        height: px,
        background: "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
        boxShadow:
          "0 6px 18px rgba(15,23,42,0.25), inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -6px 18px rgba(0,0,0,0.12)",
        backdropFilter: "blur(6px) saturate(140%)",
        WebkitBackdropFilter: "blur(6px) saturate(140%)",
        border: "1px solid rgba(255,255,255,0.12)",
        transform: "perspective(400px) translateZ(0)",
      }}
      aria-hidden={false}
      title="User"
    >
      {/* subtle inner glass ring */}
      <div
        style={{
          width: "86%",
          height: "86%",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(0,0,0,0.02))",
        }}
      >
        {/* SVG user silhouette */}
        <svg
          width={size * 0.56}
          height={size * 0.56}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z"
            fill="rgba(255,255,255,0.95)"
            opacity="0.95"
          />
          <path
            d="M3 21c0-3.866 3.134-7 7-7h4c3.866 0 7 3.134 7 7v0H3z"
            fill="rgba(255,255,255,0.85)"
            opacity="0.85"
          />
        </svg>
      </div>
    </div>
  );
}