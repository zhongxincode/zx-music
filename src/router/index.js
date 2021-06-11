import ZXDiscover from "@/pages/discover";
import ZXMine from "@/pages/mine";
import ZXFriend from "@/pages/friend";
import { Redirect } from "react-router";

const routes = [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to={"/discover"}/>
    )
  },
  {
    path: "/discover",
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
