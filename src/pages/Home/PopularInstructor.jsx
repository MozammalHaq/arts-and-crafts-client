import React, { useEffect, useState } from 'react';
import Container from '../../components/Shared/Container';
import SectionTitle from '../../components/Shared/SectionTitle';
import Instructor from '../../components/Instructor';

const PopularInstructor = () => {
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
                    title="Popular Instructors"
                ></SectionTitle>
                <div className='grid md:grid-cols-2 gap-5'>
                    {
                        instructors.map(instructor => <Instructor
                            key={instructor.id}
                            instructor={instructor}
                        ></Instructor>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default PopularInstructor;