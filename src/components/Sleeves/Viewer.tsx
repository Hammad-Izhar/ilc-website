import type { ImageMetadata } from "astro";
import { useEffect, useState } from "react";
import {
    sleeveToImage,
    cuffsToImage,
    SleeveColors,
    CuffColors,
    sleevesToColor,
    cuffsToColor,
} from "./utils";

export default function SleeveViewer() {
    const [selectedSleeve, setSelectedSleeve] = useState<SleeveColors>("black");
    const [selectedCuff, setSelectedCuff] = useState<CuffColors>("black-red");

    const sleeveImg = sleeveToImage[selectedSleeve];
    const cuffImg = cuffsToImage[selectedCuff];

    return (
        <main className="flex md:gap-24 items-center flex-wrap md:flex-nowrap">
            <div className="basis-full relative w-full overflow-hidden">
                <img
                    className="w-full h-full object-scale-down"
                    src={sleeveImg.src}
                    width={sleeveImg.width}
                    height={sleeveImg.height}
                />
                <img
                    className="absolute top-0 -right-32 md:-right-40 w-full object-scale-down h-full"
                    style={{
                        maskImage: `url(${sleeveImg.src})`,
                        maskSize: "contain",
                        maskRepeat: "no-repeat",
                        maskPosition: "-8rem",
                        WebkitMaskImage: `url(${sleeveImg.src})`,
                        WebkitMaskSize: "contain",
                        WebkitMaskRepeat: "no-repeat",
                        WebkitMaskPosition: "-8rem",
                    }}
                    src={cuffImg.src}
                    width={cuffImg.width}
                    height={cuffImg.height}
                />
            </div>
            <div className="basis-full flex flex-col text-center gap-10 p-4">
                <div>
                    <h2 className="text-4xl font-bold p-4">Sleeve Color</h2>
                    <div className="grid grid-cols-5 gap-5 justify-center">
                        {Object.entries(sleevesToColor).map(
                            ([sleeveId, color]) => (
                                <button
                                    className="w-8 h-8 rounded-lg border-2"
                                    key={sleeveId}
                                    style={{
                                        backgroundColor: color,
                                    }}
                                    onClick={() =>
                                        setSelectedSleeve(
                                            sleeveId as SleeveColors
                                        )
                                    }
                                ></button>
                            )
                        )}
                    </div>
                </div>
                <div>
                    <h2 className="text-4xl font-bold p-4">Cuff Color</h2>
                    <div className="grid grid-cols-5 gap-5 justify-center">
                        {Object.entries(cuffsToColor).map(
                            ([cuffId, [color1, color2]]) => (
                                <button
                                    className="w-8 h-8 rounded-lg border-2"
                                    key={cuffId}
                                    style={{
                                        background: `linear-gradient(135deg, ${color1} 50%, ${color2} 50%)`,
                                    }}
                                    onClick={() =>
                                        setSelectedCuff(cuffId as CuffColors)
                                    }
                                ></button>
                            )
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
