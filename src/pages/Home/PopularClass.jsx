import React, { useEffect, useState } from 'react';
import Container from '../../components/Shared/Container';
import SectionTitle from '../../components/Shared/SectionTitle';
import ClassCard from '../../components/ClassCard';

const PopularClass = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('classes.json')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])

    return (
        <Container>
            <SectionTitle
                title="Popular Classes"
            ></SectionTitle>
            <div className='grid md:grid-cols-3 gap-7'>
                {
                    classes?.map(item => <ClassCard
                        key={item.id}
                        item={item}
                    ></ClassCard>)
                }
            </div>
        </Container>
    );
};

export default PopularClass;