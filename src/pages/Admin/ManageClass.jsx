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
                <table className="table">
                    {/* head */}
                    <thead className='text-white uppercase'>
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
                                <td>{item?.seats}</td>
                                <td>$ {item?.price}</td>
                                <td>{item.status}</td>
                                <td><button>Approved</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClass;