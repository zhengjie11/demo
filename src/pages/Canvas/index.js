import React from 'react';
import CanvasCircle from './components/CanvasCircle';

const config = {
  data: [20, 40, 60, 80, 100],
  colorList: ['red', 'blue', 'black', 'yellow', 'green'],
  bgcolor: '#eee',
  lineWidth: 20,
  lineCap: 'butt',
};

const Canvas = () => <CanvasCircle config={config} />;

export default Canvas;
