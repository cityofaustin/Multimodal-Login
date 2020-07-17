import React, {Component} from 'react';

if (process.env.BROWSER) {
  require('../global.scss');
  require('./PalmTest.scss');
}

export default class PalmTest extends Component {
  render() {
    return (
      <div>Palm Detection</div>
    )
  }
}
