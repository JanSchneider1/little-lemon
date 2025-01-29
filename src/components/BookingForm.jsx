import {useFormik} from "formik";

function TimeSelectionInput({formik, availableTimes}) {
    const options = [];
    for (const time of availableTimes) {
        options.push(<option key={time}>{time}</option>);
    }

    return (
        <select id="res-time" {...formik.getFieldProps("time")}>
        { options }
        </select>
    );
}

export default function BookingForm({availableTimes, updateAvailableTimes}) {
    const formik = useFormik({
        initialValues: {
            date: "",
            time: availableTimes[0],
            guestCount: 1,
            occasion: "Other",
        },
        onSubmit: (values) => {
            updateAvailableTimes({value: values.time});
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" {...formik.getFieldProps("date")}/>
            <label htmlFor="res-time">Choose time</label>
            <TimeSelectionInput formik={formik} availableTimes={availableTimes}/>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" {...formik.getFieldProps("guestCount")}/>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" {...formik.getFieldProps("occasion")}>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Other</option>
            </select>
            <input type="submit" value="Make Your reservation"/>
        </form>
    );
}