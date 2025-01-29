import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import BookingForm from './BookingForm';

test('renders the BookingForm', () => {
    render(
        <BookingForm availableTimes={["19:00", "20:00", "21:00"]}
                     updateAvailableTimes={() => {}}/>
    );
    const headingElement = screen.getByText("Choose date");
    expect(headingElement).toBeInTheDocument();
})