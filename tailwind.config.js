/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
      extend: {
        colors: {
            primary: {
                '500': "#FC3C44",
            },
            muted: {
                '500': "#9CA3AF",
            },
            tint: {
                '300': "rgba(255, 255, 255, 0.6)",
                '200': "rgba(255, 255, 255, 0.4)"
            },
        }
      },
    },
}
  