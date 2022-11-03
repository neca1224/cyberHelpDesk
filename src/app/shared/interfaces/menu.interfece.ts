import { MenuItem } from "primeng/api";

export interface SideMenuOption extends MenuItem {
    enableRoles?: string[];
    items?: SideMenuOption[];
}