import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { BarChart, CartesianGrid, Tooltip, Legend, Bar, LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import VsjTitle from './VsjTitle';

// Generate Sales Data
function createData(name, month, amount) {
  return { month, amount };
}

const data = [
  createData('One', '0', 0),
  createData('Two', '3', 300),
  createData('Three', '6', 600),
  createData('Four', '9', 1800),
];

export default function VsjChart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <VsjTitle>Book Sales</VsjTitle>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="month"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}

          >


            <Label
              angle={0}
              position="left"
              style={{
                textAnchor: 'center',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Months
            </Label>



          </XAxis>
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Sales (₹)
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>

    </React.Fragment>
  );
}