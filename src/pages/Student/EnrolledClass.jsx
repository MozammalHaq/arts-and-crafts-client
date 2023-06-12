import React from 'react';
import Container from '../../components/Shared/Container';
import useAuth from '../../hooks/useAuth';
import { useEffect } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import SectionTitle from '../../components/Shared/SectionTitle';

const EnrolledClass = () => {
    const { user } = useAuth()

    const [axiosSecure] = useAxiosSecure();
    const getPayment = async () => {
        const data = await axiosSecure.get(`/payments/${user?.email}`);
        // const matchCartData = data.data[0]
        console.log(data?.data[0]?.menuItems);
    }

    useEffect(() => {
        getPayment()
    }, [])


    return (
        <Container>
            <SectionTitle title="Enrolled Classes"></SectionTitle>
        </Container>
    );
};

export default EnrolledClass;