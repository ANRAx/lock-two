import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header'
import Card from './Card';
import Footer from './Footer';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

ReactDOM.render(
  <div>
    <div className="tc">
      <Header />
    </div>
    <div className="tc pt7">
      <Card />
    </div>
    <div className="tc">
      <Footer />
    </div>
  </div>
  , document.getElementById('root')
);

serviceWorker.unregister();