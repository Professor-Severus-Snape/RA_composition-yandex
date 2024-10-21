import banner from '../../assets/banner.jpeg';
import './banner.css';

const Banner = () => {
  return (
    <section className="banner">
      <a href="#" className="banner__link">
        <img src={banner} className="banner__image" alt="banner" />
      </a>
    </section>
  )
};

export default Banner;
