import { Link } from 'react-router-dom'

import { Nav } from './Nav'

import './styles.css'

export const Header = () => (
	<header>
		<div className="container">
			<div className="header-content flex">
				<Link to="/">
					<img src="assets/images/Logo.svg" alt="little lemon logo" />
				</Link>

				<Nav />
			</div>
		</div>
	</header>
)
