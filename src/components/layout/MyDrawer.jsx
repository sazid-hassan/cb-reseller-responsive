import { Drawer } from "antd";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import MenuList from "./MenuList";

import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

const MyDrawer = () => {
  const [open, setOpen] = useState(false);

  const breakpoint = useBreakpoint();

  // console.log(breakpoint);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AiOutlineMenu onClick={showDrawer} />

      <Drawer
        placement={"left"}
        onClose={onClose}
        open={open}
        width={breakpoint.lg ? "20%" : breakpoint.md ? "30%" : "60%"}
        closable={false}
        maskStyle={{
          padding: "0",
        }}
      >
        <MenuList />
      </Drawer>
    </div>
  );
};

export default MyDrawer;
