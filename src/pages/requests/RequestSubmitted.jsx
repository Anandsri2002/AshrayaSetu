import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Copy, ArrowRight } from "lucide-react";

export default function RequestSubmitted() {
  return (
    <section className="section">
      <div className="container-app max-w-2xl text-center">
        <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-brand-100 text-brand-700"><CheckCircle2 size={42}/></div>
        <span className="eyebrow mt-7">Demo request submitted</span>
        <h1 className="section-title">Your request is ready for review.</h1>
        <p className="section-copy">In the real platform, the NGO team would verify the request and update its status here.</p>
        <div className="mx-auto mt-8 flex max-w-sm items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 text-left">
          <div><div className="text-xs text-slate-500">Request ID</div><div className="font-black">AS-2026-1088</div></div><Copy size={17} className="text-slate-400"/>
        </div>
        <div className="mt-7 flex justify-center gap-3">
          <Link to="/tracking" className="btn-secondary">Track request</Link>
          <Link to="/requests" className="btn-primary">Browse causes <ArrowRight size={17}/></Link>
        </div>
      </div>
    </section>
  );
}