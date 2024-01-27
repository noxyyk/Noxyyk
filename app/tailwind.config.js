/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			colors: {
				"nox": "#98ff98",
				"bg-main": "#181818"
			}
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [{
			mytheme: {
				"primary": "#98ff98",
				"secondary": "#8b5cf6",
				"accent": "#ffffff",
				"neutral": "#181818",
				"base-100": "#181818",
				"info": "#ffffff",
				"success": "#00ffff",
				"warning": "#ffffff",
				"error": "#ffffff"
			},
		}],
	},
};

