import React, { useState } from 'react';
import {
    FaCarAlt,
    FaBars,
    FaUserTie,
    FaAddressBook,
    FaUsers,
    FaUserAlt,
    FaUserFriends
    
}from "react-icons/fa";
import { Link } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/adminav",
            name:"View All Cars",
            icon:<FaCarAlt/>
        },
        {
            path:"/adminav/viewallusers",
            name:"View All users",
            icon:<FaUserAlt/>
        },
        {
            path:"/adminav/viewallowners",
            name:"View All Owners",
            icon:<FaUserTie/>
        },
        {
            path:"/adminav/viewstatus",
            name:"View Status",
            icon:<FaAddressBook/>
        },
        {
            path:"/adminav/manageusers",
            name:"Manage users",
            icon:<FaUsers/>
        },
        {
            path:"/adminav/manageowners",
            name:"Manage Owners",
            icon:<FaUserFriends/>
        }
    ]
    return (
        <div className="container-fluid cf g-0">
           <div style={{width: isOpen ? "400px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">T2's CAR RENTAL</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <Link to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </Link>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;