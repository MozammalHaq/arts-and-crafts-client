import React, { useEffect, useState } from 'react';
import Container from '../../components/Shared/Container';
import SectionTitle from '../../components/Shared/SectionTitle';
import ClassCard from '../../components/ClassCard';

const PopularClass = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setClasses(data.slice(0,6)))
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
        </Container>
    );
};

export default PopularClass;