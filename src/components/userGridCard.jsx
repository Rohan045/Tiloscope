import React from 'react';

function UserGridCard(props) {
    return <>
        <div class='shadow border-solid border-2 h-full w-full font-serif'>
            <div class='flex border-solid border-b-2 p-2 bg-gradient-to-r from-indigo to-gray-300'>
                <div class='rounded-full h-[70px] w-[70px] border-solid border-2'>
                    
                </div>
                <div class='h-[70px] place-content-center pl-4 text-xl'>{props.name}</div>
            </div>
            <p class='pl-3'>Rank - #{props.rank}</p>
            <p class='pl-3'>Upvotes - {props.upvotes}</p>
        </div>
    </>
}

export default UserGridCard;