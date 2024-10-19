import { v4 } from 'uuid';
import './currency.css';

interface ICurrencyProps {
  currencyData: {
    name: string;
    value: string;
    dynamics: string;
  }[];
}

const Currency = ({ currencyData }: ICurrencyProps) => {
  const items = currencyData.map((obj) => {
    return (
      <li key={v4()} className="currency__item">
        <span className="currency__exchange-rate">
          <span className="currency__exchange-name">{obj.name}</span>
          <span className="currency__exchange-value">{obj.value}</span>
        </span>
        <span className="currency__dynamics">{obj.dynamics}</span>
      </li>
    );
  });

  return <ul className="currency">{items}</ul>;
};

export default Currency;
