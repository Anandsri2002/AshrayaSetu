import React, { useState } from "react";
import { Search } from "lucide-react";
import { requests } from "../../data/requests";
import RequestCard from "../../components/requests/RequestCard";

export default function HelpRequests() {
  const [query, setQuery] = useState("");
  const filtered = requests.filter(x => `${x.title} ${x.category} ${x.location}`.toLowerCase().includes(query.toLowerCase()));
  return (
    <section className="section">
      <div className="container-app">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Causes</span>
          <h1 className="section-title">People who need a helping hand</h1>
          <p className="section-copy">Browse demo assistance requests and choose a cause you would like to support.</p>
        </div>
        <div className="mx-auto mt-9 max-w-xl relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18}/>
          <input value={query} onChange={e => setQuery(e.target.value)} className="input pl-11" placeholder="Search medical, education, livelihood..." />
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map(item => <RequestCard key={item.id} item={item} />)}
        </div>
      </div>
    </section>
  );
}