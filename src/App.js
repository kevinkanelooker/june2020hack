import React, { useState } from "react";
import {
  Button,
  Card,
  ComponentsProvider,
  CardContent,
  Paragraph,
  ButtonToggle,
  ButtonItem,
  ToggleSwitch,
  Label,
  Slider,
  Heading
} from "@looker/components";
import { Highchart } from "./Highchart";
import "./App.css";
import ReactCardFlip from "react-card-flip";

function App() {
  const [isFlipped, setFlipped] = useState(false);
  const [flipDirection, setFlipDirection] = useState("horizontal");
  const [infinite, toggleInfinite] = React.useState(false);
  const [flipSpeed, setFlipSpeed] = useState(.4)
  const handleInfiniteToggle = (event) => toggleInfinite(event.target.checked);

  const handleClick = (e) => {
    e.preventDefault();
    setFlipped(!isFlipped);
  };

  const onFlipSpeed = (event) => {
    setFlipSpeed(event.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <ComponentsProvider>
            <Button onClick={handleClick}>ReactCardFlip </Button>
            <ButtonToggle value={flipDirection} onChange={setFlipDirection}>
              <ButtonItem>horizontal</ButtonItem>
              <ButtonItem>vertical</ButtonItem>
            </ButtonToggle>
            <Label htmlFor="infiniteSwitch">
              Infinite rotation
              <ToggleSwitch
                onChange={handleInfiniteToggle}
                on={infinite}
                id="infiniteSwitch"
              />
            </Label>

            <Heading>
                <strong>Flip speed (bigger is slower):</strong>
              </Heading>
            <Slider width={'400px'} min={0} max={2} step={.1} onChange={onFlipSpeed} value={flipSpeed} />

            <ReactCardFlip
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
                <CardContent>
                  <Paragraph>Last Run: Just now </Paragraph>
                  <Paragraph>
                    Filters applied to this tile: Filter 1, filter 2, filter 3{" "}
                  </Paragraph>
                  <Paragraph>Auto Refresh: every 5 minutes </Paragraph>
                </CardContent>
              </Card>
            </ReactCardFlip>
        </ComponentsProvider>
      </header>
    </div>
  );
}

export default App;
