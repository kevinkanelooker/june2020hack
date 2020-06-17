import React from "react";
import RGL, { WidthProvider } from "react-grid-layout";

const GridLayout = WidthProvider(RGL);

export const ReactGridLayout = () => {
  return (
    <GridLayout className="layout" rowHeight={30}>
      <div key="1" data-grid={{ x: 0, y: 0, w: 2, h: 3, static: true }}>
        <span className="text">1</span>
      </div>
      <div key="2" data-grid={{ x: 2, y: 0, w: 4, h: 3, static: true }}>
        <span className="text">2 - Static</span>
      </div>
      <div key="3" data-grid={{ x: 6, y: 0, w: 2, h: 3, static: true }}>
        <span className="text">3</span>
      </div>
      <div
        key="4"
        data-grid={{
          x: 8,
          y: 0,
          w: 4,
          h: 3,
          draggableHandle: ".react-grid-dragHandleExample",
        }}
      >
        <span className="text">
          4 - Draggable with Handle
          <hr />
          <hr />
          <span className="react-grid-dragHandleExample">[DRAG HERE]</span>
          <hr />
          <hr />
        </span>
      </div>
    </GridLayout>
  );
};
