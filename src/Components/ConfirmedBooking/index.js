import { Link } from 'react-router-dom'

import './styles.css'

export const ConfirmedBooking = () => {
	return (
		<section id="confirmation-section" className="confirmation-section flex">
			<h1 className="confirmation-title">
				Thank you for booking table at Little Lemon!
			</h1>
			<p>
				Your reservation is confirmed. We will hold the table for 15 mins from
				time of reservration.
			</p>
			<Link to="/">Back to home</Link>
		</section>
	)
}
