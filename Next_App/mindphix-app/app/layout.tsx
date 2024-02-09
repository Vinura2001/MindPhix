import type { Metadata } from "next";
import "./styles/globals.css";
import "./styles/Home.css";
import './styles/SideMenu.css';
import './styles/Dashboard.css';
import './styles/chat-home.css';
import './styles/chat_interface.css';

export const metadata: Metadata = {
  title: "MindPhix"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
