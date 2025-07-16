import React from 'react';
import {LogOut, User} from "lucide-react";

function Header(props) {
    return (
        <header className="bg-white shadow-sm border-b h-[7vh] fixed top-0 w-full z-1">
            <div className="flex items-center justify-between px-6 py-4">
                <div className="flex items-center space-x-4">
                    <img src={"/title.png"} className={"h-8"}/>
                </div>
                <div className="flex items-center space-x-4">
                    <span>로그인님</span>
                    <User className="w-5 h-5 text-gray-500" />
                    <LogOut className="w-5 h-5 text-gray-500" />
                </div>
            </div>
        </header>
    );
}

export default Header;