import React, { memo, Suspense } from "react";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";

import routes from "./router";
import store from "./store";

import ZXAppHeader from "@/components/app-header";
import ZXAppFooter from "@/components/app-footer";
import ZXAppPlayerBar from "@/pages/player/app-player-bar";

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <ZXAppHeader />
        <Suspense fallback={<div>page loading</div>}>
          {renderRoutes(routes)}
        </Suspense>
        <ZXAppFooter />
        <ZXAppPlayerBar />
      </HashRouter>
    </Provider>
  );
});
