export const SelectInput = ({
	options,
	label,
	name,
	value,
	touched,
	errors,
	handleChange,
	...rest
}) => {
	return (
		<div className={`input-group ${touched && errors ? 'error' : ''}`}>
			<label htmlFor={name} className="input-label">
				{label}
			</label>

			<select
				className="input-control"
				id={name}
				name={name}
				aria-label={name}
				data-testid={name}
				value={value}
				onChange={handleChange}
				{...rest}>
				<option value="">Select {label}</option>
				{options.map((option) => (
					<option value={option.value} key={option.value}>
						{option.label}
					</option>
				))}
			</select>

			{touched && errors ? <div className="input-error">{errors}</div> : null}
		</div>
	)
}
