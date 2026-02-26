import React from "react";
import "./chart.css";

function Stats({ total, completed, levels }) {
  const radius = 85;
  const stroke = 3;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const calcProgress = (solved, levelTotal) => (solved / levelTotal) * 100;

  const getDashArray = (solved, levelTotal) => {
    const progress = calcProgress(solved, levelTotal);
    return `${(progress / 100) * circumference} ${circumference}`;
  };

  return (
    <div className="progress-container ">
      <div className="circular-progress">
        <svg height={radius * 2} width={radius * 2}>
          {/* Background circle */}
          <circle
            stroke="rgba(255,255,255,0.1)"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />

          <circle
            stroke="url(#gradient)"
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={`${(completed / total.total) * circumference} ${circumference}`}
            strokeLinecap="round"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%" }}
          />

          <defs>
            <linearGradient id="gradient">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </svg>

        <div className="center-text">
          <h2 className="text-2xl font-extrabold text-[#0bff4d]">
            <span className="text-lime-500">{completed}</span>/{total.total}
          </h2>
          <p className="font-bold text-sm px-4 py-2 ">
            Leetcode Question Solved
          </p>
        </div>
      </div>

      <div className="progress-stats">
        <div
          className="bg-white/5 backdrop-blur-md
border border-white/10
rounded-xl
px-8 py-3
transition-all duration-300
hover:scale-105 text-emerald-400"
        >
          <p className="text-sm font-bold text-blue-600">Easy</p>
          <span className="text-white font-bold text-sm">
            {levels.easy}/{total.easy}
          </span>
        </div>
        <div
          className="bg-white/5 backdrop-blur-md
border border-white/10
rounded-xl
px-8 py-3
transition-all duration-300
hover:scale-105 text-orange-400"
        >
          <p className="text-sm font-bold text-orange-500">Medium</p>
          <span className="text-white font-bold text-sm">
            {levels.medium}/{total.medium}
          </span>
        </div>
        <div
          className="bg-white/5 backdrop-blur-md
border border-white/10
rounded-xl
px-8 py-3
transition-all duration-300
hover:scale-105 text-red-400"
        >
          <p className="text-sm font-bold text-red-600">Hard</p>
          <span className="text-white font-bold text-sm">
            {levels.hard}/{total.hard}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Stats;
