

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './components/sidebaridebar';
import Analytics from './components/analyticsnalytics';
import DataAnalytics from '.components/DataAnalytics';
import TradeData from '.components/TradeData';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <Switch>
          <Route path="/analytics" component={Analytics} />
          {

          }
        </Switch>
      </div>
      <div className="app">
      <DataAnalytics />
      {

      }
    </div>
      <div className="app">
      <TradeData />
      {
        
      }
    </div>
    </Router>
  );
}

export default App;