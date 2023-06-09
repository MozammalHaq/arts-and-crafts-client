import React, { useEffect, useState } from 'react';
import Container from '../../components/Shared/Container';
import SectionTitle from '../../components/Shared/SectionTitle';

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('instructors.json')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])

    return (
        <div className='my-20'>
            <Container>
                <SectionTitle
                    title="All Instructors"
                >
                    Total Instructor: {instructors.length
                    }
                </SectionTitle>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className='text-white uppercase'>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                instructors?.map((instructor, i) => <tr key={instructor.id}>
                                    <th>{i + 1}</th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask rounded-full w-12 h-12">
                                                    <img src={instructor.image} alt="Instructor" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="font-bold">{instructor.name}</div>
                                    </td>
                                    <td>
                                        <a href={`mailto:${instructor.email}`} className="text-blue-500 hover:underline">
                                            {instructor.email}
                                        </a>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </Container>
        </div>
    );
};

export default Instructors;