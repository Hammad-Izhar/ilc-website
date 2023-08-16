import redSleeve from "@assets/sleeve/red.png";
import orangeSleeve from "@assets/sleeve/orange.png";
import blackSleeve from "@assets/sleeve/black.png";
import yellowSleeve from "@assets/sleeve/yellow.png";

import blackOrangeCuff from "@assets/cuff/black-orange.png";
import blackRedCuff from "@assets/cuff/black-red.png";
import blackWhiteCuff from "@assets/cuff/black-white.png";
import blackYellowCuff from "@assets/cuff/black-yellow.png";
import blueRedCuff from "@assets/cuff/blue-red.png";
import blueWhiteCuff from "@assets/cuff/blue-white.png";
import blueYellowCuff from "@assets/cuff/blue-yellow.png";
import greenWhiteCuff from "@assets/cuff/green-white.png";
import greenYellowCuff from "@assets/cuff/green-yellow.png";
import lightblueYellowCuff from "@assets/cuff/lightblue-yellow.png";
import maroonYellowCuff from "@assets/cuff/maroon-yellow.png";
import redBlueCuff from "@assets/cuff/red-blue.png";
import redWhiteCuff from "@assets/cuff/red-white.png";

export const sleeveToImage = {
    red: redSleeve,
    orange: orangeSleeve,
    black: blackSleeve,
    yellow: yellowSleeve,
};

export const sleevesToColor = {
    red: "red",
    orange: "orange",
    black: "black",
    yellow: "yellow",
};

export const cuffsToImage = {
    "black-orange": blackOrangeCuff,
    "black-red": blackRedCuff,
    "black-white": blackWhiteCuff,
    "black-yellow": blackYellowCuff,
    "blue-red": blueRedCuff,
    "blue-white": blueWhiteCuff,
    "blue-yellow": blueYellowCuff,
    "green-white": greenWhiteCuff,
    "green-yellow": greenYellowCuff,
    "lightblue-yellow": lightblueYellowCuff,
    "maroon-yellow": maroonYellowCuff,
    "red-blue": redBlueCuff,
    "red-white": redWhiteCuff,
};

export const cuffsToColor = {
    "black-orange": ["black", "orange"],
    "black-red": ["black", "red"],
    "black-white": ["black", "white"],
    "black-yellow": ["black", "yellow"],
    "blue-red": ["blue", "red"],
    "blue-white": ["blue", "white"],
    "blue-yellow": ["blue", "yellow"],
    "green-white": ["green", "white"],
    "green-yellow": ["green", "yellow"],
    "lightblue-yellow": ["lightblue", "yellow"],
    "maroon-yellow": ["maroon", "yellow"],
    "red-blue": ["red", "blue"],
    "red-white": ["red", "white"],
};

export type SleeveColors = keyof typeof sleeveToImage &
    keyof typeof sleevesToColor;

export type CuffColors = keyof typeof cuffsToImage & keyof typeof cuffsToColor;
