"use client";

import React from 'react';
import {
    LineChart, Line, BarChart, Bar, AreaChart, Area,
    XAxis, YAxis, CartesianGrid, Tooltip, Legend,
    ResponsiveContainer, Cell, Radar, RadarChart,
    PolarGrid, PolarAngleAxis, PolarRadiusAxis,
    PieChart, Pie
} from 'recharts';

/**
 * 1. GLOBAL MARKET GROWTH (2024-2035)
 * Data: $24.97B (2024) -> $170.56B (2035) | 21.2% CAGR
 */
export const GlobalMarketGrowthChart = () => {
    const data = [
        { year: '2024', value: 24.97 },
        { year: '2026', value: 36.72 },
        { year: '2028', value: 54.01 },
        { year: '2030', value: 79.43 },
        { year: '2032', value: 116.82 },
        { year: '2035', value: 170.56 },
    ];

    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorMarket" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--color-chart-1)" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="var(--color-chart-1)" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" opacity={0.1} vertical={false} />
                <XAxis dataKey="year" stroke="var(--color-muted-foreground)" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={9} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v}B`} />
                <Tooltip
                    contentStyle={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: '12px', fontSize: '11px' }}
                    formatter={(value: number) => [`$${value}B`, 'Market Size']}
                    cursor={false}
                />
                <Area type="monotone" dataKey="value" stroke="var(--color-chart-1)" fill="url(#colorMarket)" strokeWidth={3} animationDuration={2000} />
            </AreaChart>
        </ResponsiveContainer>
    );
};

/**
 * 2. REGIONAL MARKET DISTRIBUTION (2024)
 * Data: North America ($6.9B), Asia Pacific ($0.31B), Europe ($0.21B), LAMEA ($2.57B)
 */
export const RegionalMarketChart = () => {
    const data = [
        { name: 'North America', value: 6.9, fill: 'var(--color-chart-1)' },
        { name: 'LAMEA', value: 2.57, fill: 'var(--color-chart-2)' },
        { name: 'Asia Pacific', value: 0.31, fill: 'var(--color-chart-3)' },
        { name: 'Europe', value: 0.21, fill: 'var(--color-chart-4)' },
    ];

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical" margin={{ left: 20 }}>
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" stroke="var(--color-muted-foreground)" fontSize={10} width={90} tickLine={false} axisLine={false} />
                <Tooltip
                    contentStyle={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: '12px', fontSize: '11px' }}
                    formatter={(value: number) => [`$${value}B`, 'Market Share']}
                    cursor={false}
                />
                <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={20} animationDuration={1500} />
            </BarChart>
        </ResponsiveContainer>
    );
};

/**
 * 3. CLOUD VS EDGE ROI (1M Devices / 5yr)
 * Data: Infrastructure Cost: Cloud $182.5M vs Edge $7.5M
 */
export const EdgeROICalculatorChart = () => {
    const data = [
        { category: 'Infrastructure', cloud: 182.5, edge: 7.5 },
        { category: 'Energy/Yr', cloud: 45.0, edge: 4.5 },
    ];

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" opacity={0.1} vertical={false} />
                <XAxis dataKey="category" stroke="var(--color-muted-foreground)" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={9} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v}M`} />
                <Tooltip
                    contentStyle={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: '12px', fontSize: '11px' }}
                    cursor={false}
                />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '10px', paddingTop: '10px' }} />
                <Bar name="Cloud AI" dataKey="cloud" fill="var(--color-muted-foreground)" opacity={0.3} radius={[4, 4, 0, 0]} />
                <Bar name="Zevion Edge" dataKey="edge" fill="var(--color-chart-1)" radius={[4, 4, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    );
};

/**
 * CONSUMER ELECTRONICS: Efficiency Comparison
 * Data: 90% energy reduction per query vs cloud processing
 */
export const PrivacyEfficiencyChart = () => {
    const data = [
        { metric: 'Privacy', local: 100, cloud: 15 },
        { metric: 'Energy Efficiency', local: 90, cloud: 10 },
        { metric: 'Offline Speed', local: 95, cloud: 5 },
    ];

    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
                <PolarGrid stroke="var(--color-border)" opacity={0.2} />
                <PolarAngleAxis dataKey="metric" tick={{ fill: 'var(--color-muted-foreground)', fontSize: 9 }} />
                <Radar name="On-Device (Zevion)" dataKey="local" stroke="var(--color-chart-1)" fill="var(--color-chart-1)" fillOpacity={0.5} />
                <Radar name="Cloud AI" dataKey="cloud" stroke="var(--color-muted-foreground)" fill="var(--color-muted-foreground)" fillOpacity={0.2} />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '10px', bottom: -10 }} />
                <Tooltip
                    contentStyle={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: '12px', fontSize: '11px' }}
                    cursor={false}
                />
            </RadarChart>
        </ResponsiveContainer>
    );
};

