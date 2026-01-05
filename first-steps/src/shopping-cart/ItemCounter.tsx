interface Props{
  name: string;
  quantity?: number;
}

export const ItemCounter = ({ name, quantity = 0 }: Props) => {
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
        <button>+1</button>
        <span>{ quantity }</span>
        <button>-1</button>
      </div>
    </>
  )
}
