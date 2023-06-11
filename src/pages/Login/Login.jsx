import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../../components/Shared/SocialLogin';
import Container from '../../components/Shared/Container';
import SectionTitle from '../../components/Shared/SectionTitle';


const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [show, setShow] = useState(true);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/"

    const handleShow = () => {
        setShow(!show)
        console.log(show)
    }

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Login Success fully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <Container>
            <Helmet>
                <title>Arts & Crafts School - Login</title>
            </Helmet>
            <SectionTitle title="Login Page">Login Now</SectionTitle>
            <div className="hero bg-opacity-0  mb-6 bg-base-200">
                <div className="hero-content w-1/2">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={show ? "password" : "text"} name="password" placeholder="password" className="input input-bordered" />

                                <div className="form-control">
                                    <label className="label cursor-pointer justify-end">
                                        <span className="label-text me-3"><span className='text-yellow-600 font-bold'>{show ? "Show" : "Hide"}</span> Password</span>
                                        <input onClick={handleShow} type="checkbox" className="toggle" />
                                    </label>
                                </div>

                                <div className='flex justify-between'>
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                    <label className="label">
                                        <Link to='/signup' className="label-text-alt link link-hover">Sign Up</Link>
                                    </label>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <SocialLogin />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Login;