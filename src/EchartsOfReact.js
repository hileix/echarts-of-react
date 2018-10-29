import React from 'react';
import PropTypes from 'prop-types';
import echarts from 'echarts';

/**
 * echarts 的封装
 */
export default class EChartsOfReact extends React.Component {
  static propTypes = {
    /**
     * css 的 id 选择器
     */
    id: PropTypes.string.isRequired,

    /**
     * echarts 配置
     */
    option: PropTypes.object,

    /**
     * 图表宽度
     */
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,

    /**
     * 图表高度
     */
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
  };

  componentDidMount() {
    const { id, option } = this.props;
    this.chart = echarts.init(document.getElementById(id));
    if (!!option) {
      this.chart.setOption(option);
    }
    window.addEventListener('resize', this.chartSizeChange);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.option !== nextProps.option) {
      this.chart.setOption(nextProps.option);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.chartSizeChange);
  }

  chartSizeChange = () => {
    this.chart.resize();
  };

  render() {
    const { id, width, height } = this.props;
    return <div id={id} style={{ width, height }} />;
  }
}
