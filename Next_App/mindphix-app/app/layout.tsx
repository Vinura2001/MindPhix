import type { Metadata } from "next";
import "./styles/globals.css";
import "./styles/Home.css";
import "./styles/SideMenu.css";
import "./styles/Dashboard.css";
import "./styles/ProgressReport.css";
import "./styles/UserProfile.css";
import "./styles/ChatBot.css";
import "@/app/styles/Responsive.css";

export const metadata: Metadata = {
  title: "MindPhix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Figures/TitleLogo.png" /> {/* Add the icon */}
      </head>
      <body>{children}</body>
    </html>
  );
}
