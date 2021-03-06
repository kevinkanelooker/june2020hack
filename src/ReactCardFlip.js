import React, { useState } from "react";
import {
  Button,
  Card,
  Paragraph,
  ButtonToggle,
  ButtonItem,
  ToggleSwitch,
  Label,
  Slider,
  Heading,
  Grid,
  Box,
  SpaceVertical,
  CardContent,
  Text
} from "@looker/components";
import CardFlip from "react-card-flip";
import {Highchart} from './Highchart';

export const ReactCardFlip = () => {
  const [isFlipped, setFlipped] = useState(false);
  const [flipDirection, setFlipDirection] = useState("horizontal");
  const [infinite, toggleInfinite] = React.useState(false);
  const [flipSpeed, setFlipSpeed] = useState(0.4);
  const handleInfiniteToggle = (event) => toggleInfinite(event.target.checked);

  const handleClick = (e) => {
    e.preventDefault();
    setFlipped(!isFlipped);
  };

  const onFlipSpeed = (event) => {
    setFlipSpeed(event.target.value);
  };

  return (
    <Box width="800px">
      <Grid gap="xxxlarge">
        <Box>
          <CardFlip
            isFlipped={isFlipped}
            flipDirection={flipDirection}
            infinite={infinite}
            flipSpeedBackToFront={flipSpeed}
            flipSpeedFrontToBack={flipSpeed}
          >
            <Card width={"400px"} height={"400px"}>
              <Highchart />
            </Card>
            <Card width={"400px"} height={"400px"}>
              <Card>
                <CardContent>
                  <Paragraph> <Text fontWeight={'bold'}>Last Run:</Text> Just now</Paragraph>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <Paragraph> <Text fontWeight={'bold'}>Filters applied to this tile:</Text></Paragraph>
                  <Paragraph> Filter1, filter 2, filter 3</Paragraph>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <Paragraph>  <Text fontWeight={'bold'}>Auto Refresh:</Text> every 5 minutes</Paragraph>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <Paragraph> <Text fontWeight={'bold'}>Query Timezone:</Text> Query Timezone: GMAT</Paragraph>
                </CardContent>
              </Card>
            </Card>
          </CardFlip>
        </Box>
        <Box>
          <SpaceVertical gap={"large"}>
            <Button onClick={handleClick}>ReactCardFlip </Button>
            <ButtonToggle value={flipDirection} onChange={setFlipDirection}>
              <ButtonItem>horizontal</ButtonItem>
              <ButtonItem>vertical</ButtonItem>
            </ButtonToggle>
            <Label htmlFor="infiniteSwitch">
              <Text paddingRight={'10px'}>Infinite rotation</Text>
              <ToggleSwitch
                onChange={handleInfiniteToggle}
                on={infinite}
                id="infiniteSwitch"
              />
            </Label>

            <Heading>
              <strong>Flip speed (bigger is slower):</strong>
            </Heading>
            <Slider
              width={"400px"}
              min={0}
              max={4}
              step={0.1}
              onChange={onFlipSpeed}
              value={flipSpeed}
            />
          </SpaceVertical>
        </Box>
      </Grid>
    </Box>
  );
};
