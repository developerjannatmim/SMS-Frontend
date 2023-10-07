// project import
import React, { Suspense } from 'react';
import Routes from './routes';
import ThemeCustomization from './themes';
import ScrollTop from './components/ScrollTop';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => (
  <ThemeCustomization>
    <ScrollTop>
      <Suspense fallback={<span>Loading...</span>}>
        <Routes />
      </Suspense>
    </ScrollTop>
  </ThemeCustomization>
);

export default App;
