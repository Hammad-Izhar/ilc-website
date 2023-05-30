import { useState } from "react";
import MaterialSidebar from "./MaterialSidebar";
import MaterialViewer from "./MaterialViewer";

import type { FabricMaterials } from "./fabric";
import type { LeatherMaterials } from "./leather";

export type Material =
    | keyof typeof FabricMaterials
    | keyof typeof LeatherMaterials
    | "All";
export type MaterialType = "leather" | "fabric";

const MaterialPage = () => {
    const [selectedMaterialType, setSelectedMaterialType] =
        useState<MaterialType>("leather");

    const [selectedMaterial, setSelectedMaterial] = useState<Material>("All");

    return (
        <div className="flex flex-wrap">
            <MaterialSidebar
                selectedMaterial={selectedMaterial}
                selectedMaterialType={selectedMaterialType}
                setSelectedMaterial={setSelectedMaterial}
                setSelectedMaterialType={setSelectedMaterialType}
            />
            <MaterialViewer
                selectedMaterial={selectedMaterial}
                selectedMaterialType={selectedMaterialType}
            />
        </div>
    );
};

export default MaterialPage;
