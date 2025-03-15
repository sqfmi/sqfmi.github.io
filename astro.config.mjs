import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://sqfmi.github.io",
  integrations: [tailwind({ configFile: "./tailwind.config.mjs" })],
});
