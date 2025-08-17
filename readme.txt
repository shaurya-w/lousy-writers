for tailwind setup: 
npm init -y (creates package.json)
//if doesn't work check for path (if added to bash)

npm install -D tailwindcss (creates node modules folder)

npx tailwindcss init (should create tailwind.config.js file)
//if it doesn't work
manually create and add this: 
module.exports = {
  content: ["*"], //* coz then all html files will be scanned
  theme: {
    extend: {},
  },
  plugins: [],
}

<script src="https://cdn.tailwindcss.com"></script> (add to index.html)

for CDN: 
<!-- Load Tailwind CDN -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Inline config (must come AFTER the CDN load) -->
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          'custom-yellow': '#FFFE69',
          'custom-gray': '#222222'
        }
      }
    }
  }
</script>

postcss.config.js should also be included for tailwind in vite (contents:)
  import tailwindcss from '@tailwindcss/postcss';
  import autoprefixer from 'autoprefixer';

  export default {
    plugins: [tailwindcss, autoprefixer],
  };


React installation: (CRA)
-npx create-react-app my-app
-cd my-app
-npm start 

Vite installation: 
-npm create vite@latest 
-cd lousy-writers 
-npm install 
-npm run dev 

in index.css: 
-@tailwind utilities;     //for h-, w-, p-, etc. 
-@tailwind base;          //removes default border margin, etc. for browser 
-@tailwind components;   

router installation: 
-npminstall react-router-dom

https://www.youtube.com/watch?v=sHnG8tIYMB4
-no more tailwind.config.js required!