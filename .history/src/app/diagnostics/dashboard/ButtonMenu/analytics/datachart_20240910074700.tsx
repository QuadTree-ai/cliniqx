"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

import { getTestsPerMonthData } from '../../data/datafetch'

export const description = "An interactive bar chart for diagnostic data"

const chartConfig = {
  views: {
    label: "Diagnostic Center Data",
    color: "hsl(var(--chart-0))", // Add this line
  },
  tests: {
    label: "Tests Conducted",
    color: "hsl(var(--chart-1))",
  },
  patients: {
    label: "Patients Seen",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function DiagnosticChart() {
  const [activeChart, setActiveChart] = React.useState<keyof typeof chartConfig>("tests")

  const chartData = getTestsPerMonthData()

  const total = React.useMemo(
    () => ({
      tests: chartData.reduce((acc, curr) => acc + curr.tests, 0),
      patients: chartData.reduce((acc, curr) => acc + curr.patients, 0),
    }),
    [chartData]
  )

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Test and Patient Data</CardTitle>
          <CardDescription>
            Showing tests conducted and patients seen for the last 6 months
          </CardDescription>
        </div>
        <div className="flex">
          {(["tests", "patients"] as const).map((key) => (
            <button
              key={key}
              aria-label={`Show ${chartConfig[key].label}`}
              aria-pressed={activeChart === key}
              className={`relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l sm:border-l sm:border-t-0 sm:px-8 sm:py-6 ${
                activeChart === key ? "bg-muted/50" : ""
              }`}
              onClick={() => setActiveChart(key)}
            >
              <span className="text-xs text-muted-foreground">
                {chartConfig[key].label}
              </span>
              <span className="text-lg font-bold leading-none sm:text-3xl">
                {total[key].toLocaleString()}
              </span>
            </button>
          ))}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            data={chartData}
            margin={{ top: 10, right: 10, left: 40, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickFormatter={(value) => new Date(value).toLocaleDateString("en-US", { month: "short" })}
            />
            <YAxis />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey={activeChart}
                  labelFormatter={(value) => new Date(value).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                />
              }
            />
            <Bar dataKey={activeChart} fill={chartConfig[activeChart]?.color ?? "#000"} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

