import './styles.css'

export const Button = ({
	variant,
	type,
	classes,
	handleClick,
	children,
	...rest
}) => (
	<button
		type={type ? type : 'button'}
		className={`btn ${variant} ${classes ? classes : ''}`}
		onClick={handleClick}
		{...rest}>
		{children}
	</button>
)
