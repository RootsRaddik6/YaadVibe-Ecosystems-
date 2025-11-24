"use client";

import React from "react";

interface MapContainerProps {
  children?: React.ReactNode;
}

export default function MapContainer({ children }: MapContainerProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "600px",
        borderRadius: "16px",
        overflow: "hidden",
        background: "#01070F",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid rgba(255,255,255,0.06)"
      }}
    >
      {children ? (
        children
      ) : (
        <div style={{ color: "#aaa", fontSize: "14px" }}>
          3D Map UI will load here soon…
        </div>
      )}
    </div>
  );
}
