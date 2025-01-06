import React from 'react';

function DefaultFeedSkeleton() {
    return (
        <div class="animate-pulse h-[380px] inline">
            <div class="flex p-2">
                <div class="rounded-full bg-slate-700 h-14 w-14"></div>
                <div class="w-full space-y-6 pl-6 pt-2">
                    <div class="h-2 bg-slate-700 rounded w-1/2"></div>
                    <div class="h-2 bg-slate-700 rounded w-1/2"></div>
                </div>
            </div>
            <div class="border-t-2 border-zinc-700 pt-7 justify-items-center">
                <div class="bg-slate-700 w-[250px] h-[250px]"></div>
            </div>  
        </div>
    );
}

export default DefaultFeedSkeleton;