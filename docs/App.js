import React, { Component } from 'react';
// import EchartsOfReact from '../index';
// import EchartsOfReactCore from '../src/EchartsOfReactCore';
import EchartsOfReact from '../src/EchartsOfReact';
import echarts from 'echarts';

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
        {/* <EchartsOfReactCore
          id="chart-1"
          echarts={echarts}
          defaultWidth={400}
          defaultHeight={400}
          option={option}
        /> */}
        <EchartsOfReact
          echarts={echarts}
          id="chart-1"
          defaultWidth={400}
          defaultHeight={400}
          option={option}
        />
      </div>
    );
  }
}
