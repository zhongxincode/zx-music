import ZXDiscover from "@/pages/discover";
import ZXMine from "@/pages/mine";
import ZXFriend from "@/pages/friend";

const routes = [
  {
    path: "/",
    exact: true,
    component: ZXDiscover,
  },
  {
    path: "/mine",
    component: ZXMine,
  },
  {
    path: "/friend",
    component: ZXFriend,
  },
];

export default routes;
