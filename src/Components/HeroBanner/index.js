import { useNavigate } from 'react-router-dom'

import { Button } from '../Common'

import './styles.css'

export const HeroBanner = () => {
	const navigate = useNavigate()

	return (
		<section id="hero-banner" className="hero-banner">
			<div className="container flex hero-container">
				<div className="hero-content">
					<h1 className="hero-title">Little Lemon</h1>
					<h4 className="hero-subtitle">Chicago</h4>
					<p className="hero-description">
						We are family owned mediterranean restaurant, focussed on
						traditional recipes served with modern twist.
					</p>
					<Button variant="primary" handleClick={() => navigate('/booking')}>
						Reserve a Table
					</Button>
				</div>
				<img
					src="assets/images/hero.jpg"
					alt="hero banner"
					className="hero-image"
				/>
			</div>
		</section>
	)
}
