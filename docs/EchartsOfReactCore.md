# `EchartsOfReactCore`

In order to reduce echarts package size, you can use this component.

But you must import `Echarts related components`.

## Usage

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import EchartsOfReactCore from 'echarts-of-react/lib/EchartsOfReactCore';

// import echarts component
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';

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

class App extends React.Component {
  render() {
    return (
      <EchartsOfReact
        id="my-chart-1"
        defaultWidth={400}
        defaultHeight={400}
        option={option}
      />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
```

## API

|   property    |       propType       | required | default |          description           |
| :-----------: | :------------------: | :------: | :-----: | :----------------------------: |
|    echarts    |       `object`       |    Y     |    -    |         echarts object         |
|      id       |       `string`       |    Y     |    -    | A unique identifier to echarts |
|    option     |       `object`       |    N     |    -    |         echarts option         |
| defaultWidth  | `number` \| `string` |    Y     |    -    |      chart default width       |
| defaultHeight | `number` \| `string` |    Y     |    -    |      chart default height      |
