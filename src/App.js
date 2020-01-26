import React from 'react';

// Components
import { Header } from './components';

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
