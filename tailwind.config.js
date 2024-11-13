/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],   // give the path where you want to particularly apply the CSS
                    // * means it'll be applied everywhere
  theme: {
    extend: {},
  },
  plugins: [],
}

//  npx tailwindcss -i ./input.css -o ./output.css --watch
