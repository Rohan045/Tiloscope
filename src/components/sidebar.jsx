import React from 'react';
import { motion } from "framer-motion";
import logo from "../assests/main-title-image.png";
import {House, UserPen, ShieldHalf, Brush, LogOut} from 'lucide-react';
import { useNavigate } from "react-router-dom";

function Sidebar() {
    const style = 'space-x-2 pt-5 flex place-content-center rounded-r-lg hover:bg-cyan-600 w-full h-[70px] bg-transparent';
    const navigate = useNavigate();
    const handleLogOut = () => {
        navigate("/");
    }
    return <>
        <div className='bg-gradient-to-r from-white to-cyan-500 h-screen w-1/4 divide-y divide-teal-200'>
            <motion.div
                animate={{ scale: 1 }}
                initial={{ scale: 0 }}
                transition={{ type: "spring" }}
                className="centered"
            >
                <img
                    src={logo}
                    alt="logo"
                    className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]"
                />
            </motion.div>
            <button class={style}>
                <House/><div className='font-serif font-meduim text-xl'>Home</div>
            </button>
            <button class={style}>
                <UserPen/><div className='font-serif font-meduim text-xl'>Profile</div>
            </button>
            <button class={style}>
                <ShieldHalf/><div className='font-serif font-meduim text-xl'>Leaderboard</div>
            </button>
            <button class={style}>
                <Brush/><div className='font-serif font-meduim text-xl'>Boards</div>
            </button>
            <button class={style} onClick={handleLogOut}>
                <LogOut/><div className='font-serif font-meduim text-xl'>Log Out</div>
            </button>
        </div>
    </>
}

export default Sidebar;