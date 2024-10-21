import play from '../../assets/icon-play.svg';
import './articleLive.css';

interface IArticleLiveProps {
  live: {
    id: string;
    item: string;
    canal: string;
  };
}

const ArticleLive = ({ live }: IArticleLiveProps) => {
  return (
    <a href="#" className="article__text live">
      <img src={play} className="live__icon" />
      <span className="live__item">{live.item}</span>
      <span className="live__canal">{live.canal}</span>
    </a>
  );
};

export default ArticleLive;
