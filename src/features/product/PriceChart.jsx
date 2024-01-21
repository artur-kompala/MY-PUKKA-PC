import styled from "styled-components";
import ProductBox from "./ProductBox";
import Heading from "../../ui/Heading";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useDarkMode } from "../../context/DarkModeContext";
import {  format} from "date-fns";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const StyledPriceChart = styled(ProductBox)`
  grid-column: 1 / -1;

  /* Hack to change grid line colors */
  & .recharts-cartesian-grid-horizontal line,
  & .recharts-cartesian-grid-vertical line {
    stroke: var(--color-grey-300);
  }
`;
function linearRegressionPredict(nextIndices, numbers) {
  const n = numbers.length;
  let sumX = 0, sumY = 0, sumXY = 0, sumXX = 0;

  for (let i = 0; i < n; i++) {
      sumX += i;
      sumY += numbers[i];
      sumXY += i * numbers[i];
      sumXX += i * i;
  }

  const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
  const intercept = (sumY - slope * sumX) / n;

  const predictions = [];
  for (let i = n; i < n + nextIndices; i++) {
      predictions.push(slope * i + intercept);
  }
  predictions.unshift(numbers[n-1])
  return predictions;
}



function PriceChart({ price, numDays}) {
  
  const {name} = useParams()
  const { isDarkMode } = useDarkMode();
  const ostatni = numDays[numDays.length - 1];
  const [dzien, miesiac, rok] = ostatni.split('-');
  const dataISO8601 = `${rok}-${miesiac}-${dzien}`;

  const ostatniaDataObiekt = new Date(dataISO8601);

  for(let i = 1; i < 8; i++) {
    const nowaData = `${ostatniaDataObiekt.getDate() + i}.${ostatniaDataObiekt.getMonth() + 1}.${ostatniaDataObiekt.getFullYear()}`;
    numDays.push(nowaData);
  }

  const predictions = linearRegressionPredict(7,price)
  console.log(predictions);

  const data = numDays.map((date, index) => {
    return {
      label: date,
      totalPrice: price[index],
      extrasPrice: predictions[index-6],
    };
  });

  const colors = isDarkMode
    ? {
        totalPrice: { stroke: "#4f46e5", fill: "#4f46e5" },
        extrasPrice: { stroke: "#22c55e", fill: "#22c55e" },
        text: "#e5e7eb",
        background: "#18212f",
      }
    : {
        totalPrice: { stroke: "#4f46e5", fill: "#c7d2fe" },
        extrasPrice: { stroke: "#16a34a", fill: "#dcfce7" },
        text: "#374151",
        background: "#fff",
      };

  return (
    <StyledPriceChart>
      <Heading as="h3">
        {name} price from {numDays.at(0)} &mdash;{" "}
        {numDays.at(-1)}{" "}
      </Heading>

      <ResponsiveContainer height={260} width="100%">
        <AreaChart data={data}>
          <XAxis
            dataKey="label"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <YAxis
            unit="PLN"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <CartesianGrid strokeDasharray="10" />
          <Tooltip contentStyle={{ backgroundColor: colors.background }} />
          <Area
            dataKey="totalPrice"
            type="monotone"
            stroke={colors.totalPrice.stroke}
            fill={colors.totalPrice.fill}
            strokeWidth={2}
            name="Total Price"
            unit="PLN"
          />
          <Area
            dataKey="extrasPrice"
            type="monotone"
            stroke={colors.extrasPrice.stroke}
            fill={colors.extrasPrice.fill}
            strokeWidth={2}
            name="Extras Price"
            unit="PLN"
          />
        </AreaChart>
      </ResponsiveContainer>
    </StyledPriceChart>
  );
}

export default PriceChart;
