import React, { memo } from "react";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";

import routes from "./router";
import store from "./store";

import ZXAppHeader from "@/components/app-header";
import ZXAppFooter from "@/components/app-footer";
import ZXAppPlayerBar from '@/pages/player/app-player-bar'

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <ZXAppHeader />
        {renderRoutes(routes)}
        <ZXAppFooter />
        <ZXAppPlayerBar />
      </HashRouter>
    </Provider>
  );
});
