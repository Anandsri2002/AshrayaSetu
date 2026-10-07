import React from "react";

export default function Contact() {
  return <section className="section"><div className="container-app max-w-3xl"><div className="text-center"><span className="eyebrow">Contact</span><h1 className="section-title">We are here to listen.</h1><p className="section-copy">A demo contact page for the future NGO platform.</p></div><div className="card mt-10 p-7"><div className="grid gap-5 md:grid-cols-2"><label>Name<input className="input" placeholder="Your name"/></label><label>Email<input className="input" placeholder="you@example.com"/></label></div><label className="mt-5 block">Message<textarea className="input mt-2 min-h-40" placeholder="How can we help?"/></label><button className="btn-primary mt-5">Send message</button></div></div></section>;
}