import React, {useState} from "react";
import { ComponentsProvider, Card, Box, Heading, Slider, Divider, Icon } from "@looker/components";
import { ReactCardFlip } from "./ReactCardFlip";
import styled from "styled-components";


// const rowHeight = 40
// const numberOfColumns = 24
const gridItems = [
  {
    row: 0,
    column: 0,
    width: 8,
    height: 6,
    dashboard_element_id: 12,
    type: 'vis'
  },
  {
    row: 0,
    column: 8,
    width: 8,
    height: 6,
    dashboard_element_id: 13,
    type: 'text'
  },
  {
    row: 6,
    column: 0,
    width: 24,
    height: 6,
    dashboard_element_id: 14,
    type: 'vis'
  },
];

function App() {
  const [scaleFactor, setScaleFactor] = useState(1.5);
const onScaleFactorChange = (event) => {
  setScaleFactor(event.target.value);
};
  return (
    <div className="App">
      <header className="App-header">
        <ComponentsProvider>
        <Heading>
            <strong>Scale factor</strong>
            </Heading>
            <Slider
              width={"400px"}
              min={1}
              max={4.0}
              step={0.1}
              onChange={onScaleFactorChange}
              value={scaleFactor}
            />
          <Box width={(Math.floor(100/scaleFactor)+'vw')}>
            <FixedGridLayoutContainer scaleFactor={scaleFactor}>
              <GridItems gridItems={gridItems} />
            </FixedGridLayoutContainer>
          </Box>
          <Divider />
          <ReactCardFlip />
        </ComponentsProvider>
      </header>
    </div>
  );
}

const GridItems = (props) => {
  return props.gridItems.map((cv, index) => {
    return (
      <Item key={index} item={makeGridItem(cv)}>
        <Card
          raised={true}
          minWidth={0}
        >
          {index}
          <Icon name={getIcon(cv.type)} size="large"/>
        </Card>
      </Item>
    );
  });
};

export default App;

const getIcon = (type) =>
  type === 'vis' ? 'Visualization' : 'FormatTitle'

const Item = styled.div`
  background-color: blue;
  grid-column-start: ${(props) => props.item.colStart};
  grid-column-end: ${(props) => props.item.colEnd};
  grid-row-start: ${(props) => props.item.rowStart};
  grid-row-end: ${(props) => props.item.rowEnd};
`;

const FixedGridLayoutContainer = styled.div`
${props => console.log(props)}
  background-color: green;
  height: 100%;
  width: 100%;
  display: grid;
  grid-gap: ${props => Math.floor(25 / props.scaleFactor)}px;
  grid-template-columns: repeat(26, 1fr);
  grid-auto-rows: ${props => Math.floor(40 / props.scaleFactor)}px;
`;

const makeGridItem = (input) => ({
  colStart: input.column + 2,
  colEnd: input.column + 2 + input.width,
  rowStart: input.row + 1,
  rowEnd: input.row + 1 + input.height,
});
