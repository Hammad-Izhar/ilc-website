import { useState } from "react";
import clsx from "clsx";
import leatherRack from "@assets/leather-rack.jpg";

const infoCards = {
    "Technical Service": {
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit fuga impedit facere deserunt, rerum qui sit atque laudantium. Id officia laborum voluptate voluptatum libero, dolore quam inventore odio suscipit provident.",
        img: leatherRack,
    },
    "Fabric & Materials Sourcing": {
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit fuga impedit facere deserunt, rerum qui sit atque laudantium. Id officia laborum voluptate voluptatum libero, dolore quam inventore odio suscipit provident.",
        img: leatherRack,
    },
    Manufacturing: {
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit fuga impedit facere deserunt, rerum qui sit atque laudantium. Id officia laborum voluptate voluptatum libero, dolore quam inventore odio suscipit provident.",
        img: leatherRack,
    },
};

const InfoCards = () => {
    const [activeTab, setActiveTab] =
        useState<keyof typeof infoCards>("Technical Service");

    return (
        <div className="space-y-10">
            <div className="flex justify-around">
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
            <div className="flex flex-col lg:flex-row gap-4 mb-10">
                <div className="flex flex-col basis-full justify-center">
                    <p className="py-4">{infoCards[activeTab].body}</p>
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
