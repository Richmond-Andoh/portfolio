"use client"

import * as React from "react"
import {
  Area,
  AreaChart as RechartsAreaChart,
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  LabelList,
  Legend,
  Line,
  LineChart as RechartsLineChart,
  Pie,
  PieChart as RechartsPieChart,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  XAxis,
  YAxis,
  type TooltipProps as RechartsTooltipProps,
  type TooltipProps,
} from "recharts"
import { cn } from "@/lib/utils"

const ChartContainer = ({
  children,
  className,
  config,
  ...props
}: React.ComponentProps<typeof ResponsiveContainer> & {
  config: ChartConfig
}) => {
  return (
    <div className={cn("h-[300px] w-full", className)}>
      <ResponsiveContainer width="100%" height="100%" {...props}>
        {children}
      </ResponsiveContainer>
      <div className="mt-4 flex flex-wrap justify-center gap-4">
        {Object.entries(config).map(([key, { label, color }]) => (
          <div key={key} className="flex items-center gap-2">
            <div
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: color }}
            />
            <span className="text-sm text-muted-foreground">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const ChartTooltip = ({
  active,
  payload,
  label,
  content: Content = ChartTooltipContent as any,
  ...props
}: TooltipProps<number, string> & {
  content?: React.ComponentType<any>
}) => {
  if (!active || !payload?.length) return null
  return <Content active={active} payload={payload} label={label} {...props} />
}

interface ChartTooltipContentProps extends RechartsTooltipProps<number, string> {
  active?: boolean
  payload?: Array<{
    value: any
    name: string
    payload: any
    color: string
    dataKey: string
  }>
  label?: string | number
  indicator?: "line" | "dot"
  formatter?: (value: any, name: string, item: any) => [string, string] | string
  labelFormatter?: (label: string | number) => string
}

const ChartTooltipContent = ({
  active,
  payload,
  label,
  indicator = "line",
  formatter,
  labelFormatter,
}: ChartTooltipContentProps) => {
  if (!active || !payload?.length) return null

  return (
    <div className="rounded-lg border bg-background p-4 shadow-sm">
      {label && labelFormatter && (
        <p className="mb-2 text-sm font-medium">{labelFormatter(label)}</p>
      )}
      <div className="space-y-1">
        {payload?.map((item, index) => {
          let displayValue: React.ReactNode = item.value
          let displayName: React.ReactNode = item.name
          
          if (formatter) {
            const formatted = formatter(item.value, item.name, item)
            if (Array.isArray(formatted)) {
              displayValue = formatted[0]
              displayName = formatted[1] || displayName
            } else {
              displayValue = formatted
            }
          }
          
          return (
            <div key={`item-${index}`} className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                {indicator === "dot" && (
                  <div
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                )}
                <span className="text-sm text-muted-foreground">
                  {displayName}
                </span>
              </div>
              <span className="text-sm font-medium text-foreground">
                {displayValue}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const AreaChart = ({
  data,
  className,
  ...props
}: React.ComponentProps<typeof RechartsAreaChart> & {
  className?: string
}) => (
  <RechartsAreaChart
    data={data}
    margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
    {...props}
  />
)

const LineChart = ({
  data,
  className,
  ...props
}: React.ComponentProps<typeof RechartsLineChart> & {
  className?: string
}) => (
  <RechartsLineChart
    data={data}
    margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
    {...props}
  />
)

const BarChart = ({
  data,
  className,
  ...props
}: React.ComponentProps<typeof RechartsBarChart> & {
  className?: string
}) => (
  <RechartsBarChart
    data={data}
    margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
    {...props}
  />
)

const PieChart = ({
  data,
  className,
  ...props
}: React.ComponentProps<typeof RechartsPieChart> & {
  className?: string
}) => <RechartsPieChart data={data} {...props} />

interface ChartConfig {
  [key: string]: {
    label: string
    color: string
  }
}

interface ChartDataItem {
  [key: string]: string | number
}

interface ChartTooltipItem {
  name: string
  value: number | string
  payload: any
  color: string
  dataKey: string
}

type Formatter = (value: any, name: string, props: any) => [string, string] | string

export type { ChartDataItem, ChartTooltipItem, Formatter }

export {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  LabelList,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
}

export type { ChartConfig }
