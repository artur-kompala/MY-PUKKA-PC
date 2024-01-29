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
import { useParams } from "react-router-dom";
import ProductFilter from "./ProductFilter";
import Row from "../../ui/Row"

const StyledPriceChart = styled(ProductBox)`
  grid-column: 1 / -1;

  /* Hack to change grid line colors */
  & .recharts-cartesian-grid-horizontal line,
  & .recharts-cartesian-grid-vertical line {
    stroke: var(--color-grey-300);
  }
`;
function predict(prices) {
  let n = prices.length;
  let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0;

  // Obliczanie sum potrzebnych do wzorów
  for (let i = 0; i < n; i++) {
      sumX += i;
      sumY += prices[i].price;
      sumXY += i * prices[i].price;
      sumX2 += i * i;
  }

  // Obliczanie współczynników regresji liniowej
  let slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
  let intercept = (sumY - slope * sumX) / n;

  // Przewidywanie następnej ceny
  let nextPrice = slope * n + intercept;

  return nextPrice;
}

function generateNextSevenDates(dates,last) {
  const lastdate = dates.at(-1).date
  const oneDay = 24 * 60 * 60 * 1000;
  for (let i = 0; i < last; i++) {
    const currentDate = new Date(lastdate);
    currentDate.setTime(currentDate.getTime() + (i * oneDay));
    dates.push({date: currentDate.toISOString(),price: predict(dates)})

  }
  console.log(dates);
  return dates
}

function zmienNaDzienMiesiac(data) {
  let dataObj = new Date(data);
  let dzien = dataObj.getDate();
  let miesiac = dataObj.getMonth() + 1;

  
  dzien = dzien < 10 ? '0' + dzien : dzien;
  miesiac = miesiac < 10 ? '0' + miesiac : miesiac;

  return dzien + '.' + miesiac;
}

function PriceChart({chart,last}) {
  console.log(chart.length);
  const n = chart.length
  const {name} = useParams()
  const { isDarkMode } = useDarkMode();
  chart.forEach(obj=>{
    obj.price = Number(obj.price)
  })


 
  const data = generateNextSevenDates(chart,last).map((item, index) => {
    if(index === parseInt(n)-1){
      return {
        label: zmienNaDzienMiesiac(item.date),
        totalPrice: Number(item.price),
        extrasPrice: item.price,
      };
    }
    if(index <= parseInt(n)-1){
        return {
          label: zmienNaDzienMiesiac(item.date),
          totalPrice: Number(item.price),
        }
    }
    if(index >= parseInt(n)-1){
      return {
        label: zmienNaDzienMiesiac(item.date),
        extrasPrice: item.price,
      };
    }
    
    
    
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
      <Row type="horizontal">
      <Heading as="h3">
        {name} price from  &mdash;{" "}
      </Heading>
      <ProductFilter/>
      </Row>
      

      <ResponsiveContainer height={360} width="100%">
        <AreaChart data={data}>
          <XAxis
            dataKey="label"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <YAxis
            unit="zł"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <CartesianGrid strokeDasharray="1" />
          <Tooltip contentStyle={{ backgroundColor: colors.background }} />
          <Area
            dataKey="totalPrice"
            type="monotone"
            stroke={colors.totalPrice.stroke}
            fill={colors.totalPrice.fill}
            strokeWidth={3}
            name="Price"
            unit="zł"
          />
          <Area
            dataKey="extrasPrice"
            type="monotone"
            stroke={colors.extrasPrice.stroke}
            fill={colors.extrasPrice.fill}
            strokeWidth={2}
            name="Estimated price"
            unit="zł"
          />
        </AreaChart>
      </ResponsiveContainer>
    </StyledPriceChart>
  );
}

export default PriceChart;
