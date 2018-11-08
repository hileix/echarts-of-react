import React from 'react';
import PropTypes from 'prop-types';

/**
 * core component
 */
export default class EChartsOfReact extends React.Component {
  static propTypes = {
    /**
     * echarts object
     */
    echarts: PropTypes.object,

    /**
     * id selector
     */
    id: PropTypes.string.isRequired,

    /**
     * echarts option
     */
    option: PropTypes.object,

    /**
     * default width
     */
    defaultWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
      .isRequired,

    /**
     * default height
     */
    defaultHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
      .isRequired
  };

  componentDidMount() {
    const { id, option, echarts } = this.props;
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
    const { id, defaultWidth, defaultHeight } = this.props;
    return (
      <div id={id} style={{ width: defaultWidth, height: defaultHeight }} />
    );
  }
}
