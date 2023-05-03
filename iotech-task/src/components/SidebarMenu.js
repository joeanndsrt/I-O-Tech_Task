import React from 'react'
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from 'react-router-dom';

const SidebarMenu = () => {
    const { collapseSidebar } = useProSidebar();
    const navigate = useNavigate();

    return (
        <Sidebar style={{ height: "100vh", color: "#fff" }} backgroundColor='#020e62'>
            <Menu className="my-menu">
                <MenuItem
                    icon={<i className="fa-solid fa-bars"></i>}
                    onClick={() => {
                    collapseSidebar();
                    }}
                    style={{ textAlign: "center" }}
                >
                {" "}
                </MenuItem>
                <MenuItem icon={<i className="fa-solid fa-users"></i>} onClick={() => navigate('/clients')} className='mt-3'>
                    Clients
                </MenuItem>
                <MenuItem icon={<i className="fa-solid fa-dumbbell"></i>} onClick={() => navigate('/classes')} className='mt-2'>
                    Classes
                </MenuItem>
            </Menu>
        </Sidebar>
    )
}

export default SidebarMenu;
