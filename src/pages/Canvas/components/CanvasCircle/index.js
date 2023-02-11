import React, { useEffect, useRef } from 'react';

const CanvasCircle = props => {
  const { config } = props;
  const canvasRef = useRef(null);

  const foregroundCircle = (start, end, color, context) => {
    const centerX = canvasRef.current.width / 2;
    const centerY = canvasRef.current.height / 2;
    context.save();
    context.strokeStyle = color;
    if (color === '#eee') {
      context.lineWidth = 0;
    } else {
      context.lineWidth = config.lineWidth;
    }
    context.lineCap = config.lineCap;
    const radius = centerX - context.lineWidth;
    context.beginPath();
    context.arc(centerX, centerY, radius, start, end, false);
    context.stroke();
    context.closePath();
    context.restore();
  };

  const drawCircle = circleObj => {
    const { ctx } = circleObj;
    ctx.beginPath();
    ctx.arc(circleObj.x, circleObj.y, circleObj.radius, circleObj.startAngle, circleObj.endAngle);
    // 设定曲线粗细度
    ctx.lineWidth = circleObj.lineWidth;
    // 给曲线着色
    ctx.strokeStyle = circleObj.color;
    // 连接处样式
    ctx.lineCap = 'butt';
    // 给环着色
    ctx.stroke();
    ctx.closePath();
    const radArr = [];
    const rad = (Math.PI * 2) / 400;
    config.data.forEach((item, index) => {
      radArr[index] = -Math.PI / 2 + (item + (index === 0 ? 0 : config.data[index - 1])) * rad;
      foregroundCircle(index === 0 ? -Math.PI / 2 : radArr[index - 1], radArr[index], config.colorList[index], ctx);
    });
  };

  const draw = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const { width, height } = canvas;
    const circleObj = {
      ctx,
      x: width / 2, // 圆心
      y: height / 2,
      radius: width / 2 - 20, // 半径
      // 半径比canvas宽的一半要小

      lineWidth: 20, // 环的宽度
    };
    circleObj.color = '#ccc';
    circleObj.startAngle = Math.PI * 0.95;
    circleObj.endAngle = Math.PI * 2 + Math.PI * 0.05;
    drawCircle(circleObj);
  };

  useEffect(() => {
    draw();
  }, []);

  return <canvas id="canvas" width="300" height="300" ref={canvasRef} />;
};

export default CanvasCircle;
