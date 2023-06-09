// import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Shared/Button';

const ClassCard = ({ item }) => {
    const { _id, classImage, className, instructorName, availableSeats, price, enroll } = item;
    // const [disabled, setDisabled] = useState(false);

    // if (item.seats === 0) {
    //     setDisabled(true)
    // }

    return (
        <div className='shadow shadow-yellow-200 rounded-md p-5 hover:shadow-yellow-500'>
            <img className='rounded-md' src={classImage} alt="" />
            <h3 className='text-2xl my-3'>Item: <span className='text-pink-600 font-semibold'>{className}</span></h3>
            <h3 className='text-xl'>Instructor: <span className='text-purple-300'>{instructorName}</span></h3>
            <div className='flex my-3 justify-between font-semibold'>
                <span>Seats: <span className='text-pink-500'>{availableSeats}</span></span>
                <span>Enrolled: <span className='text-pink-500'>{enroll}</span></span>
                <span>Price: <span className='text-pink-500'>{price}</span></span>
            </div>
            <Link to={`/classDetails/${_id}`}>
                <button
                    className={` ${availableSeats === 0 ? 'bg-red-600 disabled  text-white font-semibold py-2 px-4 rounded-md' : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-pink-500 hover:to-red-500 text-white font-semibold py-2 px-4 rounded-md'}`}
                >Select</button>
            </Link>
        </div>
    );
};

export default ClassCard;