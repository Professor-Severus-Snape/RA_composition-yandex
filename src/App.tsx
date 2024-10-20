import Currency from './components/Currency/Currency';
import Logo from './components/Logo/Logo';
import Menu from './components/Menu/Menu';
import MenuButton from './components/MenuButton/MenuButton';
import News from './components/News/News';
import SearchForm from './components/SearchForm/SearchForm';
import Sidebar from './components/Sidebar/Sidebar';
import Tooltip from './components/Tooltip/Tooltip';

import currencyData from './data/currency.json';
import menuData from './data/menu.json';
import newsData from './data/news.json';
import sidebarData from './data/sidebar.json';
import tooltipData from './data/tooltip.json';

import './app.css';

const App = () => {
  return (
    <>
      <header className="header">
        <News {...newsData}>
          <footer className="news__footer">
            <Currency currencyData={currencyData} />
            <MenuButton />
          </footer>
        </News>
        <Sidebar {...sidebarData} />
      </header>
      <section className="search-section">
        <Menu menuData={menuData} />
        <div className="search">
          <Logo />
          <SearchForm />
        </div>
        <Tooltip tooltipData={tooltipData}/>
      </section>
    </>
  );
};

export default App;
