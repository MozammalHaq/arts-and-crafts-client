import Extra from "./Extra";
import PopularClass from "./PopularClass";
import PopularInstructor from "./PopularInstructor";
import TopSlides from "./TopSlides";



const Home = () => {
    return (
        <div>
            <TopSlides/>
            <PopularClass/>
            <PopularInstructor/>
            <Extra/>
        </div>
    );
};

export default Home;