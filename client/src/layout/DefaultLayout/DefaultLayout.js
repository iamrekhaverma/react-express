import React from 'react';
import DefaultHeader from './DefaultHeader';
import {openRoutes} from "../../routes";
import { Footer1 } from "./Footer";
import { Route, Switch } from "react-router-dom";


class DefaultLayout extends React.Component {
  

  render( ) {
    return (
      <div>
        <DefaultHeader/>
        <div>
          <Switch>
            {openRoutes.map((route, idx) => {
                return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                    <route.component {...props} />
                  )} />)
                  : (null);
              })}
          </Switch>
        </div>
        <Footer1/>
      </div>
    )
  }
}

export default DefaultLayout;
