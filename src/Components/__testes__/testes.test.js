import { fireEvent, render, screen } from "@testing-library/react";
import Button from "../Atoms/Button";
import Image from '../Atoms/Image';
import Input from '../Atoms/Input'
import Types from '../Atoms/Types'

import src from '../../teste.png'

describe('When atoms arew called', () => {
    test("Should calls onClick prop when clicked", () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick} text="click me"/>);
        fireEvent.click(screen.getByText(/click me/i));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
    test("Should show image", () =>{
        render (<Image src = {src} alt = 'imagem de teste'/>);
        const screnImage = screen.getAllByAltText('imagem de teste');
        expect(screnImage).toBeInTheDocument;
    });
    test('Should render the input field', () => {
        render(<Input id = '1' />);
        const screenInput = screen.findByTestId('1');
        expect(screenInput).toBeVisible;
    });
    test('Should have text components as childreen', () => {
        render(<Types varian='p' component='p' text='i was render'/>);
        const screenText = screen.findByText('i was render');
        expect(screenText).toContainElement;
    });
})

test('Should have a label', () => {
    render(<Input label = 'label' />);
    const screenHeader = screen.queryAllByLabelText('label')
    expect(screenHeader).toBeInTheDocument;
})