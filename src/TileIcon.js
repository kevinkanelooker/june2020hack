import { Icon } from '@looker/components'
import * as React from 'react'
import styled from 'styled-components'

const UnstyledTileIcon = ({ visType, ...props }) => (
  <Icon name={visTypeToIconName(visType)} {...props} />
)

export const TileIcon = styled(UnstyledTileIcon)`
  color: grey;
  preserveAspectRatio="xMidYMin";
`

const visTypeIconMap = {
  table: 'ChartTable',
  looker_grid: 'ChartTable',
  looker_pie: 'ChartPie',
  looker_area: 'ChartArea',
  looker_bar: 'ChartBar',
  looker_column: 'ChartColumn',
  looker_line: 'ChartLine',
  looker_map: 'ChartMap',
  looker_scatter: 'ChartScatterplot',
  single_value: 'ChartSingleValue',
}
 const visTypeToIconName = (visType) => {
  const iconName = visTypeIconMap[visType] || 'Visualization'
  return iconName
}
