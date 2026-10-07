import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { requests } from "../../data/requests";
import { formatCurrency } from "../../utils/formatCurrency";

export default function Donate() {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = requests.find(x => x.id === id) || requests[0];
  const [amount, setAmount] = useState(1000);
  return (
    <section className="section">
      <div className="container-app max-w-5xl">
        <Link to={`/requests/${item.id}`} className="mb-7 inline-flex items-center gap-2 text-sm font-bold text-slate-500"><ArrowLeft size={16}/> Back to request</Link>
        <div className="grid gap-7 lg:grid-cols-[1fr_420px]">
          <div className="card p-7">
            <span className="eyebrow">Make a contribution</span>
            <h1 className="mt-4 text-3xl font-black">Help {item.name}</h1>
            <p className="mt-2 text-slate-500">{item.title}</p>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[500,1000,2500,5000].map(v => <button key={v} onClick={() => setAmount(v)} className={`rounded-2xl border px-4 py-4 font-extrabold ${amount===v ? "border-brand-600 bg-brand-50 text-brand-800" : "border-slate-200 hover:border-brand-300"}`}>₹{v.toLocaleString("en-IN")}</button>)}
            </div>
            <label className="mt-6 block">Custom amount<input className="input mt-2" type="number" value={amount} onChange={e => setAmount(Number(e.target.value))}/></label>
            <label className="mt-5 block">Donor name<input className="input mt-2" placeholder="Your name"/></label>
            <label className="mt-5 flex items-center gap-3 text-sm font-semibold"><input type="checkbox" className="h-4 w-4" /> Donate anonymously</label>
            <button onClick={() => navigate(`/payment/${item.id}?amount=${amount}`)} className="btn-primary mt-7 w-full">Continue to payment</button>
          </div>
          <aside className="card h-fit p-7">
            <img src={item.image} alt="" className="h-48 w-full rounded-2xl object-cover"/>
            <h2 className="mt-5 font-extrabold">{item.title}</h2>
            <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-5"><span className="text-slate-500">Your donation</span><span className="text-2xl font-black">{formatCurrency(amount || 0)}</span></div>
            <div className="mt-5 flex gap-2 text-xs leading-5 text-slate-500"><ShieldCheck className="shrink-0 text-brand-700" size={16}/> Demo payment flow. No real transaction will be processed.</div>
          </aside>
        </div>
      </div>
    </section>
  );
}