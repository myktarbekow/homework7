import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = ({ dataPoints = [] }) => {
  const dataPointsValues = dataPoints.map((point) => point.value);
  const totalmax = Math.max(...dataPointsValues);
  return (
    <div className="chart">
      {dataPoints.map((point, index) => (
        <ChartBar
          key={index}
          maxValue={totalmax}
          label={point.label}
          value={point.value}
        />
      ))}
    </div>
  );
};

export default Chart;
