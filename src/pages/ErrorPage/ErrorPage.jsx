import { Link, useRouteError } from "react-router-dom";
import fof from '../../../src/assets/nf404.gif'
import SectionTitle from "../../components/Shared/SectionTitle";


const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="flex justify-center items-center h-screen text-center bg-red-200">
            <div>
                <h1 className="text-6xl text-orange-500">Oops!</h1>
                <img className="w-1/2 block mx-auto my-10" src={fof} alt="" />
                <p className="text-red-500">Sorry, an unexpected error has occurred.</p>
                <p className="text-red-500">
                    <i>{error.statusText || error.message}</i>
                </p>
                <SectionTitle
                    title="Arts & Crafts School"
                ></SectionTitle>
                <p> <button className="btn">Contact: 0088012345679</button> OR <Link className="btn" to='/'>Go Home</Link></p>
                <p className="mt-6 text-blue-700"><small>&copy; {new Date().getFullYear()} - All right reserved by ARTS & CRAFT School</small></p>
            </div>
        </div>
    );
};

export default ErrorPage;