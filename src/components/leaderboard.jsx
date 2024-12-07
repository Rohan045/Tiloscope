import React from 'react';
import LeaderboardUser from './leaderboardUser';

function Leaderboard() {
    var leaderBoard = [
        {
            'name': 'Rohan',
            'points': 52,
            'rank': 1,
        },
        {
            'name': 'Vishal',
            'points': 52,
            'rank': 2,
        },
        {
            'name': 'Soumya',
            'points': 52,
            'rank': 3,
        },
        {
            'name': 'Arpita',
            'points': 52,
            'rank': 4,
        },
        {
            'name': 'Rajib',
            'points': 52,
            'rank': 5,
        }
    ];
    return <>
        <div class='w-1/4 bg-gradient-to-r from-orange-300 to-pink-500 divide-y'>
            <div class='p-2 h-[50px] font-bold font-mono'>Leaderboard</div>
            {leaderBoard.map((user) => {
                return <LeaderboardUser name={user.name} points={user.points} rank={user.rank} />
            })}
        </div>
    </>
}

export default Leaderboard;