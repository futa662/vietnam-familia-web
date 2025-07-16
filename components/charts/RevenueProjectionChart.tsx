"use client";

import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { revenueProjectionData } from "@/lib/data/market-data";

export default function RevenueProjectionChart() {
  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={revenueProjectionData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            dataKey="year"
            stroke="#6b7280"
            style={{ fontSize: "14px" }}
          />
          <YAxis 
            yAxisId="left"
            stroke="#6b7280"
            style={{ fontSize: "14px" }}
            label={{ value: "売上（億円）", angle: -90, position: "insideLeft", style: { fontSize: "14px" } }}
          />
          <YAxis 
            yAxisId="right"
            orientation="right"
            stroke="#6b7280"
            style={{ fontSize: "14px" }}
            label={{ value: "導入棟数", angle: 90, position: "insideRight", style: { fontSize: "14px" } }}
          />
          <Tooltip 
            formatter={(value: any, name: string) => {
              if (name === "売上") return `${value}億円`;
              return `${value}棟`;
            }}
            contentStyle={{ backgroundColor: "#fff", border: "1px solid #e5e7eb", borderRadius: "8px" }}
          />
          <Legend 
            wrapperStyle={{ paddingTop: "20px" }}
          />
          <Bar 
            yAxisId="left"
            dataKey="revenue" 
            fill="#14b8a6"
            name="売上"
            radius={[8, 8, 0, 0]}
          />
          <Line 
            yAxisId="right"
            type="monotone" 
            dataKey="buildings" 
            stroke="#0d9488" 
            strokeWidth={3}
            dot={{ fill: "#0d9488", r: 6 }}
            name="導入棟数"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}