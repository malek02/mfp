import React from 'react';
import ReactDOM from 'react-dom';

import {mount} from 'marketing/Marketing';
import MarketingApp from '../components/MarketingApp';
console.log(mount)

  ReactDOM.render(<div><h1>Hi there! container</h1>
  <MarketingApp />
  </div>, document.querySelector("#root"));


