import React from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, CreditCard, Smartphone, Landmark } from "lucide-react";
import { requests } from "../../data/requests";
import { formatCurrency } from "../../utils/formatCurrency";

export default function Payment() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const item = requests.find(x => x.id === id) || requests[0];
  const amount = new URLSearchParams(location.search).get("amount") || "1000";
  return (
    <section className="section">
      <div className="container-app max-w-3xl">
        <Link to={`/donate/${item.id}`} className="mb-7 inline-flex items-center gap-2 text-sm font-bold text-slate-500"><ArrowLeft size={16}/> Back</Link>
        <div className="card overflow-hidden">
          <div className="bg-slate-950 p-7 text-white"><div className="text-sm text-slate-400">AashraySetu Demo Payment Gateway</div><div className="mt-2 text-4xl font-black">{formatCurrency(Number(amount))}</div><div className="mt-2 text-sm text-slate-400">For: {item.title}</div></div>
          <div className="p-7">
            <div className="grid gap-3 md:grid-cols-3">
              <button className="payment-option"><Smartphone/> UPI</button>
              <button className="payment-option"><CreditCard/> Card</button>
              <button className="payment-option"><Landmark/> Net Banking</button>
            </div>
            <div className="mt-7 rounded-2xl bg-slate-50 p-5">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Demo payment details</div>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <input className="input" placeholder="Card / UPI / account demo" />
                <input className="input" placeholder="Name on payment" />
              </div>
            </div>
            <button onClick={() => navigate(`/donation-success?amount=${amount}&id=${id}`)} className="btn-primary mt-6 w-full">Simulate successful payment</button>
            <p className="mt-4 text-center text-xs text-slate-400">This button does not charge money. It only demonstrates the prototype flow.</p>
          </div>
        </div>
      </div>
    </section>
  );
}