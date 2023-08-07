export const skillMetrics = ["Count", "Level"] as const

export type skillMetric_T = typeof skillMetrics[number]

export type skillMetricValues_T = Record<skillMetric_T, number>;