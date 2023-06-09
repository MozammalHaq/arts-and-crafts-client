import React, { useEffect, useState } from 'react';
import Container from '../../components/Shared/Container';
import SectionTitle from '../../components/Shared/SectionTitle';
import ClassCard from '../../components/ClassCard';
import { Link } from 'react-router-dom';

const PopularClass = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {
                const sorted = data.sort((b, a) => parseFloat(a?.enroll) - parseFloat(b?.enroll))
                setClasses(sorted.slice(0, 6))
            })
    }, [])

    return (
        <Container>
            <SectionTitle
                title="Popular Classes"
            ></SectionTitle>
            <div className='grid md:grid-cols-3 gap-7'>
                {
                    classes?.map(item => <ClassCard
                        key={item._id}
                        item={item}
                    ></ClassCard>)
                }
            </div>
            <div className='flex justify-center mt-12'>
                <Link to='/classes' className='bg-gradient-to-r from-blue-500 to-purple-500 hover:from-pink-500 hover:to-red-500 text-white font-semibold py-2 px-4 rounded-md'>All Classes</Link>
            </div>
        </Container>
    );
};

export default PopularClass;