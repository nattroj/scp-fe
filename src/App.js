import React from 'react';

// Components
import { Header } from './components/Navigation';
import { Home } from './components';

// Routes
import SiteRoutes from './SiteRoutes';

const App = () => {
  return (
    <div className="App">
      <Header /> 
      <SiteRoutes />
    </div>
  );
}

export default App;
