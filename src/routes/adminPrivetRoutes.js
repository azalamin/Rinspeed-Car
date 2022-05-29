import AddProduct from "../pages/Dashboard/Admin/AddProduct";
import ManageOrder from "../pages/Dashboard/Admin/ManageOrder";
import ManageProduct from "../pages/Dashboard/Admin/ManageProduct";
import Users from "../pages/Dashboard/Admin/Users";
import MyProfile from "../pages/Dashboard/MyProfile";

export const adminPrivetRoutes = [
  { path: "user", name: "Users", Component: Users },
  { path: "manage-order", name: "ManageOrder", Component: ManageOrder },
  { path: "add-product", name: "AddProduct", Component: AddProduct },
  { path: "mange-product", name: "ManageProduct", Component: ManageProduct },
  { path: "my-profile", name: "MyProfile", Component: MyProfile },
];
