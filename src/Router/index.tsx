import { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import BasicExample from "../components/BasicExample";
import CustomRouter from "./CustomRouter";
import { createBrowserHistory } from "history";
import { RoutePaths, routePaths } from "./RoutePaths";
import Nav from "../components/Nav";

export const routerHistory = createBrowserHistory();
const Router = () => {
  return (
    <Suspense fallback={"Loading..."}>
      <CustomRouter history={routerHistory}>
        <Nav />
        <Routes>
          <Route path="/">
            <Route index element={<Navigate to={RoutePaths.BASIC} />} />
            <Route path="react-fiber-tutorial">
              <Route index element={<Navigate to={routePaths[0].path} />} />
              {routePaths.map(({ path, element }, index) => (
                <Route
                  key={`router-path-${index}`}
                  path={path}
                  element={element}
                />
              ))}
            </Route>
            <Route path={`*`} element={<div>404</div>} />
          </Route>
        </Routes>
      </CustomRouter>
    </Suspense>
  );
};

export default Router;
