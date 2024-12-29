import React, { useState } from 'react';
import UserGrid from '../components/userGrid';
import Sidebar from '../components/sidebar';
import Leaderboard from '../components/leaderboard';

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
        <div class='flex pl-[150px]'>
            <Sidebar />
            <div className='overflow-y-scroll overflow-x-scroll border-solid border-r-2 border-l-2 pl-4 pr-4 scrollbar-hide h-screen w-max divide-y divide-y-white'>
                {userGrids.map((user) => {
                    return <UserGrid name={user.name} rank={user.rank} upvotes={user.upvotes} />
                })}
            </div>
            <Leaderboard />
        </div>
    </>
}

export default Feed;