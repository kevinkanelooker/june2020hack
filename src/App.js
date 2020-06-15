import React, { useState } from "react";
import {
  Button,
  Card,
  ComponentsProvider,
  CardContent,
  Box,
  Text,
} from "@looker/components";
import { Highchart } from "./Highchart";
import "./App.css";
import ReactCardFlip from "react-card-flip";

function App() {
  const [isFlipped, setFlipped] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setFlipped(!isFlipped);
  };

  return (
    <div className="App">
      <header className="App-header">
        <ComponentsProvider>
          <Button onClick={handleClick}>Click to flip </Button>
          <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <Card>
              <CardContent>
                <Box width={"400px"} height={"400px"}>
                  <Highchart />
                </Box>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Box width={"400px"} height={"400px"}>
                  <Text>Wow this is great</Text>
                </Box>
              </CardContent>
            </Card>
          </ReactCardFlip>
        </ComponentsProvider>
      </header>
    </div>
  );
}

export default App;
