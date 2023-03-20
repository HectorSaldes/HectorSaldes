module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
	],
	darkMode: "class",
	theme: {
		fontFamily: {
			jetbrains: ["JetBrains Mono"],
		},
	},
	variants: {},
	plugins: [
		require('flowbite/plugin')
	],
}