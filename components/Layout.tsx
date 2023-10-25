import React, { ReactNode } from "react";
import "../app/globals.css";

interface LayoutProps {
  children: ReactNode;
  background: string;
  id: string;
}

const Layout: React.FC<LayoutProps> = ({ children, background, id }) => {
  const className = `w-full h-auto px-[20px] py-[56px] relative md:px-[32px] md:py-[64px] md:static xl:px-[104px] xl:py-[104px]`;
  return (
    <div
      className={className}
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
      }}
      id={id}
    >
      {children}
    </div>
  );
};

export default Layout;
