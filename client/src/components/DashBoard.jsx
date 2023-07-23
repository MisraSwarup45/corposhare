import "./DashBoard.scss"
import { RxDashboard } from "react-icons/rx";
import { BsFillBriefcaseFill, BsFillPersonPlusFill, BsListUl } from "react-icons/bs";
import { FaClipboardList } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { VscGraph } from "react-icons/vsc";
import { useState } from "react";
import HomeDashboard from "./HomeDashBoard";
import AddEmp from "./AddEmp"
import AddProject from "./AddProject.jsx"
import CompanyProfile from "./CompanyProfile";
import EmpList from "./EmpList";
import ProjectList from "./ListProjects";
import Logo from '../img/CorposLogo.png';
import Navbar from "./Navbar";
import Footer from "./Footer";


export default function DashBoard() {
    const [state, setstate] = useState('dash');
    const [active, setactive] = useState(1);

    return (<>
        {/* <Navbar /> */}
        <div className="main_DashBoard">
            <div className="sideBar">
                <a href="/" className="logo">
                    <img src={Logo} alt="Logo"></img> CorpoShare
                </a>
                <div className="menu">
                    <ul>
                        <li onClick={e => { setactive(1); setstate("dash") }} className={active === 1 ? "active" : ""}><RxDashboard className="icon" /> DashBoard</li>
                        <li onClick={e => { setactive(2); setstate("project") }} className={active === 2 ? "active" : ""}><BsFillBriefcaseFill className="icon" />Add Project</li>
                        <li onClick={e => { setactive(7); setstate("project-list") }} className={active === 7 ? "active" : ""}> <FaClipboardList className="icon" />Projects</li>
                        <li onClick={e => { setactive(4); setstate("staff") }} className={active === 4 ? "active" : ""}> <BsFillPersonPlusFill className="icon" />Add Staff</li>
                        <li onClick={e => { setactive(6); setstate("emps") }} className={active === 6 ? "active" : ""}> <BsListUl className="icon" />Staffs</li>
                        <li onClick={e => { setactive(3); setstate("sales") }} className={active === 3 ? "active" : ""}> <VscGraph className="icon" />Sales</li>
                        <li onClick={e => { setactive(5); setstate("setting") }} className={active === 5 ? "active" : ""}> <AiFillSetting className="icon" />Settings</li>
                    </ul>
                </div>
            </div>
            <div className="main_comp">
                <div className="main_comp_wrapper">
                    {state === "dash" ?
                        <HomeDashboard />
                        : state === "staff" ?
                            <AddEmp />
                            : state === "project" ?
                                <AddProject />
                                : state === "setting" ? <CompanyProfile />
                                    : state === "emps" ? <EmpList />
                                        : state === "project-list" ? <ProjectList /> :
                                            ""}
                </div>
            </div>
        </div>
        <Footer />
    </>)
}