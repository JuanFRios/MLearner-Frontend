import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { getDayOfWeek } from 'utils/date';

const RachaReport = ({ days }) => {
  console.log('first', days);
  const [options, setOptions] = useState(null);
  useEffect(() => {
    const categories = days.map((d) => getDayOfWeek(d.fecha));
    const score = days.map((d) => d.puntajeAcumulado);
    setOptions({
      options: {
        chart: {
          id: 'basic-bar',
        },
        xaxis: {
          categories,
        },
      },
      series: [
        {
          name: 'Puntaje',
          data: score,
        },
      ],
      yaxis: [
        {
          title: {
            text: 'Website Blog',
          },
        },
      ],
    });
    console.log(options);
  }, []);
  if (!options) {
    return <p>d</p>;
  }
  return (
    <div>
      <Chart
        options={options.options}
        series={options.series}
        type='line'
        width='500'
      />
    </div>
  );
};

export default RachaReport;
