import { useState } from "react";

// import './ItemCounter.css';
import styles from './ItemCounter.module.css';

interface Props{
  name: string;
  quantity?: number;
}

export const ItemCounter = ({ name, quantity = 0 }: Props) => {
  const [count, setcount] = useState(quantity);

  const handleAdd = () => {
    setcount(count + 1);
  }

  const handleSubtract = () => {
    if (count === 0) return;
    setcount(count - 1);
  }

  return (
    <>
      <div className={styles.itemRow}>
        <span className={styles['item-text']} style={{
          color: count === 0 ? 'red' : 'black'
        }}>{ name }</span>
        <button onClick={handleAdd}>+1</button>
        <span>{ count }</span>
        <button onClick={handleSubtract}>-1</button>
      </div>
    </>
  )
}
