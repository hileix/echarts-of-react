import React from 'react';
import { storiesOf } from '@storybook/react';
import EchartsOfReact from '../src/EchartsOfReact';
import EchartsOfReactCore from '../src/EchartsOfReactCore';
import ReactMarkdown from 'react-markdown';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
// import moduleName from 'module';

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

storiesOf('EchartsOfReact', module)
  .add(
    'Docs',
    () => <ReactMarkdown source={require('../docs/EchartsOfReact.md')} />,
    {
      notes: { markdown: require('../docs/EchartsOfReact.md') }
    }
  )
  .add('Demo', () => (
    <EchartsOfReact
      defaultWidth={400}
      defaultHeight={400}
      option={option}
      id="chart-1"
    />
  ));

storiesOf('EchartsOfReactCore', module)
  .add('Docs', () => (
    <ReactMarkdown source={require('../docs/EchartsOfReactCore.md')} />
  ))
  .add('Demo', () => (
    <EchartsOfReactCore
      echarts={echarts}
      defaultWidth={400}
      defaultHeight={400}
      option={option}
      id="chart-2"
    />
  ));
