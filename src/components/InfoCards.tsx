import { useState } from "react";
import clsx from "clsx";
import leatherRack from "@assets/leather-rack.jpg";

const infoCards = {
    "Technical Service": {
        body: "At Mercury, we understand that bringing your vision to life is a journey that requires the right guidance and expertise. Our dedicated team is here to seamlessly bridge the gap between your ideas and the tangible reality of exceptional leather and fabric goods. Whether you're starting with a concrete concept or just a spark of inspiration, we're your partners in crafting perfection.",
        img: leatherRack,
    },
    "Fabric & Materials Sourcing": {
        body: `At Mercury, our commitment to crafting exceptional leather and fabric goods starts with sourcing the finest materials. We take pride in delivering products that embody a seamless fusion of quality, innovation, and sustainability. Our fabric and material sourcing section is a testament to our unwavering dedication to excellence.`,
        img: leatherRack,
    },
    // Manufacturing: {
    //     body: "Mercury stands as your all-encompassing partner in apparel manufacturing, simplifying the journey from concept to creation. With an integrated approach that covers every aspect of the process, we bring your ideas to life with precision, innovation, and unwavering dedication. Our manufacturing section embodies the essence of our commitment to crafting excellence.",
    //     img: leatherRack,
    // },
};

const InfoCards = () => {
    const [activeTab, setActiveTab] =
        useState<keyof typeof infoCards>("Technical Service");

    return (
        <div className="space-y-10">
            <div className="flex flex-col md:flex-row justify-around">
                {Object.keys(infoCards).map((heading, idx) => (
                    <div
                        key={idx}
                        className={clsx(
                            "btn text-black hover:bg-black hover:text-white",
                            activeTab === heading
                                ? "bg-black text-white"
                                : "bg-white"
                        )}
                        onClick={() => setActiveTab(heading as any)}
                    >
                        {heading}
                    </div>
                ))}
            </div>
            <div className="flex flex-col lg:flex-row gap-20 mb-10">
                <div className="flex flex-col basis-full justify-center">
                    {infoCards[activeTab].body.split("\n").map((text) => (
                        <p className="py-2 text-lg" key={text}>
                            {text}
                        </p>
                    ))}
                </div>
                <div className="basis-full">
                    <img
                        src={infoCards[activeTab].img.src}
                        width={infoCards[activeTab].img.width}
                        height={infoCards[activeTab].img.height}
                    />
                </div>
            </div>
        </div>
    );
};

export default InfoCards;
