import { useLoaderData } from 'react-router-dom';
import SectionTitle from '../../components/Shared/SectionTitle';

const ManageClass = () => {
    const classes = useLoaderData();
    console.log(classes)
    return (
        <div className='px-5'>
            <SectionTitle
                title="All Classes"
            >
                Total Classes {classes.length}
            </SectionTitle>
            <div className="overflow-x-auto">
                <table className="table border">
                    {/* head */}
                    <thead className='text-white uppercase bg-pink-800'>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>Instructor</th>
                            <th>Email</th>
                            <th>Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            classes?.map((item, i) => <tr key={item._id}>
                                {console.log(item)}
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
                                    <div className="font-bold text-info">{item?.className}</div>
                                </td>
                                <td>
                                    <div className="font-bold">{item?.instructorName}</div>
                                </td>
                                <td className='text-info'>{item?.instructorEmail}</td>
                                <td>{item?.availableSeats}</td>
                                <td className='text-info'>$ {item?.price}</td>
                                <td><button>{item?.status ? item?.status : "pending"}</button></td>
                                <td><div className="btn-group btn-group-vertical lg:btn-group-horizontal">
                                    <button className="btn btn-outline btn-info text-xs btn-xs">Approve</button>
                                    <button className="btn btn-outline btn-info text-xs btn-xs">Deny</button>
                                    <button className="btn btn-outline btn-info text-xs btn-xs">Feedback</button>
                                </div></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClass;