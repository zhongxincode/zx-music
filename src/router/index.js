import { Redirect } from "react-router";

import ZXDiscover from "@/pages/discover";
import ZXMine from "@/pages/mine";
import ZXFriend from "@/pages/friend";
import ZXRecommend from "@/pages/discover/c-pages/recommend";
import ZXAlbum from "@/pages/discover/c-pages/album";
import ZXArtist from "@/pages/discover/c-pages/artist";
import ZXDjradio from "@/pages/discover/c-pages/djradio";
import ZXToplist from "@/pages/discover/c-pages/toplist";
import ZXPlaylist from "@/pages/discover/c-pages/playlist";

const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to={"/discover"} />,
  },
  {
    path: "/discover",
    component: ZXDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => <Redirect to={"/discover/recommend"} />,
      },
      {
        path: "/discover/recommend",
        component: ZXRecommend,
      },
      {
        path: "/discover/toplist",
        component: ZXToplist,
      },
      {
        path: "/discover/playlist",
        component: ZXPlaylist,
      },
      {
        path: "/discover/djradio",
        component: ZXDjradio,
      },
      {
        path: "/discover/artist",
        component: ZXArtist,
      },
      {
        path: "/discover/album",
        component: ZXAlbum,
      },
    ],
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
