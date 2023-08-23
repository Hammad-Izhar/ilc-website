import clsx from "clsx";
import type { Material, MaterialType } from "./MaterialPage";
import type { MaterialSidebarProps } from "./MaterialSidebar";

interface SidebarBadgeProps {
    type: MaterialType;
    selectedMaterialType: MaterialType;
    setSelectedMaterial: React.Dispatch<React.SetStateAction<Material>>;
    setSelectedMaterialType: React.Dispatch<React.SetStateAction<MaterialType>>;
}

const SidebarBadge = ({
    type,
    selectedMaterialType,
    setSelectedMaterial,
    setSelectedMaterialType,
}: SidebarBadgeProps) => {
    return (
        <a
            className={clsx(
                "badge badge-lg capitalize flex-grow",
                selectedMaterialType == type ? "badge-primary" : "badge-outline"
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

const MobileSidebar = ({
    selectedMaterial,
    selectedMaterialType,
    setSelectedMaterial,
    setSelectedMaterialType,
}: MaterialSidebarProps) => {
    return (
        <div className="flex p-4 w-full gap-4 xl:hidden items-center">
            <div className="flex gap-4 flex-grow">
                <SidebarBadge
                    type="leather"
                    selectedMaterialType={selectedMaterialType}
                    setSelectedMaterial={setSelectedMaterial}
                    setSelectedMaterialType={setSelectedMaterialType}
                />
                <SidebarBadge
                    type="fabric"
                    selectedMaterialType={selectedMaterialType}
                    setSelectedMaterial={setSelectedMaterial}
                    setSelectedMaterialType={setSelectedMaterialType}
                />
            </div>
        </div>
    );
};

export default MobileSidebar;
