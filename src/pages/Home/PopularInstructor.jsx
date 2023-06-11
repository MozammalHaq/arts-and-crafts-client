import React, { useEffect, useState } from 'react';
import Container from '../../components/Shared/Container';
import SectionTitle from '../../components/Shared/SectionTitle';
import Instructor from '../../components/Instructor';

const PopularInstructor = () => {
    const [instructors, setInstructors] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
                const inss = data.filter(ins => ins?.rol === 'instructor')
                setInstructors(inss);
            })
    }, [])

    return (
        <div className='my-20'>
            <Container>
                <SectionTitle
                    title="Popular Instructors"
                ></SectionTitle>
                <div className='grid md:grid-cols-2 gap-5'>
                    {
                        instructors.slice(0,6).map(instructor => <Instructor
                            key={instructor._id}
                            instructor={instructor}
                        ></Instructor>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default PopularInstructor;