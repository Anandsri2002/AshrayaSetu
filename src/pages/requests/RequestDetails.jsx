import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ShieldCheck, MapPin } from "lucide-react";
import { requests } from "../../data/requests";
import ProgressBar from "../../components/common/ProgressBar";
import { formatCurrency } from "../../utils/formatCurrency";

export default function RequestDetails() {
  const { id } = useParams();
  const item = requests.find(x => x.id === id) || requests[0];
  return (
    <section className="section">
      <div className="container-app max-w-6xl">
        <Link to="/requests" className="mb-7 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-900"><ArrowLeft size={16}/> Back to causes</Link>
        <div className="grid gap-8 lg:grid-cols-[1.3fr_.7fr]">
          <div>
            <img src={item.image} alt="" className="h-[430px] w-full rounded-[2rem] object-cover" />
            <div className="mt-8">
              <span className="badge">{item.category}</span>
              <h1 className="mt-4 text-4xl font-black tracking-tight">{item.title}</h1>
              <p className="mt-2 flex items-center gap-1 text-slate-500"><MapPin size={16}/>{item.location}</p>
              <p className="mt-6 text-lg leading-8 text-slate-600">{item.story}</p>
            </div>
          </div>
          <aside className="h-fit rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm lg:sticky lg:top-28">
            <div className="flex items-center gap-2 text-sm font-bold text-brand-700"><ShieldCheck size={17}/> Demo case profile</div>
            <div className="mt-7"><ProgressBar raised={item.raised} needed={item.needed}/></div>
            <div className="mt-7 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-slate-50 p-4"><div className="text-xs text-slate-500">Raised</div><div className="mt-1 text-xl font-black">{formatCurrency(item.raised)}</div></div>
              <div className="rounded-2xl bg-slate-50 p-4"><div className="text-xs text-slate-500">Goal</div><div className="mt-1 text-xl font-black">{formatCurrency(item.needed)}</div></div>
            </div>
            <Link to={`/donate/${item.id}`} className="btn-primary mt-6 w-full">Donate to this cause</Link>
            <p className="mt-4 text-center text-xs leading-5 text-slate-400">Prototype only. Payment and beneficiary information are simulated.</p>
          </aside>
        </div>
      </div>
    </section>
  );
}