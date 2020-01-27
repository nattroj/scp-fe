import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import { Home } from './components';

const SiteRoutes = () => {
  return (
    <Switch>
      <Route path='/services' />
      <Route path='/contact' />
      <Route path='/about' />
      <Route path='/careers' />
      <Route path='/' component={Home} />
    </Switch>
  )
}

export default SiteRoutes;