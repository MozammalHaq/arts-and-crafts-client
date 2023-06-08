import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import banner1 from '../../assets/images/banner/banner-1.jpg'
import banner2 from '../../assets/images/banner/banner-2.jpg'
import banner3 from '../../assets/images/banner/banner-3.jpg'
import banner4 from '../../assets/images/banner/banner-4.jpg'
import banner5 from '../../assets/images/banner/banner-5.jpg'
import banner6 from '../../assets/images/banner/banner-6.jpg'
import banner7 from '../../assets/images/banner/banner-7.jpg'

const TopSlides = () => {
    return (
        <Carousel>
            <div>
                <img src={banner1} />
                <p className="legend">Decorative Art</p>
            </div>
            <div>
                <img src={banner2} />
                <p className="legend">Applied Art</p>
            </div>
            <div>
                <img src={banner3} />
                <p className="legend">Pottery Painting</p>
            </div>
            <div>
                <img src={banner4} />
                <p className="legend">Paper Craft</p>
            </div>
            <div>
                <img src={banner5} />
                <p className="legend">Painting</p>
            </div>
            <div>
                <img src={banner6} />
                <p className="legend">Paint Making</p>
            </div>
            <div>
                <img src={banner7} />
                <p className="legend">Jewelry</p>
            </div>
        </Carousel>
    );
};

export default TopSlides;