import { describe, test } from "vitest";
import { render } from '@testing-library/react'
import { MyAwosemeApp } from "./MyAwosemeApp";

describe('MyAwosomeApp', () => {
  test('should render firstName and lastName', () => {
    const { container } = render(<MyAwosemeApp/>);
    console.log(container.innerHTML);
  })
})
