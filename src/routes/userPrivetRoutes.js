import AddReview from "../pages/Dashboard/AddReview";
import MyOrders from "../pages/Dashboard/MyOrders";
import MyProfile from "../pages/Dashboard/MyProfile";

export const userPrivetRoutes = [
  { path: "my-orders", name: "MyOrders", Component: MyOrders },
  { path: "add-review", name: "AddReview", Component: AddReview },
  { path: "my-profile", name: "MyProfile", Component: MyProfile },
];
