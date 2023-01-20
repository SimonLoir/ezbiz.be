module.exports = {
    content: [
        `./components/**/*.{js,ts,jsx,tsx}`,
        `./pages/**/*.{js,ts,jsx,tsx}`,
        `../../packages/ui/src/**/*.{js,ts,jsx,tsx}`,
    ],
    theme: {
        extend: {
            gridTemplateColumns: {
                panel: '250px 1fr',
            },
            gridTemplateRows: {
                panel: '65px 1fr',
            },
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
