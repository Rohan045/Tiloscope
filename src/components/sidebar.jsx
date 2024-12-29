import React from 'react';
import { motion } from "framer-motion";
import logo from "../assests/main-title-image.png";
import {House, UserPen, ShieldHalf, Brush, LogOut} from 'lucide-react';
import { useNavigate } from "react-router-dom";

function Sidebar() {
    const style = 'space-x-2 pt-5 flex place-content-center rounded-2xl hover:bg-slate-800 w-full h-[70px] bg-transparent';
    const navigate = useNavigate();
    const handleButton = (button) => () => {
        if(button === 'logOut'){
            navigate("/");
        }else if(button === 'boards'){
            navigate("/game");
        }
    }
    return <>
        <div className='bg-transparent h-screen sm:inline hidden w-1/4'>
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
            <button class={style} onClick={handleButton('boards')}>
                <Brush/><div className='font-serif font-meduim text-xl'>Boards</div>
            </button>
            <button class={style} onClick={handleButton('logOut')}>
                <LogOut/><div className='font-serif font-meduim text-xl'>Log Out</div>
            </button>
        </div>
    </>
}

export default Sidebar;