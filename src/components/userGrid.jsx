import React from 'react';
import Grid from './grid';
import UserGridCard from './userGridCard';

function UserGrid(props) {
    const gridSize = 5;
    const gridData = Array(Math.pow(gridSize, 2)).fill(null);
    const tileData = [];
    return <>
        <div class='inline items-end'>
            <div class='inline'>
                <UserGridCard name={props.name} rank={props.rank} upvotes={props.upvotes}/>
                {/* <div class='flex pb-[12px] pt-[12px]'>
                    <div class='w-1/2'>
                        <button class='justify-items-center w-full h-[50px] bg-transparent hover:bg-cyan-600 rounded-xl shadow-2xl' onClick={upvoteHandle} disabled={upvoted}>
                            {upvoted ? <ArrowBigUp class='fill-black w-full' /> : <ArrowBigUp class='hover:animate-bounce hover:fill-black w-full' />}
                        </button>
                    </div>
                    <div class='w-[4px]' />
                    <div class='w-1/2'>
                        <button onClick={handleModal(true)} class='justify-items-center w-full h-[50px] bg-transparent hover:bg-cyan-600 rounded-xl shadow-2xl'>
                            <MessageCircle />
                        </button>
                    </div>
                </div> */}
            </div>
            <Grid
                config={{
                    title: "TiloScope Board",
                    gridSize: gridSize,
                    gridData: gridData,
                    tileData: tileData,
                    feedGrid: true
                }}
            />
        </div>
    </>
}

export default UserGrid;