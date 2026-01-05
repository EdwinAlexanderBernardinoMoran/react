import { ItemCounter } from "./shopping-cart/ItemCounter";

interface itemInCart {
  productName: string;
  quantity: number;
}

const itemsIncart: itemInCart[] = [
  { productName: 'Nintendo Switch', quantity: 10 },
  { productName: 'Pro Controller', quantity: 20 },
  { productName: 'Super Smash', quantity: 0 },
]

export function FirstStepsApp() {
  return (
    <>
      <h1>Shopping Cart</h1>

      {
        itemsIncart.map(({ productName, quantity }) => (
          <ItemCounter 
            key={ productName }
            name={ productName }
            quantity={ quantity }
          />
        ))
      }
    </>
  )
}