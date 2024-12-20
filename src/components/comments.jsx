import React from 'react';

function Comments(props){
    return <>
        <div class='sm:w-1/2 sm:h-1/2 bg-white absolute top-50 bottom-50'>
            {props.name} comment's
        </div>
    </>
}

export default Comments;