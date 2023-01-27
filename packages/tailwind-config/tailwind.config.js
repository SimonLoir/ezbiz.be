/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        `./components/**/*.{js,ts,jsx,tsx}`,
        `./pages/**/*.{js,ts,jsx,tsx}`,
        `../../packages/ui/src/**/*.{js,ts,jsx,tsx}`,
    ],
    theme: {
        colors: {
            primary: 'rgb(35, 104, 162)',
            secondary: 'rgb(170, 212, 245)',
            accent: 'rgb(26, 73, 113)',
            white: 'rgb(255, 255, 255)',
            'near-black': 'rgb(33, 36, 41)',
            'dark-gray': 'rgb(73, 80, 87)',
            gray: 'rgb(134, 142, 149)',
            'subtle-gray': 'rgb(228, 228, 228)',
            'light-gray': 'rgb(173, 181, 189)',
            'near-white': 'rgb(241, 243, 245)',
            'dark-dark': 'rgb(30, 30, 30)',
            'dark-gray': 'rgb(37, 37, 38)',
            'dark-lighter-gray': 'rgb(51, 51, 51)',
            'dark-text': 'rgb(231, 231, 231)',
        },
        extend: {
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
            },
            maxWidth: {
                main: 'calc(100vw - 16rem)',
            },
        },
    },
    plugins: [],
};
