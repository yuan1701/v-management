import React from 'react';
import ReactDOM from 'react-dom';
// import App from './pages/home';
import * as serviceWorker from './serviceWorker';
import { DatePicker } from 'antd';


const App = () => (
  <div>
    <DatePicker />
    <br />
  </div>
);


ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
