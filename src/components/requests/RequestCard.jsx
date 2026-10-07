import React from "react";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import ProgressBar from "../common/ProgressBar";
import { formatCurrency } from "../../utils/formatCurrency";

export default function RequestCard({ item }) {
  return (
    <article className="card overflow-hidden">
      <img src={item.image} alt="" className="h-52 w-full object-cover" />
      <div className="p-5">
        <div className="mb-3 flex items-center justify-between">
          <span className="badge">{item.category}</span>
          <span className="text-xs font-bold text-rose-600">{item.urgency}</span>
        </div>
        <h3 className="text-xl font-extrabold">{item.title}</h3>
        <p className="mt-1 flex items-center gap-1 text-sm text-slate-500"><MapPin size={14} />{item.location}</p>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600">{item.story}</p>
        <div className="mt-5">
          <ProgressBar raised={item.raised} needed={item.needed} />
        </div>
        <div className="mt-5 flex items-center justify-between">
          <div>
            <div className="text-xs text-slate-500">Goal</div>
            <div className="font-extrabold">{formatCurrency(item.needed)}</div>
          </div>
          <Link to={`/requests/${item.id}`} className="btn-secondary">
            Help <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}