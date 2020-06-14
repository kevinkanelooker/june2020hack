import React, {useEffect} from "react";
import {
  Card,
  ComponentsProvider,
  CardContent,
  Box,
} from "@looker/components";
import Highcharts from 'highcharts'
import "./App.css";

function App() {


useEffect(() => {
  Highcharts.chart('container', demoHighcharts)
})
  return (
    <div className="App">
      <header className="App-header">
        <ComponentsProvider>
          <Card raised>
            <CardContent>
              <Box width={'400px'}>
                <div id="container" />
              </Box>
            </CardContent>
          </Card>
        </ComponentsProvider>
      </header>
    </div>
  );
}

export default App;


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
