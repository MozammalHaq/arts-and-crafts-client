import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const TopSlides = () => {
    return (
        <Carousel>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Neolithic_Majiayao_Culture_Pottery_03.jpg/220px-Neolithic_Majiayao_Culture_Pottery_03.jpg" />
                <p className="legend">Drawing</p>
            </div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh5DMep-cAmLCC-UH4Ih4bNpalQKtttELJPQ&usqp=CAU" />
                <p className="Drawing">Legend 2</p>
            </div>
            <div>
                <img src="https://www.fashionlady.in/wp-content/uploads/2017/10/paper-craft-ideas-for-decoration-For-house.jpg" />
                <p className="legend">Paper Craft</p>
            </div>
        </Carousel>
    );
};

export default TopSlides;