// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
// @ts-ignore
import astroI18next from "astro-i18next";

import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:4321/",
  integrations: [tailwind(), react(), astroI18next(), sitemap(), robotsTxt()],
});
