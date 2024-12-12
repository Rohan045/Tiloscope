import React from 'react';
import Grid from './grid';
import { useState } from 'react';
import { ArrowBigUp, MessageCircle } from 'lucide-react';
import UserGridCard from './userGridCard';

function UserGrid(props) {
    const gridSize = 5;
    const gridData = Array(Math.pow(gridSize, 2)).fill(null);
    const tileData = [];
    const [upvotes,setUpvotes] = useState(props.upvotes);
    const [upvoted, setUpvoted] = useState(false);
    const upvoteHandle = () => {
        setUpvoted(true);
        setUpvotes(upvotes + 1);
    }
    return <>
        <div class='md:flex items-end bg-gradient-to-l from-orange-300 to-cyan-500 w-full'>
            <Grid
                config={{
                    title: "TiloScope Board",
                    gridSize: gridSize,
                    gridData: gridData,
                    tileData: tileData,
                    feedGrid: true
                }}
            />
            <div class='inline w-1/3'>
                <UserGridCard name={props.name} rank={props.rank} upvotes={upvotes}/>
                <div class='flex pb-[12px] pt-[12px]'>
                    <div class='w-1/2'>
                        <button class='justify-items-center w-full h-[50px] bg-transparent hover:bg-cyan-600 rounded-xl shadow-2xl' onClick={upvoteHandle} disabled={upvoted}>
                            {upvoted ? <ArrowBigUp class='fill-black w-full'/> : <ArrowBigUp class='hover:animate-bounce hover:fill-black w-full' />}
                        </button>
                    </div>
                    <div class='w-[4px]' />
                    <div class='w-1/2'>
                        <button class='justify-items-center w-full h-[50px] bg-transparent hover:bg-cyan-600 rounded-xl shadow-2xl'>
                            <MessageCircle />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default UserGrid;