import React, {useEffect} from "react";
import Highcharts from 'highcharts'


export const Highchart = () => {

  useEffect(() => {
    Highcharts.chart('container', demoHighcharts)
  })
  return(
    <div id='container' />
  )
}

const demoHighcharts = {
  chart: {
      type: 'bar'
  },
  title: {
      text: 'Fruit Consumption'
  },
  xAxis: {
      categories: ['Apples', 'Bananas', 'Oranges']
  },
  yAxis: {
      title: {
          text: 'Fruit eaten'
      }
  },
  series: [{
      name: 'Jane',
      data: [1, 0, 4]
  }, {
      name: 'John',
      data: [5, 7, 3]
  }]
}
