"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

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

export const description = "An interactive bar chart for diagnostic data"

const chartData = [
  { date: "2024-01-01", tests: 50, patients: 40 },
  { date: "2024-01-02", tests: 60, patients: 45 },
  { date: "2024-01-03", tests: 55, patients: 42 },
  { date: "2024-01-04", tests: 70, patients: 55 },
  { date: "2024-01-05", tests: 65, patients: 50 },
  { date: "2024-01-06", tests: 80, patients: 60 },
  { date: "2024-01-07", tests: 75, patients: 58 },
]

const chartConfig = {
  views: {
    label: "Diagnostic Center Data",
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
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("tests")

  const total = React.useMemo(
    () => ({
      tests: chartData.reduce((acc, curr) => acc + curr.tests, 0),
      patients: chartData.reduce((acc, curr) => acc + curr.patients, 0),
    }),
    []
  )

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardDescription>
            Showing tests conducted and patients seen for the last week
          </CardDescription>
        </div>
        <div className="flex">
          {["tests", "patients"].map((key) => {
            const chart = key as keyof typeof chartConfig
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}