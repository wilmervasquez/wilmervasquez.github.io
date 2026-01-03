import { defineConfig, envField } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  env: {
    schema: {
      VERSION: envField.boolean({ default: true, context: 'server', access: 'public'})
    }
  },
  integrations: [svelte()]
});