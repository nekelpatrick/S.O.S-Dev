import { fireEvent, render, screen } from "@testing-library/react";
import Button from "../Atoms/Button";

test("calls onClick prop when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} text="click me"/>);
    fireEvent.click(screen.getByText(/click me/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
});

