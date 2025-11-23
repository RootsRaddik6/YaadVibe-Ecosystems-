import React from "react";

export default function Modal({ children, open, onClose } : { children?: React.ReactNode, open:boolean, onClose?: ()=>void }) {
  if(!open) return null;
  return (
    <div style={{
      position: "fixed",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "rgba(0,0,0,0.4)"
    }}>
      <div style={{ background: "white", padding: 16, borderRadius: 8, minWidth: 320 }}>
        <button onClick={onClose} style={{ float: "right" }}>Close</button>
        {children}
      </div>
    </div>
  );
}