import React from 'react';
import { Switch, Route } from 'react-router-dom';

const SiteRoutes = () => {
  return (
    <Switch>
      <Route path='/services' />
      <Route path='/contact' />
      <Route path='/about' />
      <Route path='/careers' />
      <Route path='/' />
    </Switch>
  )
}

export default SiteRoutes;