"use client"

import { dataAdminSidebar } from "./SidebarRoutes.data";
import { SidebarItem } from "./SidebarItem";
import { useAuth } from "@/app/api/auth/login/route"
import { LogOut } from "lucide-react";

export const SidebarRoutes = () => {
    const { logout } = useAuth(); 

    const handleLogout = () => {
        logout();
    };
    
    return (
        <div className="flex flex-col justify-between h-full bg-gray-950">
            <div>
                <div className="p-2 md:p-6 mt-3">
                    <div className="">
                        <p className="mb-2 text-slate-300 text-xl font-semibold pl-4">Menú</p>
                        {dataAdminSidebar.map((item) => (
                            <SidebarItem 
                                key={item.label} 
                                item={item} 
                            />
                        ))}
                        <a
                        className="flex gap-x-2 p-3 text-sm items-center font-semibold hover:bg-slate-200 rounded-lg cursor-pointer text-red-500 " 
                        onClick={handleLogout}
                        >
                        <LogOut />
                        Cerrar Sesión
                        </a>
                    </div>
                </div>              
            </div>
        </div>
    )
}
