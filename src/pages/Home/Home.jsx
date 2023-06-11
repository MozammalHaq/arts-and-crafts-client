import Comments from "./Comments";
import PopularClass from "./PopularClass";
import PopularInstructor from "./PopularInstructor";
import TopSlides from "./TopSlides";

const Home = () => {
    return (
        <div>
            <TopSlides/>
            <PopularClass/>
            <PopularInstructor/>
            <Comments/>
        </div>
    );
};

export default Home;