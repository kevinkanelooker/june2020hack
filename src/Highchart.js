import React, {useEffect} from "react";
import Highcharts from 'highcharts'
import {visualization1} from './visualization1'


export const Highchart = () => {

  useEffect(() => {
    Highcharts.chart('container', visualization1)
  })
  return(
    <div id='container' />
  )
}
