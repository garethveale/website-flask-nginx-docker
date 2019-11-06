import React from 'react';
import Chart from "react-apexcharts";

class BarChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ['Python', 'C++', 'JS', 'React', 'Java', 'SQL', 'Pandas', 'Linux']
        }
      },
      series: [
        {
          name: "skill level",
          data: [80, 20, 50, 60, 50, 50, 40, 50]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="400"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BarChart;
