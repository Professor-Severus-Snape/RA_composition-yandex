import Currency from './components/Currency/Currency';
import MenuButton from './components/MenuButton/MenuButton';
import News from './components/News/News';
import Sidebar from './components/Sidebar/Sidebar';

import currencyData from './data/currency.json';
import newsData from './data/news.json';
import sidebarData from './data/sidebar.json';

import './app.css';

const App = () => {
  return (
    <header className="header">
      <News {...newsData}>
        <footer className="news__footer">
          <Currency currencyData={currencyData} />
          <MenuButton />
        </footer>
      </News>
      <Sidebar {...sidebarData} />
    </header>
  );
};

export default App;
