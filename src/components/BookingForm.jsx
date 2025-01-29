import {useFormik} from "formik";
import * as Yup from 'yup';
import {date, number, string} from "yup";

function TimeSelectionInput({formik, availableTimes}) {
    const options = [];
    for (const time of availableTimes) {
        options.push(<option key={time}>{time}</option>);
    }
    return (
        <select id="res-time" {...formik.getFieldProps("time")} aria-label="select available time" >
            {options}
        </select>
    );
}

function InputErrorMessage({error}) {
    return error != null ?
        <p style={{color: "red"}}>{error}</p> : <></>;
}

export default function BookingForm({availableTimes, updateAvailableTimes, submitForm}) {
    const formik = useFormik({
        initialValues: {
            date: "",
            time: availableTimes[0],
            guestCount: 1,
            occasion: "Other",
        },
        onSubmit: (values) => {
            submitForm();
        },
        validationSchema: Yup.object({
            date: date().min(new Date()).required(),
            time: string().required(),
            guestCount: number().min(1).max(10).required(),
            occasion: "Birthday" | "Anniversary" | "Other"
        }),
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="input-date">Choose date</label>
            <input type="date" id="input-date" aria-label="select date"
                   {...formik.getFieldProps("date")}
                   onChange={(event) => {
                       formik.getFieldProps("date").onChange(event);
                       updateAvailableTimes({value: event.target.value});
                   }}
            />
            <InputErrorMessage error={formik.errors.date}/>

            <label htmlFor="res-time">Choose time</label>
            <TimeSelectionInput formik={formik} availableTimes={availableTimes}/>
            <InputErrorMessage error={formik.errors.time}/>

            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests"
                   aria-label="select number of guests"
                   {...formik.getFieldProps("guestCount")}/>
            <InputErrorMessage error={formik.errors.guestCount}/>

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" aria-label="select occasion of event"
                    {...formik.getFieldProps("occasion")}>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Other</option>
            </select>
            <InputErrorMessage error={formik.errors.occasion}/>

            <input type="submit" value="Make Your reservation" aria-label="Submit reservation"/>
        </form>
    );
}