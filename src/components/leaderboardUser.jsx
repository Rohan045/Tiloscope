import React from 'react';

function LeaderboardUser(props) {
    return <>
        <div class='sm:flex hidden rounded-full border-solid border-2 p-1'>
            <div className="w-9 h-9 rounded-full bg-transparent flex items-center justify-center overflow-hidden border-double border-2">
                {props.imageSrc ? (
                    <img src={props.imageSrc} alt='dp' className="w-full h-full object-cover" />
                ) : (
                    <span className="font-bold text-lg">{props.rank}</span>
                )}
            </div>
            <div class='pl-2 h-9 sm:w-full place-content-center font-serif'>
                {props.name} - {props.points}
            </div>
        </div>
    </>
}

export default LeaderboardUser;