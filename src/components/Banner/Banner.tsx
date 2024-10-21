import banner from '../../assets/banner.jpeg';
import './banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <a href="#" className="banner__link">
        <img src={banner} className="banner__image" alt="banner" />
      </a>
    </div>
  )
};

export default Banner;
