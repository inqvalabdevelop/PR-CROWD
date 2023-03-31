import React from 'react'
import { useState } from "react"
import { SidebarData } from './sidebarData'
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const activeLink = 'hover:bg-red-500 mt-7 pl-7 w-full h-14 flex justify-start items-center text-white text-2xl space-x-1 font-bold bg-red-500'
    const normalLink = 'hover:bg-red-500 pl-7 mt-7 w-full h-14 flex justify-start items-center text-white text-2xl space-x-1 font-bold'
    const [open, setOpen] = useState(true);
    
    return (
        <React.Fragment>
            <div className="flex">
                <div className={`bg-dark-red h-screen p-4  pt-8 relative duration-300`}>
                   <div className="flex gap-x-4 items-center">
                        <img src={require('../../../images/assets/logo.png')} alt="logo"
                            className={`img-fluid cursor-pointer duration-500 ${open && "rotate-[360deg]"
                                }`} />
                        <h1 className={`my-2 text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                            }`}>
                            Bienvenido!
                        </h1>
                    </div>
                    <br />
                    <section>
                        <div>
                            {SidebarData.map((item, index) => {
                                return (
                                <div key={index} className='my-4'>
                                    <NavLink to={item.path} refresh="true"
                                        className={({ isActive }) =>
                                            isActive ? activeLink : normalLink}
                                            style={{ color: 'inherit', textDecoration: 'inherit' }} >
                                        <span className='mx-2'>{item.icon}</span>
                                        <span>{item.title}</span>
                                    </NavLink>
                                </div>
                                )
                            })
                            }

                        </div>
                    </section>
                </div>
                
            </div>
            
        </React.Fragment>
    )
}

export default Sidebar