import { useState } from 'react'
import {
  Search,
  Bell,
  User,
  Home,
  FileText,
  BarChart3,
  Settings,
  Users,
  Calendar,
  LogOut,
  ChevronRight,
  ChevronLeft
} from "lucide-react"
import './App.css'
import styles from "./css/App.module.css"
import Header from "./layout/Header.jsx";
import SideMenu from "./layout/SideMenu.jsx";
import {useMediaQuery} from "react-responsive";
import Main from "./layout/Main.jsx";


function App() {
  const [activeMenu, setActiveMenu] = useState("대시보드")
  const [sideCollapse,setSideCollapse] = useState(false);
  const isTablet = useMediaQuery({maxWidth: 960});

  return (
    <>
      <div className={"fixed top-[25%] left-[35%] w-[400px] h-[500px] bg-amber-200 z-1 none"}>

      </div>
      <div className="min-h-screen h-screen bg-gray-100">
        {/* Header */}
        <Header/>

        <div className="flex h-[93vh] overflow-y-scroll">
          {/* Sidebar */}
          <SideMenu sideCollapse={sideCollapse} setSideCollapse={setSideCollapse} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

          {/* Main 내용 */}
          <main className={`flex-1 mt-[7vh] ${sideCollapse?"ml-0":"ml-64"} p-[1.7rem]`}>
            {/* Routes 넣은 곳 */}
            <Main isTablet={isTablet}/>
          </main>
        </div>
      </div>
    </>
  )
}

export default App
