import React from "react";
import { Link, useLocation } from "react-router-dom";
import { CheckCircle2, Download, Share2 } from "lucide-react";
import { formatCurrency } from "../../utils/formatCurrency";

export default function DonationSuccess() {
  const q = new URLSearchParams(useLocation().search);
  const amount = Number(q.get("amount") || 1000);
  return (
    <section className="section">
      <div className="container-app max-w-2xl text-center">
        <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-brand-100 text-brand-700"><CheckCircle2 size={50}/></div>
        <h1 className="mt-7 text-4xl font-black">Thank you for helping. ❤️</h1>
        <p className="mt-3 text-lg text-slate-500">Your demo contribution of <b>{formatCurrency(amount)}</b> has been recorded in the prototype.</p>
        <div className="mx-auto mt-8 max-w-md rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm">
          <div className="flex justify-between border-b border-slate-100 pb-4"><span className="text-slate-500">Donation ID</span><b>DON-DEMO-8408</b></div>
          <div className="flex justify-between pt-4"><span className="text-slate-500">Status</span><span className="font-bold text-brand-700">Completed</span></div>
        </div>
        <div className="mt-7 flex justify-center gap-3">
          <button className="btn-secondary"><Download size={17}/> Receipt</button>
          <button className="btn-secondary"><Share2 size={17}/> Share</button>
          <Link to="/requests" className="btn-primary">Help another person</Link>
        </div>
      </div>
    </section>
  );
}