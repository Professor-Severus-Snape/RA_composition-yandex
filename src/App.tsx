import Article from './components/Article/Article';
import ArticleLive from './components/ArticleLive/ArticleLive';
import ArticleProgram from './components/ArticleProgram/ArticleProgram';
import ArticleVisited from './components/ArticleVisited/ArticleVisited';
import ArticleWeather from './components/ArticleWeather/ArticleWeather';
import Banner from './components/Banner/Banner';
import Currency from './components/Currency/Currency';
import Logo from './components/Logo/Logo';
import Menu from './components/Menu/Menu';
import MenuButton from './components/MenuButton/MenuButton';
import News from './components/News/News';
import SearchForm from './components/SearchForm/SearchForm';
import Sidebar from './components/Sidebar/Sidebar';
import Tooltip from './components/Tooltip/Tooltip';

import currencyData from './data/currency.json';
import liveData from './data/live.json';
import menuData from './data/menu.json';
import newsData from './data/news.json';
import programData from './data/program.json';
import sidebarData from './data/sidebar.json';
import tooltipData from './data/tooltip.json';
import visitedData from './data/visited.json';
import weatherData from './data/weather.json';

import './app.css';

const App = () => {
  return (
    <>
      <header className="header">
        <News {...newsData}>
          <Currency currencyData={currencyData} />
          <MenuButton />
        </News>
        <Sidebar {...sidebarData} />
      </header>
      <section className="search-section">
        <Menu menuData={menuData} />
        <div className="search">
          <Logo />
          <SearchForm />
        </div>
        <Tooltip tooltipData={tooltipData} />
      </section>
      <Banner />
      <section className="articles">
        <div className="column">
          <Article title="Погода">
            <ArticleWeather {...weatherData} />
          </Article>
          <Article title="Посещаемое">
            {visitedData.map((obj) => {
              return <ArticleVisited key={obj.id} obj={obj} />;
            })}
          </Article>
        </div>
        <div className="column">
          <Article title="Карта Германии">
            <a href="#" className="article__text">Расписания</a>
          </Article>
          <Article title="Телепрограмма">
            {programData.map((obj) => {
              return <ArticleProgram key={obj.id} obj={obj} />;
            })}
          </Article>
        </div>
        <div className="column">
          <Article title="Эфир">
            {liveData.map((obj) => {
              return <ArticleLive key={obj.id} live={obj} />;
            })}
          </Article>
        </div>
      </section>
    </>
  );
};

export default App;
