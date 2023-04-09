import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const LineChart = ({ data }) => {
    console.log(data);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let chart = null;

    if (chart) {
      chart.destroy();
    }

    chart = new Chart(context, {
      type: 'line',
      data: {
        labels: data.labels,
        datasets: [
          {
            label: data.title,
            data: data.data,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      },
    });

    return () => chart.destroy();
  }, [data]);

  return (
    <div>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default LineChart;
