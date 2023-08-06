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
            <label
                htmlFor="filterDrawer"
                className="text-white btn btn-square btn-ghost"
            >
                <svg
                    className="w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                >
                    <path d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z" />
                </svg>
            </label>
        </div>
    );
};

export default MobileSidebar;
