import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Logo from '../../imgs/logo.png';
import './SideBar.css';

import { SidebarData } from "../../Data/Data";
import { UilSignOutAlt } from '@iconscout/react-unicons';

const Sidebar = ()=> {
    const [selected, setSelected] = useState(0);
    const navigate = useNavigate();

    // Pass navigate to SidebarData
    const sidebarItems = SidebarData(navigate);

    const handleItemClick = (index, item) => {
        setSelected(index);
        // If the item has an onClick method, call it
        if (item.onClick) {
            item.onClick();
        }
    };

    return (
        <div className="Sidebar">
            {/*logo*/}
           <div className="logo">
                <img src={Logo} alt=""/>
                <span>
                    Pantry<span>Pal</span>
                </span>
           </div>

           {/* menu */}
           <div className="menu">
                {sidebarItems.map((item, index)=>{
                    return(
                        <div 
                            className={selected===index?'menuItem active': 'menuItem'}
                            key={index}
                            onClick={()=>handleItemClick(index, item)}
                        >
                            <item.icon/>
                            <span>
                                {item.heading}
                            </span>
                        </div>
                    )
                })}

                <div className="menuItem">
                    <UilSignOutAlt/>
                </div>
           </div>
        </div>
    )
}

export default Sidebar;