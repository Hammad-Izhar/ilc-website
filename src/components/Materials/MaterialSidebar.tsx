import DesktopSidebar from "./DesktopSidebar";
import type { Material, MaterialType } from "./MaterialPage";
import MobileSidebar from "./MobileSidebar";

export interface MaterialSidebarProps {
    selectedMaterial: Material;
    selectedMaterialType: MaterialType;
    setSelectedMaterial: React.Dispatch<React.SetStateAction<Material>>;
    setSelectedMaterialType: React.Dispatch<React.SetStateAction<MaterialType>>;
}

const MaterialSidebar = (props: MaterialSidebarProps) => {
    return (
        <>
            <MobileSidebar {...props} />
            <DesktopSidebar {...props} />
        </>
    );
};

export default MaterialSidebar;
