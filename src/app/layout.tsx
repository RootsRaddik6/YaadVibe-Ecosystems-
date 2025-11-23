import "./globals.css";
import React from "react";

export const metadata = {
  title: "YaadVibe Ecosystems",
  description: "Travel & bookings DApp"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: 12, borderBottom: "1px solid #eee" }}>
          <h1>YaadVibe</h1>
        </header>
        <main style={{ padding: 16 }}>{children}</main>
      </body>
    </html>
  );
}