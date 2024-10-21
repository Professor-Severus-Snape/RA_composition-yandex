import { PropsWithChildren } from 'react';
import './column3.css';

const Column3 = ({children}: PropsWithChildren) => {
  return (
    <div className="column-3">{children}</div>
  )
}

export default Column3