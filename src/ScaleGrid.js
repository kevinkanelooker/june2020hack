import React, { useState } from "react";
import {
  Card,
  Box,
  Heading,
  Slider,
  Text,
  ButtonToggle,
  ButtonItem,
} from "@looker/components";
import styled from "styled-components";
import { dashboard2 } from "./dashboard2";
import { dashboard1 } from "./dashboard1";
import { TileIcon } from "./TileIcon";
const compareGridItems = (a, b) => {
  if (a.row < b.row) {
    return -1;
  }
  if (a.row === b.row) {
    return a.column - b.column;
  } else {
    return 1;
  }
};

const getGridItems = (dashboard) => {
  const gridItems = dashboard.dashboard_layouts[0].dashboard_layout_components.sort(
    compareGridItems
  );
  const result = gridItems.map((item) => {
    const element = dashboard.dashboard_elements.filter(
      (element) => element.id == item.id
    )[0];
    const type =
      element.type === "text" ? "text" : element.result_maker.vis_config.type;
    return {
      ...item,
      type,
    };
  });
  return result;
};
const dashboards = [getGridItems(dashboard1), getGridItems(dashboard2)];

export const ScaleGrid = () => {
  const [scaleFactor, setScaleFactor] = useState(1.5);
  const onScaleFactorChange = (event) => {
    setScaleFactor(event.target.value);
  };

  const [dashboardSelected, setDashboardSelected] = useState(0);
  const [hoveredItem, setHoveredItem] = useState(0);

  return (
    <>
      <Box marginLeft={"20px"} marginTop={"14px"}>
        <ButtonToggle value={dashboardSelected} onChange={setDashboardSelected}>
          <ButtonItem value="0">Dashboard 1</ButtonItem>
          <ButtonItem value="1">Dashboard 2</ButtonItem>
        </ButtonToggle>
        <Heading>
          <strong>Scale factor</strong>
        </Heading>
        <Slider
          width={"400px"}
          min={1}
          max={2.6}
          step={0.1}
          onChange={onScaleFactorChange}
          value={scaleFactor}
        />

      <Text>Hovering on Item: {hoveredItem === 0 ? "none" : hoveredItem}</Text>
      </Box>
      <Box width={Math.floor(100 / scaleFactor) + "vw"}>
        <FixedGridLayoutContainer scaleFactor={scaleFactor}>
          <GridItems
            gridItems={dashboards[dashboardSelected]}
            setHoveredItem={setHoveredItem}
          />
        </FixedGridLayoutContainer>
      </Box>
    </>
  );
};

const GridItems = (props) => {
  return props.gridItems.map((cv, index) => {
    const mouseIn = () => {
      props.setHoveredItem(index + 1);
    };
    const mouseOut = () => {
      props.setHoveredItem(0);
    };
    return (
      <Item key={index} item={makeGridItem(cv)}>
        <Card
          raised={true}
          minWidth={0}
          borderRadius={"6px"}
          border={"none"}
          onMouseOver={mouseIn}
          onMouseOut={mouseOut}
        >
          <Text ml={"12px"} mt={"8px"} fontWeight={"semiBold"}>
            {index + 1}
          </Text>

          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            height={"100%"}
            overflow={"visible"}
          >
            <TileIcon
              visType={cv.type}
              size={"large"}
              display={"block"}
              margin={"auto"}
            />
          </Box>
        </Card>
      </Item>
    );
  });
};

const Item = styled.div`
  grid-column-start: ${(props) => props.item.colStart};
  grid-column-end: ${(props) => props.item.colEnd};
  grid-row-start: ${(props) => props.item.rowStart};
  grid-row-end: ${(props) => props.item.rowEnd};
`;

const FixedGridLayoutContainer = styled.div`
  ${(props) => console.log(props)}
  height: 100%;
  width: 100%;
  display: grid;
  grid-gap: ${(props) => Math.floor(25 / props.scaleFactor)}px;
  grid-template-columns: repeat(26, 1fr);
  grid-auto-rows: ${(props) => Math.floor(40 / props.scaleFactor)}px;
`;

const makeGridItem = (input) => ({
  colStart: input.column + 2,
  colEnd: input.column + 2 + input.width,
  rowStart: input.row + 1,
  rowEnd: input.row + 1 + input.height,
});
