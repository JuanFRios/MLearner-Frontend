import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import ItemTop from 'components/statistics/ItemTop';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TopStudents({ topRacha, topProgress, topScore }) {
  const [topRachaItems, setTopRachaItems] = useState([]);
  const [topProgressItems, setTopProgressItems] = useState([]);
  const [topScoreItems, setTopScoreItems] = useState([]);
  useEffect(() => {
    setTopRachaItems(
      topRacha.map((e) => (
        <ItemTop
          icono='ic:sharp-local-fire-department'
          color='text-orange-600'
          element={e}
          typeTop='RACHA'
          key={`${e.nombreCompleto}Racha`}
        />
      ))
    );
    setTopProgressItems(
      topProgress.map((e) => (
        <ItemTop
          icono='grommet-icons:diamond'
          color='text-sky-400'
          element={e}
          typeTop='PERCENTAGE'
          key={`${e.nombreCompleto}Percentage`}
        />
      ))
    );
    setTopScoreItems(
      topScore.map((e) => {
        e.valor = parseFloat(e.valor).toFixed(0);
        return (
          <ItemTop
            icono='grommet-icons:diamond'
            color='text-sky-400'
            element={e}
            typeTop='SCORE'
            key={`${e.nombreCompleto}Score`}
          />
        );
      })
    );
  }, []);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '50%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          aria-label='basic tabs example'
        >
          <Tab
            label='Progreso'
            {...a11yProps(0)}
            className='focus:outline-none'
          />
          <Tab
            label='Puntaje'
            {...a11yProps(1)}
            className='focus:outline-none'
          />
          <Tab label='Racha' {...a11yProps(2)} className='focus:outline-none' />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {topProgressItems}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {topScoreItems}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {topRachaItems}
      </TabPanel>
    </Box>
  );
}
