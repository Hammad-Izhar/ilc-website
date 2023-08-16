import blackLeather from "@assets/leather/Black.jpg";
import vintageLeather from "@assets/leather/Vintage.jpg";
import greyLeather from "@assets/leather/Grey.jpg";
import brownLeather from "@assets/leather/Brown.jpg";
import darkCreamLeather from "@assets/leather/Dark Cream.jpg";
import creamLeather from "@assets/leather/Cream.jpg";
import lightCreamLeather from "@assets/leather/Light Cream.jpg";
import beigeLeather from "@assets/leather/Beige.jpg";
import whiteLeather from "@assets/leather/White.jpg";
import redLeather from "@assets/leather/Red.jpg";
import orangeLeather from "@assets/leather/Orange.jpg";
import goldLeather from "@assets/leather/Gold.jpg";
import indigoLeather from "@assets/leather/Indigo.jpg";
import navyLeather from "@assets/leather/Navy.jpg";
import royalBlueLeather from "@assets/leather/Royal Blue.jpg";
import gulfBlueLeather from "@assets/leather/Gulf Blue.jpg";
import type { ImageMetadata } from "astro";

export interface Leather {
    nappa?: ImageMetadata;
    vegtan?: ImageMetadata;
    sheep?: ImageMetadata;
    printed?: ImageMetadata;
    aniline?: ImageMetadata;
}

export const LeatherMaterials = {
    black: {
        nappa: blackLeather,
        vegtan: blackLeather,
        sheep: blackLeather,
        printed: blackLeather,
    },
    vintage: {
        nappa: vintageLeather,
        vegtan: vintageLeather,
        sheep: vintageLeather,
        printed: vintageLeather,
    },
    grey: {
        nappa: greyLeather,
        vegtan: greyLeather,
        sheep: greyLeather,
        printed: greyLeather,
    },
    brown: {
        nappa: brownLeather,
        vegtan: brownLeather,
        sheep: brownLeather,
        printed: brownLeather,
    },
    dark_cream: {
        nappa: darkCreamLeather,
        vegtan: darkCreamLeather,
        sheep: darkCreamLeather,
        printed: darkCreamLeather,
    },
    cream: {
        nappa: creamLeather,
        vegtan: creamLeather,
        sheep: creamLeather,
        printed: creamLeather,
    },
    light_cream: {
        nappa: lightCreamLeather,
        vegtan: lightCreamLeather,
        sheep: lightCreamLeather,
        printed: lightCreamLeather,
    },
    beige: {
        nappa: beigeLeather,
        vegtan: beigeLeather,
        sheep: beigeLeather,
        printed: beigeLeather,
    },
    white: {
        nappa: whiteLeather,
        vegtan: whiteLeather,
        sheep: whiteLeather,
        printed: whiteLeather,
    },
    red: {
        nappa: redLeather,
        vegtan: redLeather,
        sheep: redLeather,
        printed: redLeather,
    },
    orange: {
        nappa: orangeLeather,
        vegtan: orangeLeather,
        sheep: orangeLeather,
        printed: orangeLeather,
    },
    gold: {
        nappa: goldLeather,
        vegtan: goldLeather,
        sheep: goldLeather,
        printed: goldLeather,
    },
    indigo: {
        nappa: indigoLeather,
        vegtan: indigoLeather,
        sheep: indigoLeather,
        printed: indigoLeather,
    },
    navy: {
        nappa: navyLeather,
        vegtan: navyLeather,
        sheep: navyLeather,
        printed: navyLeather,
    },
    royal_blue: {
        nappa: royalBlueLeather,
        vegtan: royalBlueLeather,
        sheep: royalBlueLeather,
        printed: royalBlueLeather,
    },
    gulf_blue: {
        nappa: gulfBlueLeather,
        vegtan: gulfBlueLeather,
        sheep: gulfBlueLeather,
        printed: gulfBlueLeather,
    },
} as const;
