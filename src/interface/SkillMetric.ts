export const skillMetrics = ["Count", "Proficiency"] as const

export type skillMetric_T = typeof skillMetrics[number]

export type skillMetricValues_T = Record<skillMetric_T, number>;