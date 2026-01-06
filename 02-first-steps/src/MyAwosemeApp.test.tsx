import { describe, expect, test } from "vitest";
import { render, screen } from '@testing-library/react'
import { MyAwosemeApp } from "./MyAwosemeApp";

describe('MyAwosomeApp', () => {
  test('should render firstName and lastName', () => {
    const { container } = render(<MyAwosemeApp/>);
    // console.log(container.innerHTML);
    // screen.debug();

    const h1 = container.querySelector('h1')
    const h3 = container.querySelector('h3')

    expect(h1?.innerHTML).toContain('Edwin');
    expect(h3?.innerHTML).toContain('Moran')
    console.log(h1?.innerHTML);
    
  })

  test('should render firstName and lastName - screen', () => {
    render(<MyAwosemeApp/>);

    screen.debug()

    // const h1 = screen.getByRole('heading', {
    //   level: 1
    // })
    const h1 = screen.getByTestId('first-name-title')
    expect(h1.innerHTML).toContain('Edwin')
    console.log(h1.innerHTML);
    
  });

  test('should match snapshot', () => {
    const { container } = render(<MyAwosemeApp/>);

    expect(container).toMatchSnapshot();
  })

  test('should match snapshot screen', () => {
    render(<MyAwosemeApp/>)
    expect(screen.getByTestId('div-app')).toMatchSnapshot();
    
  })
})
