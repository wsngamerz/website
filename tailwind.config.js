module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            mono: ["Fira Code", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"]
        }
    },
    variants: {
        extend: {
            margin: ["last"],
        }
    },
    plugins: [
        require('@tailwindcss/aspect-ratio')
    ],
}
