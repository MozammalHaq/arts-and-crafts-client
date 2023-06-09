import { useContext } from 'react';
import SectionTitle from '../../components/Shared/SectionTitle';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const AddClass = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        fetch('http://localhost:5000/classes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId || !data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Data Added Successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    };
    return (

        <div className='w-full'>
            <SectionTitle
                title="Add A Class"
            >
            </SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)} className="mx-5 mx-auto p-8 mb-8 bg-white rounded-md shadow-md">
                <div className="mb-6">
                    <label htmlFor="className" className="block text-gray-700 text-sm font-bold mb-2">
                        Class Name
                    </label>
                    <input
                        type="text"
                        id="className"
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        {...register('className', { required: true })}
                    />
                    {errors.className && <span className="text-red-500">Class Name is required</span>}
                </div>
                <div className="mb-6">
                    <label htmlFor="classImage" className="block text-gray-700 text-sm font-bold mb-2">
                        Class Image url
                    </label>
                    <input
                        type="text"
                        id="classImage"
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        {...register('classImage', { required: true })}
                    />
                    {errors.classImage && <span className="text-red-500">Class Image url is required</span>}
                </div>
                <div className="mb-6">
                    <label htmlFor="instructorName" className="block text-gray-700 text-sm font-bold mb-2">
                        Instructor Name
                    </label>
                    <input
                        defaultValue={user?.displayName}
                        type="text"
                        id="instructorName"
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        {...register('instructorName')}
                        readOnly
                    />
                    {errors.instructorName && <span className="text-red-500">Instructor Name is required</span>}
                </div>
                <div className="mb-6">
                    <label htmlFor="instructorEmail" className="block text-gray-700 text-sm font-bold mb-2">
                        Instructor Email
                    </label>
                    <input
                        defaultValue={user?.email}
                        type="email"
                        id="instructorEmail"
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        {...register('instructorEmail')}
                        readOnly
                    />
                    {errors.instructorEmail && <span className="text-red-500">Instructor Email is required</span>}
                </div>
                <div className="mb-6">
                    <label htmlFor="availableSeats" className="block text-gray-700 text-sm font-bold mb-2">
                        Available Seats
                    </label>
                    <input
                        type="number"
                        id="availableSeats"
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        {...register('availableSeats', { required: true })}
                    />
                    {errors.availableSeats && <span className="text-red-500">Available Seats is required</span>}
                </div>
                <div className="mb-6">
                    <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">
                        Price
                    </label>
                    <input
                        type="number"
                        id="price"
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        {...register('price', { required: true })}
                    />
                    {errors.price && <span className="text-red-500">Price is required</span>}
                </div>
                <div className="mb-6">
                    <label htmlFor="status" className="block text-gray-700 text-sm font-bold mb-2">
                        Status
                    </label>
                    <input
                        type="text"
                        id="status"
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        {...register('status')} // Register the status field with React Hook Form
                        value="pending"
                        readOnly
                    />
                </div>
                <div className="mb-6">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddClass;