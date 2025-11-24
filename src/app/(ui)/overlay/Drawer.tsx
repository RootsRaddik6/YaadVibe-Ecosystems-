"use client";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  position?: "left" | "right";
  children: React.ReactNode;
}

export default function Drawer({
  open,
  onClose,
  children,
  position = "left",
}: DrawerProps) {
  return (
    <div
      className={`fixed inset-0 bg-black/40 z-50 transition-opacity ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        className={`absolute top-0 h-full w-72 bg-white shadow-xl transition-transform ${
          position === "left"
            ? open
              ? "translate-x-0 left-0"
              : "-translate-x-full left-0"
            : open
              ? "translate-x-0 right-0"
              : "translate-x-full right-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
