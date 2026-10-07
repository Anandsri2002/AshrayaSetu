import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { HeartHandshake, Menu, X } from "lucide-react";
import { useState } from "react";

import Home from "./pages/Home";
import HelpRequests from "./pages/requests/HelpRequests";
import RequestDetails from "./pages/requests/RequestDetails";
import RequestHelp from "./pages/requests/RequestHelp";
import RequestSubmitted from "./pages/requests/RequestSubmitted";
import Donate from "./pages/donation/Donate";
import Payment from "./pages/donation/Payment";
import DonationSuccess from "./pages/donation/DonationSuccess";
import TrackRequest from "./pages/tracking/TrackRequest";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/admin/Dashboard";

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Home", "/"],
    ["Causes", "/requests"],
    ["How It Works", "/#how-it-works"],
    ["About", "/about"],
    ["Contact", "/contact"]
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="container-app flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-700 text-white shadow-lg shadow-brand-700/20">
            <HeartHandshake size={24} />
          </div>
          <div>
            <div className="text-xl font-extrabold tracking-tight text-slate-900">AashraySetu</div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-700">A Bridge to Hope</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) =>
            href.startsWith("/#") ? (
              <a key={label} href={href} className="nav-link">{label}</a>
            ) : (
              <Link key={label} to={href} className="nav-link">{label}</Link>
            )
          )}
          <Link to="/requests" className="btn-primary">Donate Now</Link>
        </nav>

        <button className="rounded-xl p-2 text-slate-700 lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white p-4 lg:hidden">
          <div className="container-app flex flex-col gap-2">
            {links.map(([label, href]) =>
              href.startsWith("/#") ? (
                <a key={label} href={href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-slate-50">{label}</a>
              ) : (
                <Link key={label} to={href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-slate-50">{label}</Link>
              )
            )}
            <Link to="/requests" onClick={() => setOpen(false)} className="btn-primary mt-2 text-center">Donate Now</Link>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-20 bg-slate-950 text-slate-300">
      <div className="container-app grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="mb-3 flex items-center gap-3 text-white">
            <HeartHandshake />
            <span className="text-xl font-extrabold">AashraySetu</span>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-400">
            A prototype platform designed to connect people in need with compassionate donors.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-white">Explore</h3>
          <div className="mt-4 grid gap-2 text-sm">
            <Link to="/requests" className="hover:text-white">Help Requests</Link>
            <Link to="/tracking" className="hover:text-white">Track Request</Link>
            <Link to="/about" className="hover:text-white">About Us</Link>
            <Link to="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-white">Prototype Notice</h3>
          <p className="mt-4 text-sm leading-6 text-slate-400">
            Payment, bank verification and request processing are simulated. Do not use real financial details.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-500">
        © 2026 AashraySetu Prototype. For demonstration purposes only.
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/requests" element={<HelpRequests />} />
          <Route path="/requests/:id" element={<RequestDetails />} />
          <Route path="/request-help" element={<RequestHelp />} />
          <Route path="/request-submitted" element={<RequestSubmitted />} />
          <Route path="/donate/:id" element={<Donate />} />
          <Route path="/payment/:id" element={<Payment />} />
          <Route path="/donation-success" element={<DonationSuccess />} />
          <Route path="/tracking" element={<TrackRequest />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}