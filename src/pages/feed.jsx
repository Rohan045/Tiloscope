import React, { useState } from 'react';
import UserGrid from '../components/userGrid';
import Sidebar from '../components/sidebar';
import Leaderboard from '../components/leaderboard';
import Drawer from '@mui/material/Drawer';
import { ArrowRight } from 'lucide-react';

function Feed() {
    const [open, setOpen] = useState(false);
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    var userGrids = [
        {
            'name': 'Rohan',
            'points': 52,
            'rank': 1,
            'upvotes': 10
        },
        {
            'name': 'Vishal',
            'points': 52,
            'rank': 2,
            'upvotes': 8
        },
        {
            'name': 'Soumya',
            'points': 52,
            'rank': 3,
            'upvotes': 6
        },
        {
            'name': 'Arpita',
            'points': 52,
            'rank': 4,
            'upvotes': 4
        },
        {
            'name': 'Rajib',
            'points': 52,
            'rank': 5,
            'upvotes': 2
        }
    ]
    return <>
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div class='sm:hidden w-[30px]'><button onClick={toggleDrawer(true)}><ArrowRight /></button>Menu</div>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <Sidebar/>
            </Drawer>
            <div className='overflow-y-scroll border-solid border-r-2 border-l-2 border-l-teal-200 border-r-orange-200 scrollbar-hide h-screen sm:w-2/4 w-full divide-y divide-teal-200'>
                {userGrids.map((user) => {
                    return <UserGrid name={user.name} rank={user.rank} upvotes={user.upvotes} />
                })}
            </div>
            <Leaderboard />
        </div>
    </>
}

export default Feed;