import React from 'react';
import './chart.css'

function CircularProgress({ total, completed, levels }) {
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
        <svg
          height={radius * 2}
          width={radius * 2}
        >
          {/* Background circle */}
          <circle
            stroke="#ffffff"
            fill="#250020"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          
          {/* Easy level */}
          <circle
            stroke="cyan"
            fill="transparent"
            strokeWidth='5'
            strokeLinecap='round'
            strokeDasharray={getDashArray(completed, total.total)}
            strokeDashoffset={circumference}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            transform={`rotate(-90 ${radius} ${radius})`}
            
          />

       
        </svg>
        
        <div className="center-text">
          <h2 className='text-2xl font-extrabold text-lime-500'>{completed}/{total.total}</h2>
          <p className='font-bold text-sm px-4 py-2 '>Leetcode Question Solved</p>
        </div>
      </div>

      <div className="progress-stats">
        <div style={{background:'rgb(0 0 0 / 55%)'}} className=" border-white bg-slate-500 rounded-sm px-10 py-2 easy">
          <p className='text-sm font-bold text-cyan-700'>Easy</p>
          <span className='text-white font-bold text-sm'>{levels.easy}/{total.easy}</span>
        </div>
        <div style={{background:'rgb(0 0 0 / 55%)'}} className=" border-white bg-slate-500 rounded-sm px-10 py-2 medium">
          <p className='text-sm font-bold text-orange-500'>Medium</p>
          <span className='text-white font-bold text-sm'>{levels.medium}/{total.medium}</span>
        </div>
        <div style={{background:'rgb(0 0 0 / 55%)'}} className=" border-white bg-slate-500 rounded-sm px-10 py-2 hard">
          <p className='text-sm font-bold text-red-900'>Hard</p>
          <span className='text-white font-bold text-sm'>{levels.hard}/{total.hard}</span>
        </div>
      </div>
    </div>
  );
}

export default CircularProgress;
