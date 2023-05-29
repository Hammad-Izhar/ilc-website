import type { Material, MaterialType } from "./MaterialPage";
import { LeatherMaterials } from "./leather";
import { FabricMaterials } from "./fabric";

interface MaterialViewerProps {
    selectedMaterial: Material;
    selectedMaterialType: MaterialType;
}

interface ItemCardProps {
    itemName: string;
    subtype: string;
    imgURL: string;
}

const ItemCard = ({ itemName, subtype, imgURL }: ItemCardProps) => {
    return (
        <div>
            <a className="card card-compact w-48 h-48 shadow-xl relative overflow-hidden group">
                <img src={imgURL} />
            </a>
            <p className="text-md capitalize">{subtype}</p>
            <p className="text-sm uppercase text-gray-400">{itemName}</p>
        </div>
    );
};

const mapImagesToCards = (color: string, images: Record<string, string>) =>
    Object.entries(images).map(([materialSubtype, imgURL]) => (
        <ItemCard
            key={color + materialSubtype}
            itemName={color.replaceAll("_", " ")}
            subtype={materialSubtype}
            imgURL={imgURL as string}
        />
    ));

const mapSubtypeToCards = (
    color: string,
    subtype: string,
    images: Record<string, string>
) => {
    const filteredImages = Object.fromEntries(
        Object.entries(images).filter(
            ([materialSubtype, _]) => materialSubtype == subtype
        )
    );

    return mapImagesToCards(color, filteredImages);
};

const MaterialViewer = ({
    selectedMaterial,
    selectedMaterialType,
}: MaterialViewerProps) => {
    const materialList =
        selectedMaterialType == "leather" ? LeatherMaterials : FabricMaterials;
    const leatherSubtypes = ["aniline", "nappa", "printed", "sheep", "vegtan"];

    return (
        <div className="flex flex-wrap gap-10 flex-grow basis-4/5 max-h-screen p-10 overflow-auto">
            {selectedMaterial == "All"
                ? leatherSubtypes.map((subtype) =>
                      Object.entries(materialList).map(([color, images]) =>
                          mapSubtypeToCards(
                              color,
                              subtype,
                              images as Record<string, string>
                          )
                      )
                  )
                : mapImagesToCards(
                      selectedMaterial,
                      materialList[
                          selectedMaterial as keyof typeof materialList
                      ]
                  )}
        </div>
    );
};

export default MaterialViewer;
