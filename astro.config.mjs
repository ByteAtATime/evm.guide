import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import starlightImageZoomPlugin from "starlight-image-zoom";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  integrations: [
    starlight({
      title: "EVM.Guide",
      plugins: [starlightImageZoomPlugin()],
      social: {
        github: "https://github.com/ByteAtATime/evm.guide",
      },
      editLink: {
        baseUrl: "https://github.com/ByteAtATime/evm.guide/blob/main/",
      },
      sidebar: [
        {
          label: "Book",
          autogenerate: { directory: "book" },
        },
        {
          label: "Fundamental Concepts",
          autogenerate: {
            directory: "concepts",
          },
        },
      ],
      customCss: ["./src/katex.css", "./src/app.css"],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
