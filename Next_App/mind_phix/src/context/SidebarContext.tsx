import React, { createContext, useState, ReactNode } from "react";

interface SidebarContextProps {
  isCollapsed: boolean;
  toggleSidebarCollapse: () => void;
}

const initialValue: SidebarContextProps = { isCollapsed: false, toggleSidebarCollapse: () => {} };

const SidebarContext = createContext<SidebarContextProps>(initialValue);

interface SidebarProviderProps {
  children: ReactNode;
}

const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
  const [isCollapsed, setCollapse] = useState(false);

  const toggleSidebarCollapse = () => {
    setCollapse((prevState) => !prevState);
  };

  return (
    <SidebarContext.Provider value={{ isCollapsed, toggleSidebarCollapse }}>
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarContext, SidebarProvider };
