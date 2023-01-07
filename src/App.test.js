import { render, screen } from '@testing-library/react'

import App from './App'
import { initializeTimes, updateTimes } from './Main'

describe('App', () => {
	render(<App />)

	test('renders App', () => {
		const title = screen.getAllByText(/Little Lemon/i)
		expect(title).toHaveLength(2)
	})

	test('initializeTimes returns values', () => {
		const times = initializeTimes()
		expect(times).toBeTruthy()
	})

	test('updateTimes returns values', () => {
		const newTimes = updateTimes('test value', 'action')
		expect(newTimes).toEqual('test value')
	})
})
