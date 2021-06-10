import React, { memo } from "react";
import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";

import routes from "./router";

import ZXAppHeader from "@/components/app-header";
import ZXAppFooter from "@/components/app-footer";

export default memo(function App() {
  return (
    <HashRouter>
      <ZXAppHeader />
      {renderRoutes(routes)}
      <ZXAppFooter />
    </HashRouter>
  );
});
