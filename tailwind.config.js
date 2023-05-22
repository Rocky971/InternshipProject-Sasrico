/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{ html, js } "],
    theme: {
        extend: {
            colors: {
                primary: '#FF4847'
            }
        },
    },
    plugins: [require("daisyui")],
}