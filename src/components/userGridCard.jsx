import React from 'react';
import { ArrowBigUp } from 'lucide-react';
import { useState } from 'react';

function UserGridCard(props) {
    const [upvotes, setUpvotes] = useState(props.upvotes);
    const [upvoted, setUpvoted] = useState(false);
    const upvoteHandle = () => {
        setUpvoted(true);
        setUpvotes(upvotes + 1);
    }
    return <>
        <div class='rounded-lg font-serif pl-5'>
            <div class='flex pb-2'>
                <div class='rounded-full h-[45px] w-[45px] border-solid border-2 bg-slate-800'>
                    {props.imageSrc ? <img
                        src={props.imageSrc}
                        alt="dp"
                        className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]"
                    /> :
                        <></>}
                </div>
                <div class='w-4'></div>
                <div class='place-content-center text-l'>{props.name}</div>
            </div>
            <div class='flex justify-items-end'>
                <div class='inline'>
                    <div class='rounded-tl-lg text-sm'>
                        Rank - #{props.rank}
                    </div>
                    <div class='rounded-tr-lg text-sm'>
                        Upvotes - {upvotes}
                    </div>
                </div>
                <button class='flex' onClick={upvoteHandle} disabled={upvoted}>
                    {upvoted ? <ArrowBigUp class='fill-white w-full' /> : <ArrowBigUp class='hover:animate-bounce hover:fill-black w-full' />}
                    <div class='place-content-center'>Upvote</div>
                </button>
            </div>
            <div class='h-2'></div>
        </div>
    </>
}

export default UserGridCard;