import {initializeTimes, updateTimes} from "./BookingPage";

test('returns initial values for availableTimes', () => {
    expect(initializeTimes())
        .toStrictEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
})

test('updates availableTimes by removing given value', () => {
    const state = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const action = { value: state[0]};

    expect(updateTimes(state,action))
        .toStrictEqual(["18:00", "19:00", "20:00", "21:00", "22:00"]);
})