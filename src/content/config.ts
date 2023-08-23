import { z, defineCollection } from "astro:content";

const leatherSwatchCollection = defineCollection({
    type: "content",
    schema: z.object({
        color: z.string(),
        type: z.string(),
        image: z.string(),
    }),
});

const fabricSwatchCollection = defineCollection({
    type: "content",
    schema: z.object({
        color: z.string(),
        type: z.string(),
        image: z.string(),
    }),
});

const bagCollection = defineCollection({
    type: "content",
    schema: z.object({
        name: z.string(),
        image: z.string(),
    }),
});

const jacketCollection = defineCollection({
    type: "content",
    schema: z.object({
        name: z.string(),
        image: z.string(),
    }),
});
export const collections = {
    leatherSwatches: leatherSwatchCollection,
    fabricSwatches: fabricSwatchCollection,
    bags: bagCollection,
    jackets: jacketCollection,
};
