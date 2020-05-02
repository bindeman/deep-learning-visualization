import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Navigation from './components/Navigation/Navigation';
import Create from './components/Create/Create';
import Train from './components/Train/Train';
import Metrics from './components/Metrics/Metrics';
import Predict from './components/Predict/Predict';
import ProjectSummary from './components/ProjectSummary/ProjectSummary';

import Error from './components/Error';

 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Create} exact/>
             <Route path="/Train" component={Train}/>
             <Route path="/Metrics" component={Metrics}/>
             <Route path="/Predict" component={Predict}/>
             <Route path="/ProjectSummary" component={ProjectSummary}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;