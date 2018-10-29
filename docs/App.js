import React, { Component } from 'react';
import EchartsOfReact from '../index';
const option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line'
    }
  ]
};

export default class App extends Component {
  render() {
    return (
      <div>
        <EchartsOfReact
          id="my-chart"
          width={'100%'}
          height={400}
          option={option}
        />
      </div>
    );
  }
}
