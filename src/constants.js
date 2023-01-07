export const ACTION_TYPES = {
	DATE_CHANGE: 'DATE_CHANGE',
	ADD_BOOKING: 'ADD_BOOKING',
}

export const SPECIALS = [
	{
		id: 1,
		name: 'Greek Salad',
		image: 'assets/images/greek salad.jpg',
		description:
			'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ',
		price: 12.99,
	},
	{
		id: 2,
		name: 'Bruchetta',
		image: 'assets/images/bruchetta.svg',
		description:
			'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ',
		price: 19.99,
	},

	{
		id: 3,
		name: 'Lemon Dessert',
		image: 'assets/images/lemon dessert.jpg',
		description:
			'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
		price: 15.99,
	},
]

export const OCCASIONS = [
	{ value: 'birthday', label: 'Birthday' },
	{ value: 'anniversary', label: 'Anniversary' },
	{ value: 'engagement', label: 'Engagement' },
]
