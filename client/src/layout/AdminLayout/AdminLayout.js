import React from 'react';
import AdminHeader from './AdminHeader';
import {dashboardRoutes} from "../../routes";
import { Route, Switch } from "react-router-dom";


class AdminLayout extends React.Component {

  render( ) {
    return (
      <div>
        {/* <AdminHeader/> */}
        <div>
          <Switch>
            {dashboardRoutes.map((route, idx) => {
                return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                    <route.component {...props} />
                  )} />)
                  : (null);
              })}
          </Switch>
        </div>
      </div>
    )
  }
}

export default AdminLayout;