/**
 * INDUSTRIAL IOT: Latency & Cost Reduction
 * Content: "86% cost reduction achieved in manufacturing AI inspection"
 */
export const LatencyReductionChart = () => {
    const data = [
        { item: 'Inference Latency', cloud: 650, edge: 45 },
        { item: 'Deployment Cost', cloud: 100, edge: 14 },
    ];

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" opacity={0.1} />
                <XAxis dataKey="item" stroke="var(--color-muted-foreground)" fontSize={10} tickLine={false} />
                <YAxis hide />
                <Tooltip
                    contentStyle={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: '12px', fontSize: '11px' }}
                    cursor={false}
                />
                <Bar name="Zevion" dataKey="edge" fill="var(--color-chart-2)" radius={[4, 4, 0, 0]} barSize={40}>
                    <Cell fill="var(--color-chart-2)" />
                    <Cell fill="var(--color-chart-2)" />
                </Bar>
                <Bar name="Cloud Legacy" dataKey="cloud" fill="var(--color-muted-foreground)" opacity={0.2} radius={[4, 4, 0, 0]} barSize={40} />
            </BarChart>
        </ResponsiveContainer>
    );
};

/**
 * ROBOTICS: 50ms Edge Performance
 * Data: Sub-50ms latency vs 120-900ms cloud round-trip
 */
export const RoboticsAutonomyChart = () => {
    const data = [
        { time: 0, cloud: 600, edge: 45 },
        { time: 1, cloud: 450, edge: 42 },
        { time: 2, cloud: 850, edge: 48 },
        { time: 3, cloud: 550, edge: 44 },
    ];

    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" opacity={0.1} vertical={false} />
                <XAxis hide />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={9} tickLine={false} axisLine={false} tickFormatter={(v) => `${v}ms`} />
                <Tooltip
                    contentStyle={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: '12px', fontSize: '11px' }}
                    cursor={false}
                />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '10px' }} />
                <Line name="Cloud Jitter" type="monotone" dataKey="cloud" stroke="var(--color-muted-foreground)" strokeDasharray="3 3" dot={false} />
                <Line name="Edge Stability" type="monotone" dataKey="edge" stroke="var(--color-chart-3)" strokeWidth={3} dot={{ r: 4 }} />
            </LineChart>
        </ResponsiveContainer>
    );
};

/**
 * PHASE 1: Benchmarking & Core Optimization
 */
export const OptimizationPipelineChart = () => {
    const data = [
        { name: 'Model A', original: 100, optimized: 12 },
        { name: 'Model B', original: 100, optimized: 8 },
        { name: 'Model C', original: 100, optimized: 15 },
    ];

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
                <XAxis dataKey="name" stroke="var(--color-muted-foreground)" fontSize={10} tickLine={false} />
                <Tooltip
                    contentStyle={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: '12px', fontSize: '11px' }}
                    cursor={false}
                />
                <Legend wrapperStyle={{ fontSize: '10px' }} />
                <Bar name="Compute Savings (%)" dataKey="optimized" fill="var(--color-chart-1)" radius={[4, 4, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    );
};

/**
 * PHASE 2: Expanding Platform Support
 * Data: ARM, Raspberry Pi, NVIDIA Jetson, Qualcomm, Apple Neural Engine
 */
export const HardwareExpansionChart = () => {
    const data = [
        { name: 'Phase 1', platforms: 4 },
        { name: 'Phase 2', platforms: 12 },
        { name: 'Phase 3', platforms: 25 },
    ];

    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
                <XAxis dataKey="name" stroke="var(--color-muted-foreground)" fontSize={10} tickLine={false} />
                <Tooltip
                    contentStyle={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: '12px', fontSize: '11px' }}
                    cursor={false}
                />
                <Area type="step" dataKey="platforms" stroke="var(--color-chart-4)" fill="var(--color-chart-4)" fillOpacity={0.2} strokeWidth={3} />
            </AreaChart>
        </ResponsiveContainer>
    );
};

/**
 * PHASE 3: Scale (Device Count)
 * Goal: 1 Million deployed devices
 */
export const FleetScaleChart = () => {
    const data = [
        { yr: 'Year 1', devices: 10000 },
        { yr: 'Year 2', devices: 250000 },
        { yr: 'Year 3', devices: 1000000 },
    ];

    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
                <XAxis dataKey="yr" stroke="var(--color-muted-foreground)" fontSize={10} tickLine={false} />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={9} tickLine={false} tickFormatter={(v) => `${v / 1000}k`} />
                <Tooltip
                    contentStyle={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: '12px', fontSize: '11px' }}
                    cursor={false}
                />
                <Area type="monotone" dataKey="devices" stroke="var(--color-chart-1)" fill="var(--color-chart-1)" fillOpacity={0.3} strokeWidth={3} />
            </AreaChart>
        </ResponsiveContainer>
    );
};
