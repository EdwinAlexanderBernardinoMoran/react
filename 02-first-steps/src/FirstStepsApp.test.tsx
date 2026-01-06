import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";

const mockItemCounter = vi.fn((props: unknown) => {
    return (
        <div data-testid="ItemCounter"/>
    )
});

vi.mock('./shopping-cart/ItemCounter', () => ({
    ItemCounter: (props: unknown) => mockItemCounter(props)
}));

// vi.mock('./shopping-cart/ItemCounter', () => ({
//     ItemCounter: (props: unknown) => <div data-testid="ItemCounter" name={props.name} quantity={props.quantity}/>
// }))

describe('FirstStepsApp', () => {

    // Limpira cada vez que se ejecuta un test y es necesario para que no haya interferencia entre tests
    
    afterEach(() => {
        vi.clearAllMocks();
    })
    test('should match snapshot', () => {
        const { container } = render(<FirstStepsApp/>);

        expect(container).toMatchSnapshot();
    });

    test('should render the correct number of ItemCounter components', () => {
        render(<FirstStepsApp/>);

        const itemCounters = screen.getAllByTestId('ItemCounter');
        console.log(itemCounters.length);

        expect(itemCounters.length).toBe(3);
    });

    test('should render ItemCounter components with correct props', () => {
        render(<FirstStepsApp/>);

        expect(mockItemCounter).toHaveBeenCalledTimes(3);
        expect(mockItemCounter).toHaveBeenCalledWith({ name: 'Nintendo Switch', quantity: 10 });
        expect(mockItemCounter).toHaveBeenCalledWith({ name: 'Pro Controller', quantity: 20 });
        expect(mockItemCounter).toHaveBeenCalledWith({ name: 'Super Smash', quantity: 0 });
    });
});