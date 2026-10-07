import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Info } from "lucide-react";

export default function RequestHelp() {
  const navigate = useNavigate();
  const submit = e => { e.preventDefault(); navigate("/request-submitted"); };
  return (
    <section className="section">
      <div className="container-app max-w-4xl">
        <Link to="/" className="mb-7 inline-flex items-center gap-2 text-sm font-bold text-slate-500"><ArrowLeft size={16}/> Back home</Link>
        <div className="mb-8"><span className="eyebrow">Request financial help</span><h1 className="section-title">Tell us what support is needed</h1><p className="section-copy">This prototype demonstrates the complete beneficiary request experience.</p></div>
        <form onSubmit={submit} className="space-y-6">
          <div className="card p-6 md:p-8">
            <h2 className="form-title">1. Personal details</h2>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <label>Full name<input className="input" placeholder="Demo beneficiary name" required/></label>
              <label>Mobile number<input className="input" placeholder="+91 98XXXXXX00" required/></label>
              <label>Email address<input className="input" type="email" placeholder="demo@example.com"/></label>
              <label>City / State<input className="input" placeholder="Lucknow, Uttar Pradesh"/></label>
            </div>
          </div>
          <div className="card p-6 md:p-8">
            <h2 className="form-title">2. Assistance details</h2>
            <div className="mt-5 grid gap-5">
              <label>Type of assistance<select className="input"><option>Medical</option><option>Education</option><option>Livelihood</option><option>Essential needs</option></select></label>
              <label>Amount required<input className="input" type="number" placeholder="45000"/></label>
              <label>Describe your situation<textarea className="input min-h-32" placeholder="Explain what help is needed and how the amount will be used." /></label>
            </div>
          </div>
          <div className="card p-6 md:p-8">
            <h2 className="form-title">3. Bank / payment details</h2>
            <div className="mt-4 flex gap-3 rounded-2xl bg-amber-50 p-4 text-sm leading-6 text-amber-900"><Info className="mt-0.5 shrink-0" size={18}/><span>Prototype only. Use fake/demo values. Do not enter real bank account or UPI credentials.</span></div>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <label>Account holder name<input className="input" placeholder="Demo Name"/></label>
              <label>Bank name<input className="input" placeholder="Demo Bank"/></label>
              <label>Account number<input className="input" placeholder="000000000000"/></label>
              <label>IFSC code<input className="input" placeholder="DEMO0000000"/></label>
              <label>UPI ID<input className="input" placeholder="demo@upi"/></label>
              <label>Supporting document<input className="input" type="file"/></label>
            </div>
          </div>
          <div className="flex justify-end">
            <button className="btn-primary" type="submit">Review & Submit <ArrowRight size={18}/></button>
          </div>
        </form>
      </div>
    </section>
  );
}