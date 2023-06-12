import React, { useState } from 'react';
import Container from '../../components/Shared/Container';
import useAuth from '../../hooks/useAuth';
import { useEffect } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import SectionTitle from '../../components/Shared/SectionTitle';
import EnrolledCard from './EnrolledCard';

const EnrolledClass = () => {
    const { user } = useAuth()
    const [classes, setClasses] = useState([]);
    // console.log(classes);
    const [purse, setPurse] = useState([])
    console.log(purse);

    const [axiosSecure] = useAxiosSecure();
    const getPayment = async () => {
        const data = await axiosSecure?.get(`/payments/${user?.email}`);
        const menuId = data?.data[0]?.menuItems;

        const match = classes?.filter(obj => menuId?.includes(obj?._id));
        setPurse(match);
    }

    const getEnrolled = async () => {
        const data = await axiosSecure?.get('/classes');
        // console.log(data.data);
        setClasses(data?.data)
    }

    useEffect(() => {
        getPayment()
    }, [])

    useEffect(() => {
        getEnrolled()
    }, [])


    return (
        <Container>
            <SectionTitle title="Enrolled Classes"></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    purse.map(enr => <EnrolledCard
                        key={enr._id}
                        enr={enr}
                    ></EnrolledCard>)
                }
            </div>
        </Container>
    );
};

export default EnrolledClass;