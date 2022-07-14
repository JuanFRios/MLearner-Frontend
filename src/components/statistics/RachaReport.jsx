import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

const RachaReport = () => {
  console.log('first');
  const [options, setOptions] = useState(null);
  useEffect(() => {
    setOptions({
      options: {
        chart: {
          id: 'basic-bar',
        },
        xaxis: {
          categories: ['Lun', 'Mar', 'Mier', 'Jue', 'Vie', 'Sab', 'Dom'],
        },
      },
      series: [
        {
          name: 'Puntaje',
          data: [30, 40, 45, 50, 49, 60],
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
