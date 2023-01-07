import { useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'

import { TextInput, SelectInput, Button } from '../Common'

import { OCCASIONS, ACTION_TYPES } from '../../constants'

import './styles.css'

export const BookingForm = ({
	availableTimes,
	setAvailableTimes,
	submitForm,
}) => {
	const [submitting, setSubmitting] = useState(false)

	const today = new Date()
	today.setHours(0, 0, 0, 0)

	const {
		values,
		errors,
		touched,
		handleSubmit,
		handleChange,
		handleBlur,
		isValid,
	} = useFormik({
		initialValues: {
			date: new Date().toISOString().slice(0, 10),
			time: availableTimes[0].value,
			guests: '2',
			occasion: OCCASIONS[0].value,
		},
		validationSchema: Yup.object({
			date: Yup.date()
				.required('Date is required')
				.min(today, 'Date cannot be in the past'),
			time: Yup.string().required('Time is rquired'),
			guests: Yup.number()
				.required('Number of guests is required')
				.min(1, 'Minimum 1 guest required')
				.max(10, 'Guests should not exceed 10'),
			occasion: Yup.string().required('Occasion is rquired'),
		}),

		onSubmit: (values) => {
			setSubmitting(true)
			submitForm(values)

			setSubmitting(false)
		},
	})

	const changeTimeSlots = (e) => {
		handleChange(e)
		setAvailableTimes({
			type: ACTION_TYPES.DATE_CHANGE,
			payload: e.target.value,
		})
	}

	return (
		<>
			<h1 className="booking-header">Book A Table</h1>

			<form onSubmit={handleSubmit}>
				<TextInput
					type="date"
					label="Select date"
					name="date"
					value={values.date}
					required
					touched={touched.date}
					errors={errors.date}
					handleChange={changeTimeSlots}
					onBlur={handleBlur}
				/>

				<SelectInput
					options={availableTimes}
					label="Time"
					name="time"
					value={values.time}
					required
					touched={touched.time}
					errors={errors.time}
					handleChange={handleChange}
					onBlur={handleBlur}
				/>

				<TextInput
					type="number"
					label="Number of guests"
					name="guests"
					min="1"
					max="10"
					required
					touched={touched.guests}
					errors={errors.guests}
					value={values.guests}
					handleChange={handleChange}
					onBlur={handleBlur}
				/>

				<SelectInput
					options={OCCASIONS}
					label="Occasion"
					name="occasion"
					value={values.occasion}
					required
					touched={touched.occasion}
					errors={errors.occasion}
					handleChange={handleChange}
					onBlur={handleBlur}
				/>

				<Button
					type="submit"
					variant="primary"
					disabled={submitting || !isValid}
					aria-label="submit reserve table form">
					Make Your Reservation
				</Button>
			</form>
		</>
	)
}
