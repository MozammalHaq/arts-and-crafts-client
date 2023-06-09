import { Link, useLoaderData } from "react-router-dom";
import Container from "./Shared/Container";
import SectionTitle from "./Shared/SectionTitle";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const ClassDetails = () => {
    const { user } = useContext(AuthContext)
    const email = user?.email;

    const data = useLoaderData();
    console.log(data)
    const { _id, instructorName, className, classImage, availableSeats, instructorEmail, price, enroll } = data;
    const enrolledData = { id: _id, instructorName, className, classImage, email };
    const handleSubmit = (e) => {
        e.preventDefault();

        const availableNumber = parseFloat(availableSeats);
        if (availableNumber == 0) {
            return Swal.fire('Seat Not Available')
        }
        const nowAvailable = availableNumber - 1;
        const enrolled = parseInt(enroll) + 1;

        const updatedSeats = { availableSeats: nowAvailable, enroll: enrolled }

        // send data to server
        fetch(`http://localhost:5000/classes/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedSeats)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                enrolledClass(enrolledData)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Update successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            });

    }

    const enrolledClass = data => {
        fetch('http://localhost:5000/enrolled', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <Container>
            <SectionTitle
                title="Class Details"
            >
                {className}
            </SectionTitle>
            <div className="bg-gradient-to-r from-[#1D1E23] font-semibold border-l to-pink-800 w-1/2 mx-auto rounded-lg p-10 shadow-md mb-10">
                <div className="space-y-4 mb-3" >
                    <img src={classImage} alt="Class" className="w-24 h-24 rounded-full" />
                    <h2 className="text-xl text-white font-bold">Course: {className}</h2>
                    <p className="text-white">Instructor: {instructorName}</p>
                    <p className="text-white">Available Seats: {availableSeats}</p>
                    <p className="text-white">Price: ${price}</p>
                    <a href={`mailto:${instructorEmail}`} className="text-blue-500 hover:underline">
                        Contact Instructor
                    </a>
                </div>
                <form>
                    {availableSeats !== 0 && <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-yellow-500">Get a seat</span>
                        </label>
                        <input type="text" readOnly name="aSeat" value="1" placeholder="Type here" className="input input-bordered bg-opacity-0 input-primary w-full max-w-xs" />
                    </div>}
                    <button onClick={handleSubmit} className="btn mt-5">Enroll</button>
                </form>
            </div>
        </Container>
    );
};

export default ClassDetails;