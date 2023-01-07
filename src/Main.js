import { useReducer } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import { HomePage, BookingPage, ConfirmationPage } from './Pages'

import { ACTION_TYPES } from './constants'
// temp
import { fetchAPI, submitAPI } from './data'

export const initializeTimes = () => {
	const data = fetchAPI(new Date())

	return data.map((item) => ({ value: item, label: item }))
}

export const updateTimes = (state, action) => {
	switch (action.type) {
		case ACTION_TYPES.DATE_CHANGE:
			const data = fetchAPI(new Date(action.payload))
			return data.map((item) => ({ value: item, label: item }))

		case ACTION_TYPES.ADD_BOOKING:
			return state.filter((time) => time.value !== action.payload)

		default:
			return state
	}
}

export const Main = () => {
	const navigate = useNavigate()

	const [availableTimes, setAvailableTimes] = useReducer(
		updateTimes,
		initializeTimes()
	)

	const submitForm = (formData) => {
		setAvailableTimes({
			type: ACTION_TYPES.ADD_BOOKING,
			payload: formData.time,
		})

		const response = submitAPI(formData)
		if (response) navigate('/confirmation')
	}

	return (
		<main>
			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				<Route
					path="/booking"
					element={
						<BookingPage
							availableTimes={availableTimes}
							setAvailableTimes={setAvailableTimes}
							submitForm={submitForm}
						/>
					}></Route>
				<Route path="/confirmation" element={<ConfirmationPage />} />
			</Routes>
		</main>
	)
}
