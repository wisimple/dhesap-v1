import { Route, Switch, useRouteMatch } from "react-router-dom";

import CategoryList from "./List";
import CategoryShow from "./Show";
import CategoryCreate from "./Create";

const Categories = () => {
  const { url } = useRouteMatch();

  return (
    <Route path={url}>
      <Switch>
        <Route path={`${url}/create`} component={CategoryCreate} />
        <Route path={`${url}/:categoryId`} component={CategoryShow} />
        <Route path={`${url}`} component={CategoryList} />
      </Switch>
    </Route>
  );
};

export default Categories;
