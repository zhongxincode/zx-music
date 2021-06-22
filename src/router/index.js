import React from 'react'
import { Redirect } from "react-router";

const ZXDiscover = React.lazy(() => import("@/pages/discover"));
const ZXMine = React.lazy(() => import("@/pages/mine"));
const ZXFriend = React.lazy(() => import("@/pages/friend"));
const ZXRecommend = React.lazy(() => import("@/pages/discover/c-pages/recommend"));
const ZXAlbum = React.lazy(() => import("@/pages/discover/c-pages/album"));
const ZXArtist = React.lazy(() => import("@/pages/discover/c-pages/artist"));
const ZXDjradio = React.lazy(() => import("@/pages/discover/c-pages/djradio"));
const ZXToplist = React.lazy(() => import("@/pages/discover/c-pages/toplist"));
const ZXPlaylist = React.lazy(() => import("@/pages/discover/c-pages/playlist"));
const ZXPlayer = React.lazy(() => import("@/pages/player"));

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
      {
        path: "/discover/player",
        component: ZXPlayer,
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
