// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import github from '@astrojs/github';


// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: github(),
  base: '/Portfolio/1-WebJc/',  
  vite: {
    plugins: [tailwindcss()]
  },

});
