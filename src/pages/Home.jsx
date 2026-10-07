import React from "react";
import { ArrowRight, Heart, ShieldCheck, Users, HandHeart, CircleDollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { requests } from "../data/requests";
import { statistics } from "../data/statistics";
import RequestCard from "../components/requests/RequestCard";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(20,184,166,.25),transparent_35%),radial-gradient(circle_at_10%_90%,rgba(251,191,36,.12),transparent_30%)]" />
        <div className="container-app relative grid min-h-[620px] items-center gap-12 py-20 lg:grid-cols-2">
          <div>
            <span className="eyebrow bg-white/10 text-brand-100">A community powered by kindness</span>
            <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight text-white md:text-7xl">
              Your kindness can <span className="text-brand-400">change a life.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              AashraySetu connects people who need financial assistance with people who want to make a meaningful difference.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/requests" className="btn-primary bg-brand-500 hover:bg-brand-400">Donate Now <ArrowRight size={18} /></Link>
              <Link to="/request-help" className="btn-outline border-white/20 text-white hover:bg-white/10">Request Financial Help</Link>
            </div>
            <div className="mt-9 flex flex-wrap gap-6 text-sm text-slate-300">
              <span className="flex items-center gap-2"><ShieldCheck className="text-brand-400" size={18}/> Transparent prototype flow</span>
              <span className="flex items-center gap-2"><Heart className="text-rose-400" size={18}/> Human-first design</span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-xl">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-2 shadow-2xl backdrop-blur">
              <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=85" alt="Community support" className="h-[430px] w-full rounded-[1.5rem] object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-5 rounded-2xl bg-white p-5 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-100 text-brand-700"><HandHeart /></div>
                <div><div className="text-xs text-slate-500">Families supported</div><div className="text-xl font-black">736+</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="container-app grid grid-cols-2 divide-x divide-slate-200 py-8 md:grid-cols-4">
          {[
            ["₹12.8L+", "Donations"],
            ["4,820+", "Donors"],
            ["736+", "Families helped"],
            ["84", "Active requests"]
          ].map(([value, label]) => (
            <div key={label} className="px-5 text-center">
              <div className="text-2xl font-black text-slate-900">{value}</div>
              <div className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="section">
        <div className="container-app">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Simple. Human. Transparent.</span>
            <h2 className="section-title">How AashraySetu works</h2>
            <p className="section-copy">A simple prototype journey from a request for help to a meaningful contribution.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {[
              ["01", "Raise a request", "A person shares their assistance requirement and supporting details."],
              ["02", "Review", "The NGO team reviews the submitted case and supporting information."],
              ["03", "Donate", "A donor chooses a cause and contributes the amount they want."],
              ["04", "Create impact", "The assistance is recorded and the donor can track the case."]
            ].map(([n, title, copy]) => (
              <div className="card p-6" key={n}>
                <div className="text-sm font-black text-brand-700">{n}</div>
                <h3 className="mt-5 text-xl font-extrabold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-app">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div><span className="eyebrow">Make an impact</span><h2 className="section-title">Urgent help requests</h2></div>
            <Link to="/requests" className="btn-secondary">View all causes <ArrowRight size={17}/></Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {requests.slice(0, 3).map(item => <RequestCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-app">
          <div className="grid gap-5 md:grid-cols-3">
            <div className="card p-7"><Users className="text-brand-700"/><h3 className="mt-5 text-xl font-extrabold">Community first</h3><p className="mt-2 text-sm leading-6 text-slate-500">Designed around dignity, accessibility and human stories.</p></div>
            <div className="card p-7"><CircleDollarSign className="text-amber-500"/><h3 className="mt-5 text-xl font-extrabold">Flexible giving</h3><p className="mt-2 text-sm leading-6 text-slate-500">Donors choose a preset or custom amount in the prototype flow.</p></div>
            <div className="card p-7"><ShieldCheck className="text-brand-700"/><h3 className="mt-5 text-xl font-extrabold">Trust by design</h3><p className="mt-2 text-sm leading-6 text-slate-500">Clear status, progress and demo verification concepts throughout.</p></div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-app">
          <div className="rounded-[2rem] bg-brand-700 p-8 text-white md:p-12">
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div><h2 className="text-3xl font-black md:text-4xl">Need financial assistance?</h2><p className="mt-3 max-w-2xl text-brand-100">Create a demo assistance request and show donors exactly how your story could be supported.</p></div>
              <Link to="/request-help" className="btn-primary bg-white text-brand-800 hover:bg-brand-50">Request Help <ArrowRight size={18}/></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}