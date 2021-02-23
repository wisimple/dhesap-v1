import { Route, Switch, useRouteMatch } from "react-router-dom";

import List from "./List";
import Show from "./Show";
import Create from "./Create";

const Categories = () => {
  const { url } = useRouteMatch();

  return (
    <Route path={url}>
      <Switch>
        <Route path={`${url}/create`} component={Create} />
        <Route path={`${url}/:accountId`} component={Show} />
        <Route path={`${url}`} component={List} />
      </Switch>
    </Route>
  );
};

export default Categories;
