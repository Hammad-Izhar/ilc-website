import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import NetlifyCMS from "astro-netlify-cms";

const swatchItemFields = [
    { label: "Color", name: "color", widget: "string", required: true },
    { label: "Type", name: "type", widget: "string", required: true },
    { label: "Image", name: "image", widget: "image", required: true },
];

const websiteItemFields = [
    { label: "Name", name: "name", widget: "string", required: true },
    { label: "Image", name: "image", widget: "image", required: true },
    { label: "Description", name: "desc", widget: "text", required: false },
];

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
                        folder: "/src/content/leather_swatches",
                        media_folder: "/src/assets/leather_swatches/",
                        create: true,
                        fields: swatchItemFields,
                    },
                    {
                        name: "fabric",
                        label: "Fabric Swatches",
                        folder: "/src/content/fabric_swatches",
                        media_folder: "/src/assets/fabric_swatches/",
                        create: true,
                        fields: swatchItemFields,
                    },
                    {
                        name: "bags",
                        label: "Bags",
                        folder: "/src/content/bags",
                        media_folder: "/src/assets/bags/",
                        create: true,
                        fields: websiteItemFields,
                    },
                    {
                        name: "jackets",
                        label: "Jackets",
                        folder: "/src/content/jackets",
                        media_folder: "/src/assets/jackets/",
                        create: true,
                        fields: websiteItemFields,
                    },
                ],
            },
        }),
    ],
    experimental: {
        assets: true,
    },
});
