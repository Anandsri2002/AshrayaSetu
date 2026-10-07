import React from "react";

export default function ProgressBar({ raised, needed }) {
  const percent = Math.min(100, Math.round((raised / needed) * 100));
  return (
    <div>
      <div className="mb-2 flex justify-between text-xs font-bold text-slate-500">
        <span>{percent}% funded</span>
        <span>₹{raised.toLocaleString("en-IN")} raised</span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
        <div className="h-full rounded-full bg-brand-600 transition-all" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}