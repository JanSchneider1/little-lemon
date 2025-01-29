import {initializeTimes, updateTimes} from "./BookingService";

test('returns initial values for availableTimes', () => {
    expect(initializeTimes(new Date("2025-01-01")))
        .toStrictEqual(["17:00", "17:30", "18:00", "20:00", "21:00", "23:30"]);
})

test('updates availableTimes by removing given value', () => {
    const state = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const action = {value: "2025-01-01"};

    expect(updateTimes(state, action))
        .toStrictEqual(["17:00", "17:30", "18:00", "20:00", "21:00", "23:30"]);
})