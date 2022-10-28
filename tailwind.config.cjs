/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                yellow0: '#ab936b',
            },
            extend: {
                backdropBrightness: {
                    25: '.25',
                },
            },
            theme: {
                minHeight: {
                    '1/2': '50%',
                },
            },
        },
    },
    plugins: [],
}
