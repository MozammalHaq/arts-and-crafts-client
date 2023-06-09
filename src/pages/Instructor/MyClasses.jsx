import { useEffect, useContext, useState } from 'react';
import SectionTitle from '../../components/Shared/SectionTitle';
import { AuthContext } from '../../providers/AuthProvider';

const MyClasses = () => {
    const [classes, setClasses] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {
                // const uEmail = user?.email;
                console.log(data)
                const myAllClass = data.filter(myClass => myClass?.instructorEmail === user?.email);
                setClasses(myAllClass)
            })
    }, [])

    return (
        <div className='mx-5'>
            <SectionTitle title="My All Class">
                Total Class: {classes.length}
            </SectionTitle>
        </div>
    );
};

export default MyClasses;