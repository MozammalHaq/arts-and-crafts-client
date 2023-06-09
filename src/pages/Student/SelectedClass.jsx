import React, { useContext, useEffect, useState } from 'react';
import SectionTitle from '../../components/Shared/SectionTitle';
import { AuthContext } from '../../providers/AuthProvider';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const SelectedClass = () => {
    const [classes, setClasses] = useState([]);
    console.log(classes)
    const { user } = useContext(AuthContext);
    

    useEffect(() => {
        fetch('http://localhost:5000/enrolled')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const myAllClass = data.filter(myClass => myClass?.email === user?.email);
                setClasses(myAllClass)
            })
    }, [])

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/enrolled/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your toy has been deleted.',
                                'success'
                            )
                            const remaining = toys.filter(booking => booking._id !== id);
                            setToys(remaining)
                        }
                    })
            }
        })
    }

    return (
        <div className='mx-5'>
            <SectionTitle title="My Selected Classes">Total Class: {classes.length}</SectionTitle>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='text-white uppercase'>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Class</th>
                            <th>Payment</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            classes?.map((item, i) => <tr key={item._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask rounded-full w-12 h-12">
                                                <img src={item.classImage} alt="Instructor" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="font-bold">{item.className}</div>
                                </td>
                                <td>
                                    <button className='btn bg-lime-600 border-0 text-white '>Pay</button>
                                </td>
                                <td>
                                    <button onClick={()=> handleDelete(item._id)} className='btn bg-red-600 border-0 text-white '><FaTrashAlt /></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClass;