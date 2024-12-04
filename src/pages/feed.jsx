import React from 'react';
import UserGrid from '../components/userGrid';
import Sidebar from '../components/sidebar';
import Leaderboard from '../components/leaderboard';

function Feed() {
    var userGrids = [];
    return <>
        <div style={{display:'flex'}}>
            <Sidebar />
            <div className='overflow-y-scroll border-solid border-r-2 border-t-2 scrollbar-hide h-screen w-2/4 divide-y'>
                <UserGrid color='red' />
                <UserGrid color='blue' />
                <UserGrid color='black' />
                <UserGrid color='violet' />
            </div>
            <Leaderboard />
        </div>
    </>
}

export default Feed;