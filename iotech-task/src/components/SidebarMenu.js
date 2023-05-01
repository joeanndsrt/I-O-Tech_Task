import React from 'react'
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";

const SidebarMenu = () => {
    const { collapseSidebar } = useProSidebar();

  return (
    <Sidebar style={{ height: "100vh" }}>
        <Menu>
          <MenuItem
            icon={<i class="fa-solid fa-bars"></i>}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          >
            {" "}
            <h2>Menu</h2>
          </MenuItem>
          <MenuItem icon={<i class="fa-solid fa-users"></i>}> Clients </MenuItem>
          <MenuItem icon={<i class="fa-solid fa-dumbbell"></i>}> Classes </MenuItem>
        </Menu>
    </Sidebar>
  )
}

export default SidebarMenu