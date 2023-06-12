import { Helmet } from "react-helmet-async";
import Comments from "./Comments";
import PopularClass from "./PopularClass";
import PopularInstructor from "./PopularInstructor";
import TopSlides from "./TopSlides";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Arts & Cultural - Home</title>
            </Helmet>
            <TopSlides />
            <PopularClass />
            <PopularInstructor />
            <Comments />
        </div>
    );
};

export default Home;