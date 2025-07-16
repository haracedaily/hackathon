import React, {useState} from 'react';
import {BarChart3, ChevronLeft, ChevronRight, FileText, Home, Settings, User, Users} from "lucide-react";
import {useNavigate} from "react-router-dom";

function SideMenu(props) {
    const navi = useNavigate();
    const menuItems = [
        { name: "대시보드", icon: Home, active: true, group:1, route:"/" },
        { name: "회원관리", icon: FileText,group:2, route:"/user" },
        { name: "축제관리", icon: FileText,route:"/festival" },
        { name: "리뷰관리", icon: FileText,route:"/review",group:3 },
        { name: "공지관리", icon: BarChart3,route:"/notice" },
        { name: "FAQ관리", icon: FileText,route:"/faq" },
        { name: "권한설정", icon: Users,group:4,route:"/autho" },
    ]
    const menuGroup = ["전체 보기","서비스 관리","고객센터","시스템 설정"]

    return (
        <aside className={` fixed left-0 top-[7vh] z-1`}>
            <div className={`${props.sideCollapse?"w-0":"w-64"} bg-[#768395] flex flex-col justify-between h-screen relative`}>
                <div className={`${props.sideCollapse?"w-0":"w-64"} overflow-hidden`}>

                    <div className="text-white text-sm mb-6">
                        <div className="bg-[#768395] px-3 py-2 rounded">
                            <span>대시보드</span>
                        </div>
                    </div>



                    <nav className="space-y-2">
                        {menuItems.map((item) => {
                            const Icon = item.icon
                            return item.group?(
                                <>
                                    <div key={"bar-"+item.route} className="text-white text-sm">
                                        <div className="bg-[#6A7585] p-2 pl-4">
                                            <span>{menuGroup[item.group-1]}</span>
                                        </div>
                                    </div>
                                    <button
                                        key={item.route}
                                        onClick={() => {
                                            props.setActiveMenu(item.name);
                                            navi(item.route);
                                        }}
                                        className={`w-full flex items-center space-x-3 px-3 py-2 rounded text-sm transition-colors ${
                                            props.activeMenu === item.name ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-700"
                                        }`}
                                    >
                                        <Icon className="w-4 h-4" />
                                        <span>{item.name}</span>
                                    </button>
                                </>
                            ):(
                                <button
                                    key={item.route}
                                    onClick={() => {
                                        props.setActiveMenu(item.name);
                                        navi(item.route);
                                    }}
                                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded text-sm transition-colors ${
                                        props.activeMenu === item.name ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-700"
                                    }`}
                                >
                                    <Icon className="w-4 h-4" />
                                    <span>{item.name}</span>
                                </button>
                            )
                        })}
                    </nav>
                </div>
                <div className="">
                    <div className="text-gray-400 text-xs">
                        <div className="flex items-center space-x-2 mb-2">
                            <User className="w-4 h-4" />
                            <span>내이름</span>
                        </div>
                        <button className="text-gray-500 text-xs hover:text-gray-300">로그아웃</button>
                    </div>
                </div>
                {props.sideCollapse?(<ChevronRight key={"sideMenuOpenClick"} className={"absolute top-0 right-[-1.3rem] bg-[#768395] z-1"} onClick={()=>props.setSideCollapse(!props.sideCollapse)}/>):(<ChevronLeft key={"sideMenuCloseClick"} className={"absolute top-0 right-[-1.3rem] bg-[#768395] z-1"} onClick={()=>props.setSideCollapse(!props.sideCollapse)}/>)}
            </div>
        </aside>
    );
}

export default SideMenu;