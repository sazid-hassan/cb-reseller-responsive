import React from "react";
import MyDrawer from "./MyDrawer";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

const Header = () => {
  const screens = useBreakpoint();

  return (
    <div className={screens.lg ? "header" : "header mobile"}>
      {!screens.lg && <MyDrawer />}
      <p>Header</p>
    </div>
  );
};

export default Header;
