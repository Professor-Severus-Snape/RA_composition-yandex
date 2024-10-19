import { ReactNode } from 'react';
import { v4 } from 'uuid';
import './news.css';

interface INewsProps {
  titles: string[];
  activeTitle: string;
  date: string;
  items: {
    icon: string;
    text: string;
  }[];
  children?: ReactNode;
}

const News = ({ titles, activeTitle, date, items, children }: INewsProps) => {
  const titleItems = titles.map((item) => {
    const nameOfClass = `news__title-item${
      item === activeTitle ? ' news__title-item_active' : ''
    }`;

    return (
      <li key={v4()} className={nameOfClass}>
        {item}
      </li>
    );
  });

  const newsItems = items.map((el) => {
    return (
      <li key={v4()} className="news__item">
        <img src={el.icon} alt="иконка" className="news__item-image" />
        <p className="news__item-text">{el.text}</p>
      </li>
    );
  });

  return (
    <section className="news">
      <header className="news__header">
        <ul className="news__title-list">{titleItems}</ul>
        <div className="news__date">{date}</div>
      </header>
      <ul className="news__list">{newsItems}</ul>
      {children}
    </section>
  );
};

export default News;
