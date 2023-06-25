import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

const Layout = ({ children }) => {
  const screens = useBreakpoint();

  return (
    <>
      <Header />
      {screens.lg && (
        <div className="general-body">
          <Sidebar />
          {children}
        </div>
      )}
    </>
  );
};

export default Layout;
