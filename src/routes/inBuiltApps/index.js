import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import asyncComponent from "util/asyncComponent";


const InBuiltApps = ({match}) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/contacts`}/>
    <Route path={`${match.url}/contacts`} component={asyncComponent(() => import('./Contact'))}/>
    <Route path={`${match.url}/chat`} component={asyncComponent(() => import('./Chat/index'))}/>
    <Route path={`${match.url}/mail`} component={asyncComponent(() => import('./Mail'))}/>
    <Route path={`${match.url}/todo`} component={asyncComponent(() => import('./Todo'))}/>
    <Route path={`${match.url}/notes`} component={asyncComponent(() => import('./Notes'))}/>
    <Route path={`${match.url}/firebase-crud`} component={asyncComponent(() => import('./FirebaseCRUD'))}/>
    <Route path={`${match.url}/user`} component={asyncComponent(() => import('./User'))}/>
    <Route path={`${match.url}/vocab`} component={asyncComponent(() => import('./Vocab'))}/>
    <Route path={`${match.url}/reading`} component={asyncComponent(() => import('./Reading'))}/>
    <Route path={`${match.url}/listening`} component={asyncComponent(() => import('./Listening'))}/>
  </Switch>
);

export default InBuiltApps;
