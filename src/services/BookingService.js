import {fetchAPI, submitAPI} from "../api/api";

export function bookTable(data) {
    return submitAPI(data);
}

export function initializeTimes(date) {
    return fetchAPI(date);
}

export function updateTimes(state, action) {
    return fetchAPI(new Date(action.value));
}