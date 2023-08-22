import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import NetlifyCMS from "astro-netlify-cms";

// https://astro.build/config
export default defineConfig({
    integrations: [
        react(),
        tailwind(),
        NetlifyCMS({
            config: {
                backend: {
                    name: "git-gateway",
                    branch: "main",
                },
                collections: [
                    {
                        name: "leather",
                        label: "Leather Swatches",
                        folder: "/src/assets/leather",
                        create: true,
                        delete: true,
                        fields: [
                            {
                                label: "Name",
                                name: "name",
                                widget: "string",
                            },
                            {
                                label: "Image",
                                name: "image",
                                widget: "image",
                            },
                        ],
                    },
                ],
            },
        }),
    ],
    experimental: {
        assets: true,
    },
});
