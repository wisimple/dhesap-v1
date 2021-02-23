import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import DashboardLayout from "layouts/DashboardLayout";

import HomePage from "pages/dashboard/Home";
import CategoriesPage from "pages/dashboard/categories";
import AccountsPage from "pages/dashboard/accounts";
import SettingsPage from "pages/dashboard/settings";

const Dashboard = () => {
  const { url } = useRouteMatch();

  console.log(url);

  return (
    <DashboardLayout>
      <Route path={url}>
        <Switch>
          <Route path={`${url}/categories`} component={CategoriesPage} />
          <Route path={`${url}/accounts`} component={AccountsPage} />
          <Route path={`${url}/settings`} component={SettingsPage} />
          <Route path={`${url}`} component={HomePage} />
        </Switch>
      </Route>
    </DashboardLayout>
  );
};

export default Dashboard;
