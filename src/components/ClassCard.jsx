// import { useState } from 'react';
import Button from './Shared/Button';

const ClassCard = ({ item }) => {
    // const [disabled, setDisabled] = useState(false);

    // if (item.seats === 0) {
    //     setDisabled(true)
    // }

    return (
        <div className='shadow shadow-yellow-200 rounded-md p-5 hover:shadow-yellow-500'>
            <img className='rounded-md' src={item.image} alt="" />
            <h3 className='text-2xl my-3'>Item: <span className='text-pink-600 font-semibold'>{item.name}</span></h3>
            <h3 className='text-xl'>Instructor: <span className='text-purple-300'>{item.instructorName}</span></h3>
            <div className='flex my-3 justify-between font-semibold'>
                <span>Seats: <span className='text-pink-500'>{item.seats}</span></span>
                <span>Price: <span className='text-pink-500'>{item.price}</span></span>
            </div>
            <Button value="Select" />
        </div>
    );
};

export default ClassCard;