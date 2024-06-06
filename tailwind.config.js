/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				comp: {
					purple: '#140051',
					orange: '#EB5028',
					green: '#0BBF8A',
					gray: '#393939',
					['light-gray']: '#F7F8FB',
					['mid-gray']: '#C6C4C4',
					blue: '#004eda',
					['dark-blue']: '#003bc3',
				},
			},
		},
	},
	plugins: [],
};
