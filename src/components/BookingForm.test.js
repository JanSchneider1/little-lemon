import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import BookingForm from './BookingForm';
import {userEvent} from "@testing-library/user-event";

test('renders the BookingForm', () => {
    render(
        <BookingForm availableTimes={["19:00", "20:00", "21:00"]}
                     updateAvailableTimes={() => {}}/>
    );
    const headingElement = screen.getByText("Choose date");
    expect(headingElement).toBeInTheDocument();
})

test('selects date', async () => {
    render(
        <BookingForm availableTimes={["19:00", "20:00", "21:00"]}
                     updateAvailableTimes={() => {}}/>
    );

    const dateInput = screen.getByLabelText("Choose date");
    dateInput.setAttribute("value", "2035-01-01");

    expect(dateInput).toHaveValue("2035-01-01");
})

test('selects occasion', async () => {
    render(
        <BookingForm availableTimes={["19:00", "20:00", "21:00"]}
                     updateAvailableTimes={() => {}}/>
    );

    const occasionSelect = screen.getByRole('combobox', { name: /occasion/i });

    const selectValue = "Birthday";
    await userEvent.selectOptions(occasionSelect, selectValue);

    expect(occasionSelect).toHaveValue(selectValue);
    expect(screen.getByRole('option', {name: selectValue}).selected).toBe(true);
})