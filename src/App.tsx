import Article from './components/Article/Article';
import ArticleGermanCard from './components/ArticleGermanCard/ArticleGermanCard';
import ArticleLive from './components/ArticleLive/ArticleLive';
import ArticleProgram from './components/ArticleProgram/ArticleProgram';
import ArticleVisited from './components/ArticleVisited/ArticleVisited';
import ArticleWeather from './components/ArticleWeather/ArticleWeather';
import Banner from './components/Banner/Banner';
import Column3 from './components/Column3/Column3';
import Currency from './components/Currency/Currency';
import Header from './components/Header/Header';
import Logo from './components/Logo/Logo';
import Main from './components/Main/Main';
import Menu from './components/Menu/Menu';
import MenuButton from './components/MenuButton/MenuButton';
import News from './components/News/News';
import Search from './components/Search/Search';
import SearchForm from './components/SearchForm/SearchForm';
import SectionSearch from './components/SectionSearch/SectionSearch';
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

const App = () => {
  return (
    <>
      <Header>
        <News {...newsData}>
          <Currency currencyData={currencyData} />
          <MenuButton />
        </News>
        <Sidebar {...sidebarData} />
      </Header>
      <SectionSearch>
        <Menu menuData={menuData} />
        <Search>
          <Logo />
          <SearchForm />
        </Search>
        <Tooltip tooltipData={tooltipData} />
      </SectionSearch>
      <Banner />
      <Main>
        <Column3>
          <Article title="Погода">
            <ArticleWeather {...weatherData} />
          </Article>
          <Article title="Посещаемое">
            {visitedData.map((obj) => {
              return <ArticleVisited key={obj.id} obj={obj} />;
            })}
          </Article>
        </Column3>
        <Column3>
          <Article title="Карта Германии">
            <ArticleGermanCard text={'Расписания'} />
          </Article>
          <Article title="Телепрограмма">
            {programData.map((obj) => {
              return <ArticleProgram key={obj.id} obj={obj} />;
            })}
          </Article>
        </Column3>
        <Column3>
          <Article title="Эфир">
            {liveData.map((obj) => {
              return <ArticleLive key={obj.id} obj={obj} />;
            })}
          </Article>
        </Column3>
      </Main>
    </>
  );
};

export default App;
