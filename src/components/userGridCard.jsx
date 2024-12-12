import React from 'react';

function UserGridCard(props) {
    return <>
        <div class='shadow-2xl rounded-lg font-serif bg-gradient-to-r from-indigo to-gray-300 w-full md:p-0 p-3'>
            <div class='flex rounded-lg p-2 border-b-2 border-b-orange-200'>
                <div class='rounded-full h-[70px] w-[70px] border-solid border-2'>
                    
                </div>
                <div class='h-[70px] place-content-center pl-4 text-xl'>{props.name}</div>
            </div>
            <div class='flex'>
                <div class='p-3 w-1/2 rounded-tl-lg border-solid border-r-2 border-r-orange-200'>
                    Rank<br/>#{props.rank}
                </div>
                <div class='p-3 w-1/2 rounded-tr-lg border-solid border-l-2 border-l-orange-200'>
                    Upvotes<br/>{props.upvotes}
                </div>
            </div>
        </div>
    </>
}

export default UserGridCard;