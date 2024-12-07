import React from 'react';
import UserGrid from '../components/userGrid';
import Sidebar from '../components/sidebar';
import Leaderboard from '../components/leaderboard';

function Feed() {
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
            <div className='overflow-y-scroll border-solid border-r-2 border-l-2 border-l-teal-200 border-r-orange-200 scrollbar-hide h-screen w-2/4 divide-y divide-teal-200'>
                {userGrids.map((user) => {
                    return <UserGrid name={user.name} rank={user.rank} upvotes={user.upvotes}/>
                })}
            </div>
            <Leaderboard />
        </div>
    </>
}

export default Feed;