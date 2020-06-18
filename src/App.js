import {
  Box,
  ButtonItem,
  ButtonToggle,
  ComponentsProvider,
} from "@looker/components";
import React, { useState } from "react";
import { ReactCardFlip } from "./ReactCardFlip";
import { ScaleGrid } from "./ScaleGrid";

function App() {
  const [modeSelected, setModeSelected] = useState('0');

  return (
    <div className="App">
      <header className="App-header">
        <ComponentsProvider>
          <Box marginLeft={"20px"} marginTop={"14px"} paddingBottom={'10px'}>
            <ButtonToggle value={modeSelected} onChange={setModeSelected}>
              <ButtonItem value="0">Dashboard Element Flip</ButtonItem>
              <ButtonItem value="1">Dashboard Mini View</ButtonItem>
            </ButtonToggle>
          </Box>
          {modeSelected === "0" && <ReactCardFlip />}
          {modeSelected === "1" && <ScaleGrid />}
        </ComponentsProvider>
      </header>
    </div>
  );
}

export default App;
