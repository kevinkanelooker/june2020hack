import React from 'react';
import { Card, ComponentsProvider, Text, Heading, CardContent } from '@looker/components'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ComponentsProvider>
         <Card raised>
          <CardContent>
            <Heading textTransform="">
              Welcome to Looker Components
            </Heading>
            <Text>Looker'dss component library</Text>
          </CardContent>
         </Card>
        </ComponentsProvider>
      </header>
    </div>
  );
}

export default App;
