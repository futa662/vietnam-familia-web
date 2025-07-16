"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { marketGrowthData } from "@/lib/data/market-data";

export default function MarketGrowthChart() {
  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={marketGrowthData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            dataKey="year" 
            stroke="#6b7280"
            style={{ fontSize: "14px" }}
          />
          <YAxis 
            stroke="#6b7280"
            style={{ fontSize: "14px" }}
            label={{ value: "市場規模（億円）", angle: -90, position: "insideLeft", style: { fontSize: "14px" } }}
          />
          <Tooltip 
            formatter={(value: any) => `${value}億円`}
            contentStyle={{ backgroundColor: "#fff", border: "1px solid #e5e7eb", borderRadius: "8px" }}
          />
          <Legend 
            wrapperStyle={{ paddingTop: "20px" }}
          />
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="#14b8a6" 
            strokeWidth={3}
            dot={{ fill: "#14b8a6", r: 6 }}
            name="BMS市場規模"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}