import React from 'react';
import Container from '../../components/Shared/Container';
import SectionTitle from '../../components/Shared/SectionTitle';
import { Link, useLoaderData } from 'react-router-dom';

const Classes = () => {
    const data = useLoaderData();

    return (
        <Container>
            <SectionTitle title="All Classes">Total Class: {data.length}</SectionTitle>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='text-white uppercase'>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>Instructor</th>
                            <th>Instructor Email</th>
                            <th>Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            data?.map((item, i) => <tr key={item._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask rounded-full w-12 h-12">
                                                <img src={item?.classImage} alt="Instructor" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="font-bold">{item?.className}</div>
                                </td>
                                <td>
                                    <div className="font-bold">{item?.instructorName}</div>
                                </td>
                                <td>{item?.instructorEmail}</td>
                                <td>{item?.availableSeats}</td>
                                <td>{item?.enroll}</td>
                                <td>$ {item?.price}</td>
                                <td>
                                    <Link to={`/classDetails/${item._id}`} className={` ${item?.availableSeats === 0 ? 'bg-red-600 disabled  text-white font-semibold py-2 px-4 rounded-md' : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-pink-500 hover:to-red-500 text-white font-semibold py-2 px-4 rounded-md'}`}>Select</Link>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </Container>
    );
};

export default Classes;