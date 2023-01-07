import { render, screen } from '@testing-library/react'

import { BookingForm } from './'

describe('Booking Form', () => {
	render(<BookingForm availableTimes={[{ value: '', label: '' }]} />)

	test('Renders the BookingForm heading', () => {
		const title = screen.getByText(/Table/i)
		expect(title).toBeInTheDocument()
	})

	test('Input HTML validation works', () => {
		// 	.toHaveAttribute('required')
	})
})
