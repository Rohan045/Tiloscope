import React from 'react';
import Grid from './grid';
import { ArrowBigUp, MessageCircle } from 'lucide-react';

function UserGrid(props) {
    const gridSize = 5;
    const gridData = Array(Math.pow(gridSize, 2)).fill(null);
    const tileData = [];
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
                <button class='justify-items-center w-[100px] h-[50px] bg-transparent hover:bg-cyan-600 rounded-xl shadow-xl'>
                    <ArrowBigUp />
                </button>
                <div class='h-[12px]'></div>
            </div>
            <div class='w-[4px]'/>
            <div class='inline'>
                <button class='justify-items-center w-[100px] h-[50px] bg-transparent hover:bg-cyan-600 rounded-xl shadow-xl'>
                    <MessageCircle />
                </button>
                <div class='h-[12px]'></div>
            </div>
        </div>
    </>
}

export default UserGrid;