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
        <div class='md:flex items-end bg-gradient-to-l from-orange-300 to-cyan-500'>
            <Grid
                config={{
                    title: "TiloScope Board",
                    gridSize: gridSize,
                    gridData: gridData,
                    tileData: tileData,
                    feedGrid: true
                }}
            />
            <div class='inline'>
                <UserGridCard name={props.name} rank={props.rank} upvotes={upvotes}/>
                <div class='flex pb-[1px] pt-[4px]'>
                    <div class='inline'>
                        <button class='justify-items-center w-[100px] h-[50px] bg-transparent hover:bg-cyan-600 rounded-xl shadow-xl' onClick={upvoteHandle} disabled={upvoted}>
                            {upvoted ? <ArrowBigUp class='fill-black w-full'/> : <ArrowBigUp class='hover:animate-bounce hover:fill-black w-full' />}
                        </button>
                    </div>
                    <div class='w-[4px]' />
                    <div class='inline pb-[12px]'>
                        <button class='justify-items-center w-[100px] h-[50px] bg-transparent hover:bg-cyan-600 rounded-xl shadow-xl'>
                            <MessageCircle />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default UserGrid;