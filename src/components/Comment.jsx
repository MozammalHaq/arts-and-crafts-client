import React from 'react';

const Comment = ({comment}) => {
    console.log(comment);
    return (
        <div className='w-1/2 flex flex-col text-center border p-8 bg-slate-200 bg-opacity-40 rounded-2xl border-primary'>
            <img className='w-48 rounded-full mx-auto' src={comment.image} alt="" />
            <h2 className='my-4 text-3xl font-semibold text-pink-700'>{comment.name}</h2>
            <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, velit impedit id numquam ut cupiditate? Quas, repellendus accusamus nobis quam quibusdam non magni voluptatum nisi. Dolores ducimus eveniet ex voluptates!</p>
            <a className="link link-info">more ...</a>
        </div>
    );
};

export default Comment;