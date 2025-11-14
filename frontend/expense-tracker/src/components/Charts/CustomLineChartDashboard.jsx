import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CustomLineChartDashboard = ({ data = [] }) => {
  // Custom tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const { category, amount } = payload[0].payload;
      return (
        <div className="bg-white shadow-md rounded-lg p-2 border border-gray-300">
          <p className="text-xs font-semibold text-purple-800 mb-1">{category}</p>
          <p className="text-sm text-gray-600">
            Amount:{" "}
            <span className="text-sm font-medium text-gray-900">₹{amount}</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white mt-6">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="none" />
          <XAxis dataKey="category" tick={{ fontSize: 12, fill: "#555" }} />
          <YAxis tick={{ fontSize: 12, fill: "#555" }} />
          <Tooltip content={<CustomTooltip />} />

          <Line
            type="monotone"
            dataKey="amount"
            stroke="#875cf5"
            strokeWidth={3}
            dot={{ r: 5, strokeWidth: 2, fill: "#cfbefb" }}
            activeDot={{ r: 7, fill: "#875cf5" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomLineChartDashboard;
