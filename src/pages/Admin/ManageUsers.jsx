import React from 'react';
import Container from '../../components/Shared/Container';
import { useLoaderData } from 'react-router-dom';
import SectionTitle from '../../components/Shared/SectionTitle';
import { FaUserAlt } from 'react-icons/fa';

const ManageUsers = () => {
    const users = useLoaderData();
    console.log(users)
    return (
        <Container>
            <SectionTitle
                title="Manage Users"
            >
                Total User: {users.length}
            </SectionTitle>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead className='text-white uppercase'>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Instructor</th>
                            <th>Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td><FaUserAlt /></td>
                                <td><FaUserAlt /></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </Container>
    );
};

export default ManageUsers;