import React from 'react'

const LineGraph = () => (
  <svg width="140" height="100" viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-25">
    <path 
      d="M15 85 C 30 82, 40 50, 55 60 C 70 70, 85 20, 125 10" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    <path d="M118 18 L125 10 L115 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const BarChart = () => (
  <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-25">
    <path d="M10 85 L110 85" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M25 85 L25 55 L38 55 L38 85" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M53 85 L53 35 L66 35 L66 85" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M81 85 L81 65 L94 65 L94 85" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const Nodes = () => (
  <svg width="140" height="80" viewBox="0 0 140 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-25">
    <circle cx="25" cy="40" r="12" stroke="currentColor" strokeWidth="2.5" />
    <path d="M40 40 C 65 20, 85 60, 110 40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="6 6" />
    <path d="M102 32 L110 40 L102 48" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="110" cy="40" r="10" stroke="currentColor" strokeWidth="2.5" />
  </svg>
)

const Spark = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-25">
    <path d="M25 5 L25 15 M25 35 L25 45 M5 25 L15 25 M35 25 L45 25 M11 11 L18 18 M32 32 L39 39 M11 39 L18 32 M32 18 L39 11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
)

const Lasso = () => (
  <svg width="100" height="60" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-25">
    <path d="M10 30 C 10 10, 90 10, 90 30 C 90 50, 10 50, 15 35" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
)

const Search = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-25">
    <circle cx="25" cy="25" r="15" stroke="currentColor" strokeWidth="2.5" />
    <path d="M37 37 L50 50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
)

const Checkmark = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-25">
    <path d="M10 20 L18 28 L32 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function DoodleLayer() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
      {/* Top Left Area */}
      <div className="absolute top-[15%] left-[5%] animate-float-slow text-[var(--color-orange)] -rotate-6">
        <LineGraph />
      </div>
      <div className="absolute top-[35%] left-[3%] animate-float-medium text-[var(--color-text-2)] rotate-12">
        <Spark />
      </div>

      {/* Top Right Area */}
      <div className="absolute top-[12%] right-[8%] animate-float-medium text-[var(--color-text-2)] rotate-12">
        <BarChart />
      </div>
      <div className="absolute top-[28%] right-[4%] animate-float-slow text-[var(--color-orange)] -rotate-12">
        <Search />
      </div>

      {/* Bottom Left Area */}
      <div className="absolute bottom-[20%] left-[8%] animate-float-medium text-[var(--color-text-2)] -rotate-12">
        <Nodes />
      </div>
      <div className="absolute bottom-[35%] left-[25%] animate-float-slow text-[var(--color-orange)] rotate-45">
        <Checkmark />
      </div>

      {/* Bottom Right Area */}
      <div className="absolute bottom-[15%] right-[10%] animate-float-slow text-[var(--color-text-2)] rotate-45">
        <Lasso />
      </div>
      <div className="absolute bottom-[40%] right-[15%] animate-float-medium text-[var(--color-orange)] -rotate-12">
        <Spark />
      </div>

      {/* Center Top */}
      <div className="absolute top-[8%] left-[50%] -translate-x-1/2 animate-float-slow text-[var(--color-text-2)] opacity-40">
        <Checkmark />
      </div>
    </div>
  )
}
