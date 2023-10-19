import React, { ReactNode } from "react";
import "../app/globals.css";

interface LayoutProps {
  children: ReactNode;
  background: string;
  height: number;
}

const Layout: React.FC<LayoutProps> = ({ children, background, height }) => {
  return (
    <div
      className="w-full h-full p-20 relative"
      style={{ backgroundImage: `url(${background})`, height: `${height}` }}
    >
      {children}
    </div>
  );
};

export default Layout;
