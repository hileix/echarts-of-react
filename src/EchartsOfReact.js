import React from 'react';
import echarts from 'echarts';
import EchartsOfReactCore from './EchartsOfReactCore';
/**
 * echarts 的封装
 */
export default class EChartsOfReact extends React.Component {
  render() {
    return <EchartsOfReactCore echarts={echarts} {...this.props} />;
  }
}
