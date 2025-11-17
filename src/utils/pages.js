
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import { CollectionsBookmark, Home } from "@mui/icons-material";

export const dashboardPages = [
  {
    name: "Home",
    icon: <Home />,
    href: "/dashboard",
  },
  {
    name: "Brands",
    icon: <CollectionsBookmark />,
    href: "/dashboard/brands",
  },



  {
    name: "Products",
    icon: <ShoppingBagIcon />,
    href: "/dashboard/products",
  },
  {
    name: "Customers",
    icon: <PeopleIcon />,
    href: "/dashboard/customers",
  },
  {
    name: "Analytics",
    icon: <BarChartIcon />,
    href: "/dashboard/analytics",
  },
  {
    name: "Settings",
    icon: <SettingsIcon />,
    href: "/dashboard/settings",
  },
];
