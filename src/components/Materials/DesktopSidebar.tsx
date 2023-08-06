import clsx from "clsx";
import type { Material, MaterialType } from "./MaterialPage";
import type { MaterialSidebarProps } from "./MaterialSidebar";
import { LeatherMaterials } from "./leather";
import { FabricMaterials } from "./fabric";

interface SidebarItemProps {
    itemName: Material;
    selectedMaterial: Material;
    setSelectedMaterial: React.Dispatch<React.SetStateAction<Material>>;
}

interface SidebarTabProps {
    type: MaterialType;
    selectedMaterialType: MaterialType;
    setSelectedMaterial: React.Dispatch<React.SetStateAction<Material>>;
    setSelectedMaterialType: React.Dispatch<React.SetStateAction<MaterialType>>;
}

const SidebarTab = ({
    type,
    selectedMaterialType,
    setSelectedMaterial,
    setSelectedMaterialType,
}: SidebarTabProps) => {
    return (
        <a
            className={clsx(
                "tab tab-lifted capitalize",
                selectedMaterialType == type ? "tab-active" : ""
            )}
            onClick={() => {
                if (selectedMaterialType == type) return;
                setSelectedMaterialType(type);
                setSelectedMaterial("All");
            }}
        >
            {type}
        </a>
    );
};

const SidebarItem = ({
    itemName,
    selectedMaterial,
    setSelectedMaterial,
}: SidebarItemProps) => {
    return (
        <li>
            <a
                onClick={() => setSelectedMaterial(itemName)}
                className={clsx(
                    "capitalize",
                    selectedMaterial == itemName ? "active" : ""
                )}
            >
                {itemName.replaceAll("_", " ")}
            </a>
        </li>
    );
};

const DesktopSidebar = ({
    selectedMaterial,
    selectedMaterialType,
    setSelectedMaterial,
    setSelectedMaterialType,
}: MaterialSidebarProps) => {
    return (
        <div className="basis-1/5 h-screen overflow-auto hidden lg:block p-4">
            <div className="tabs">
                <SidebarTab
                    type="leather"
                    selectedMaterialType={selectedMaterialType}
                    setSelectedMaterial={setSelectedMaterial}
                    setSelectedMaterialType={setSelectedMaterialType}
                />
                <SidebarTab
                    type="fabric"
                    selectedMaterialType={selectedMaterialType}
                    setSelectedMaterial={setSelectedMaterial}
                    setSelectedMaterialType={setSelectedMaterialType}
                />
            </div>
            <ul className="menu">
                <SidebarItem
                    itemName="All"
                    selectedMaterial={selectedMaterial}
                    setSelectedMaterial={setSelectedMaterial}
                />
                {selectedMaterialType == "leather"
                    ? Object.keys(LeatherMaterials).map((leatherName) => (
                          <SidebarItem
                              key={leatherName}
                              itemName={leatherName as Material}
                              selectedMaterial={selectedMaterial}
                              setSelectedMaterial={setSelectedMaterial}
                          />
                      ))
                    : Object.keys(FabricMaterials).map((fabricName) => (
                          <SidebarItem
                              key={fabricName}
                              itemName={fabricName as Material}
                              selectedMaterial={selectedMaterial}
                              setSelectedMaterial={setSelectedMaterial}
                          />
                      ))}
            </ul>
        </div>
    );
};

export default DesktopSidebar;
