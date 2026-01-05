interface Props{
  name: string;
  quantity?: number;
}

export const ItemCounter = ({ name, quantity = 0 }: Props) => {

  const handleClick = () => {
    console.log(`Click en ${ name }`);
  }

  const handleMouseEnter = () => {
    console.log(`Mouse enter en ${ name }`);
  }

  return (
    <>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginTop: 10
      }}>
        <span style={{
          width: 150
        }}>{ name }</span>
        <button onClick={handleClick} onMouseEnter={handleMouseEnter}>+1</button>
        <span>{ quantity }</span>
        <button>-1</button>
      </div>
    </>
  )
}
