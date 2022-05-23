import Payment from "../pages/Dashboard/Payment/Payment";
import Purchase from "../pages/Purchase";

export const privetRoutes = [
  { path: "/payment/:orderId", name: "Payment", Component: Payment },
  { path: "/purchase/:partId", name: "Purchase", Component: Purchase },
];
