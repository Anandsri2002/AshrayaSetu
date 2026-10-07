import React, { useState } from "react";
import { Search, CheckCircle2, Circle } from "lucide-react";

export default function TrackRequest() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section className="section">
      <div className="container-app max-w-3xl">
        <div className="text-center"><span className="eyebrow">Transparency</span><h1 className="section-title">Track a request</h1><p className="section-copy">Enter a demo request ID to see how status tracking could work.</p></div>
        <div className="mx-auto mt-8 flex max-w-xl gap-2">
          <input className="input" placeholder="Example: AS-1024"/>
          <button onClick={() => setSubmitted(true)} className="btn-primary"><Search size={18}/> Track</button>
        </div>
        {submitted && <div className="card mt-8 p-7"><div className="flex items-center justify-between"><div><div className="text-xs text-slate-500">Request</div><div className="text-xl font-black">AS-1024</div></div><span className="badge">Funding</span></div><div className="mt-8 grid gap-5 md:grid-cols-4">{["Submitted","Under Review","Approved","Funding"].map((x,i) => <div key={x} className="relative text-center"><div className={`mx-auto grid h-10 w-10 place-items-center rounded-full ${i < 4 ? "bg-brand-100 text-brand-700" : "bg-slate-100 text-slate-400"}`}>{i < 4 ? <CheckCircle2 size={20}/> : <Circle size={20}/>}</div><div className="mt-2 text-sm font-bold">{x}</div></div>)}</div></div>}
      </div>
    </section>
  );
}