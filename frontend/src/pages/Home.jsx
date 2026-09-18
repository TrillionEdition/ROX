import { useEffect, useState } from "react";
import {
  Play,
  Radio,
  ChevronRight,
  Users,
  Clock,
  MapPin,
  Music2,
  Menu,
  X,
  Search
} from "lucide-react";

import {
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaTwitter
} from "react-icons/fa";
import heroImage from "../assets/hero.png";
import roadImage from "../assets/road_show.png";
import tharImage from "../assets/thar.png";
import jeepImage from "../assets/jeep.png";
import hiluxImage from "../assets/toyota.png";
import toyotaRangerImage from "../assets/ford.png";

/**
 * ROX 4X4 — Homepage
 * A dark, high-contrast offroad-brand layout: black/charcoal base,
 * a single alarm-red accent, and condensed bold type for the
 * "extreme trails" energy the brand is built on.
 */

const NAV_LINKS = ["Home", "Events", "Live", "Shows", "Media", "Vehicles", "Membership"];

const UPCOMING_EVENTS = [
  { id: 1, title: "ROX Offroad Show #03", location: "Wayanad, Kerala", date: "28 Sep 2026 · 7:00 PM IST", membersOnly: true },
  { id: 2, title: "ROX Offroad Show #04", location: "Thekkady, Kerala", date: "12 Nov 2026 · 7:00 PM IST", membersOnly: true },
  { id: 3, title: "ROX Offroad Show #05", location: "Kozhikode, Kerala", date: "24 Jan 2027 · 7:00 PM IST", membersOnly: true },
];

const CONTENT_TABS = ["All", "Videos", "Gallery", "Interviews", "Builds", "Stories"];

const LATEST_CONTENT = [
  { id: 1, title: "ROX Offroad Show #02 — Full Event Highlights", meta: "12 Aug 2026 · 12 min" },
  { id: 2, title: "Vehicle Build — ROX #001 Complete Build Story", meta: "10 Aug 2026 · 8 min" },
  { id: 3, title: "Driver Interview — Racer Life & Challenges", meta: "08 Aug 2026 · 15 min" },
];

const MACHINES = [
  { id: "ROX #001", name: "Mahindra Thar", image: tharImage },
  { id: "ROX #002", name: "Jeep Wrangler", image: jeepImage },
  { id: "ROX #003", name: "Toyota Hilux", image: hiluxImage },
  { id: "ROX #004", name: "Ford Ranger", image: toyotaRangerImage },
];

function Logo({ className = "" }) {
  return (
    <span className={`font-extrabold tracking-tight ${className}`}>
      ROX<span className="text-red-600">4X4</span>
    </span>
  );
}

function Badge({ children, tone = "live" }) {
  const tones = {
    live: "bg-red-600 text-white",
    dim: "bg-white/10 text-neutral-300",
    outline: "border border-red-600/60 text-red-500",
  };
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-sm px-2.5 py-1 text-[11px] font-semibold tracking-wide ${tones[tone]}`}>
      {tone === "live" && <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />}
      {children}
    </span>
  );
}

function TerrainSwatch({ seed = 0, className = "" }) {
  // Deterministic dark gradient "photo" placeholder standing in for offroad imagery.
  const gradients = [
    "from-stone-800 via-neutral-900 to-black",
    "from-orange-950 via-neutral-900 to-black",
    "from-red-950 via-neutral-900 to-black",
    "from-amber-950 via-neutral-900 to-black",
  ];
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${gradients[seed % gradients.length]} ${className}`}>
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_45%)]" />
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("All");
    const [timeLeft, setTimeLeft] = useState({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

useEffect(() => {
  // Set your event date/time here
  const targetDate = new Date("2026-09-28T19:00:00+05:30");

  const updateCountdown = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      setTimeLeft({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
      return;
    }

    setTimeLeft({
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      ),
      minutes: Math.floor(
        (difference / (1000 * 60)) % 60
      ),
      seconds: Math.floor(
        (difference / 1000) % 60
      ),
    });
  };

  updateCountdown();

  const timer = setInterval(updateCountdown, 1000);

  return () => clearInterval(timer);
}, []);
  return (
    <div className="min-h-screen bg-black text-neutral-100 antialiased">
      {/* ---------- Nav ---------- */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5">
          <Logo className="text-xl" />

          <nav className="hidden items-center gap-7 text-sm font-medium text-neutral-300 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className={`relative pb-1 transition-colors hover:text-white ${
                  link === "Live" ? "flex items-center gap-1.5 text-white" : ""
                }`}
              >
                {link === "Live" && <span className="h-1.5 w-1.5 rounded-full bg-red-600" />}
                {link}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <button aria-label="Search" className="rounded-sm p-2 text-neutral-400 hover:text-white">
              <Search className="h-4 w-4" />
            </button>
            <a href="#" className="text-sm font-medium text-neutral-300 hover:text-white">Login</a>
            <a
              href="#"
              className="rounded-sm bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-500"
            >
              Join Now
            </a>
          </div>

          <button
            className="p-2 text-neutral-300 lg:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 px-5 py-4 lg:hidden">
            <nav className="flex flex-col gap-4 text-sm font-medium text-neutral-300">
              {NAV_LINKS.map((link) => (
                <a key={link} href="#" className="hover:text-white">{link}</a>
              ))}
              <a href="#" className="mt-2 rounded-sm bg-red-600 px-4 py-2 text-center text-sm font-semibold text-white">
                Join Now
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* ---------- Hero ---------- */}
      <section
  className="relative overflow-hidden border-b border-white/10 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${heroImage})` }}
>
  <div className="absolute inset-0 bg-black/40" />
  <div className="relative mx-auto max-w-7xl px-5 py-20 sm:py-28">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-red-500">
            Extreme trails, real machines, live events
          </p>
          <h1 className="max-w-2xl text-6xl font-black leading-[0.95] tracking-tight sm:text-7xl">
            ROX<span className="text-red-600">4X4</span>
          </h1>
          <p className="mt-3 text-2xl font-bold tracking-tight text-neutral-200 sm:text-3xl">
            Live the off-road.
          </p>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-neutral-400">
            Watch exclusive offroad shows, livestreams, behind-the-scenes and more — only on ROX4X4.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-sm bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-500"
            >
              <Play className="h-4 w-4 fill-white" /> Watch Live
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-sm border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:border-white"
            >
              Become a Member
            </a>
          </div>
        </div>

        {/* Stat strip */}
        <div className="relative border-t border-white/10 bg-black/70">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 px-5 sm:grid-cols-4">
            {[
              { label: "Live Now", value: "ROX Offroad Show #02", sub: "Coorg, Karnataka", cta: "Watch Live" },
              { label: "Next Event", value: "ROX Offroad Show #03", sub: "28 Sep 2026 · 7:00 PM", cta: "View Details" },
              { label: "Members Online", value: "1,248", sub: "Join the community", cta: null },
              { label: "Latest Episode", value: "Build & Drive", sub: "Episode 04", cta: "Watch Now" },
            ].map((item, i) => (
              <div key={i} className="px-4 py-5">
                <div className="mb-1.5 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-neutral-500">
                  {i === 0 && <span className="h-1.5 w-1.5 rounded-full bg-red-600" />}
                  {item.label}
                </div>
                <div className="text-sm font-bold text-white">{item.value}</div>
                <div className="text-xs text-neutral-500">{item.sub}</div>
                {item.cta && (
                  <button className="mt-2 text-xs font-semibold text-red-500 hover:text-red-400">
                    {item.cta} →
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Upcoming Events ---------- */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-black tracking-tight">Upcoming Events</h2>
            <p className="mt-1.5 text-sm text-neutral-500">Bigger trails. Harder challenges. Don't miss out.</p>
          </div>
          <a href="#" className="hidden items-center gap-1 text-sm font-semibold text-red-500 hover:text-red-400 sm:flex">
            View All Events <ChevronRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          {UPCOMING_EVENTS.map((ev, i) => (
            <article key={ev.id} className="group overflow-hidden border border-white/10 bg-neutral-950">
              <div className="relative h-44">
                <img src={roadImage} className="h-full w-full" />
                <div className="absolute left-3 top-3">
                  <Badge tone="outline">Upcoming</Badge>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-white">{ev.title}</h3>
                <div className="mt-2 flex items-center gap-1.5 text-xs text-neutral-500">
                  <MapPin className="h-3.5 w-3.5" /> {ev.location}
                </div>
                <div className="mt-1 flex items-center gap-1.5 text-xs text-neutral-500">
                  <Clock className="h-3.5 w-3.5" /> {ev.date}
                </div>
                <div className="mt-3 flex gap-2 text-[11px] text-neutral-400">
                  <span className="rounded-sm bg-white/5 px-2 py-1">Offroad Show</span>
                  <span className="rounded-sm bg-white/5 px-2 py-1">Livestream</span>
                  {ev.membersOnly && <span className="rounded-sm bg-red-600/10 px-2 py-1 text-red-500">Members Only</span>}
                </div>
                <button className="mt-4 w-full border border-white/15 py-2.5 text-xs font-semibold text-white transition-colors group-hover:border-red-600 group-hover:bg-red-600">
                  View Details
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- Countdown banner ---------- */}
      <section className="relative overflow-hidden border-y border-white/10">
        <TerrainSwatch seed={2} className="absolute inset-0" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-14 sm:flex-row sm:items-end">
          <div>
            <Badge tone="live">Next Show</Badge>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">ROX Offroad Show</h2>
            <p className="mt-1 text-sm font-medium uppercase tracking-widest text-neutral-400">
              Where machines meet the extreme
            </p>
          </div>

          <div className="flex items-end gap-6">
            <div className="flex gap-4">
  {[
    { v: timeLeft.days, l: "Days" },
    { v: timeLeft.hours, l: "Hours" },
    { v: timeLeft.minutes, l: "Min" },
    { v: timeLeft.seconds, l: "Sec" },
  ].map((t) => (
    <div key={t.l} className="text-center min-w-[50px]">
      <div className="text-3xl font-black tabular-nums text-white">
        {String(t.v).padStart(2, "0")}
      </div>

      <div className="text-[10px] uppercase tracking-widest text-neutral-500">
        {t.l}
      </div>
    </div>
  ))}
</div>
            <a href="#" className="rounded-sm bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-500">
              Get Access
            </a>
          </div>
        </div>
      </section>

      {/* ---------- Latest Content ---------- */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-black tracking-tight">Latest Content</h2>
            <p className="mt-1.5 text-sm text-neutral-500">Videos, photos, interviews, stories. All in one place.</p>
          </div>
          <a href="#" className="text-sm font-semibold text-red-500 hover:text-red-400">View All</a>
        </div>

        <div className="mb-6 flex gap-2 overflow-x-auto">
          {CONTENT_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap rounded-sm px-4 py-1.5 text-xs font-semibold transition-colors ${
                activeTab === tab ? "bg-red-600 text-white" : "bg-white/5 text-neutral-400 hover:bg-white/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          {LATEST_CONTENT.map((c, i) => (
            <article key={c.id} className="group cursor-pointer">
              <div className="relative h-48 overflow-hidden">
                <img src={roadImage} alt={c.title} />
              </div>
              <h3 className="mt-3 text-sm font-bold text-white">{c.title}</h3>
              <p className="mt-1 text-xs text-neutral-500">{c.meta}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- ROX Machines ---------- */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-black tracking-tight">ROX Machines</h2>
            <p className="mt-1.5 text-sm text-neutral-500">Built for the extreme. Engineered for more.</p>
          </div>
          <a href="#" className="hidden items-center gap-1 text-sm font-semibold text-red-500 hover:text-red-400 sm:flex">
            View All Vehicles <ChevronRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
          {MACHINES.map((m, i) => (
            <article key={m.id} className="border border-white/10 bg-neutral-950">
              <img src={m.image} alt={m.name} /><div className="p-4">
                <div className="text-[10px] font-semibold uppercase tracking-widest text-red-500">{m.id}</div>
                <h3 className="mt-1 text-sm font-bold text-white">{m.name}</h3>
                <button className="mt-3 w-full border border-white/15 py-2 text-[11px] font-semibold text-neutral-300 hover:border-red-600 hover:text-white">
                  View Details
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- Membership CTA ---------- */}
      <section className="relative overflow-hidden border-y border-white/10">
        <TerrainSwatch seed={3} className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 px-5 py-16 sm:flex-row sm:items-center">
          <div className="max-w-md">
            <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl">
              Enter the ROX Inner Circle
            </h2>
            <p className="mt-2 text-sm text-neutral-400">
              Get closer to the machines, drivers and action.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-neutral-300">
              {["Live ROX offroad shows", "Driver interviews", "Exclusive videos", "Early event announcements",
                "Full event replays", "Members-only livestreams", "Behind-the-scenes content", "Exclusive ROX community"].map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-red-600" /> {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full max-w-xs border border-white/15 bg-black/60 p-6 backdrop-blur">
            <div className="text-xs font-semibold uppercase tracking-widest text-neutral-500">ROX Member</div>
            <div className="mt-1 text-3xl font-black text-white">
              ₹299<span className="text-sm font-medium text-neutral-500"> / month</span>
            </div>
            <a
              href="#"
              className="mt-5 block w-full rounded-sm bg-red-600 py-3 text-center text-sm font-semibold text-white hover:bg-red-500"
            >
              Join Now
            </a>
            <p className="mt-3 text-center text-[11px] text-neutral-500">Cancel anytime. No hidden charges.</p>
          </div>
        </div>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="mx-auto max-w-7xl px-5 py-12">
        <div className="flex flex-col justify-between gap-8 sm:flex-row">
          <div>
            <Logo className="text-lg" />
            <p className="mt-2 text-xs text-neutral-500">Live. Explore. Subscribe.</p>
            <div className="mt-4 flex gap-3 text-neutral-500">
              <FaYoutube className="h-4 w-4 hover:text-white" />
              <FaInstagram className="h-4 w-4 hover:text-white" />
              <FaFacebook className="h-4 w-4 hover:text-white" />
              <FaTwitter className="h-4 w-4 hover:text-white" />
              <Music2 className="h-4 w-4 hover:text-white" />
            </div>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-neutral-500">
            {NAV_LINKS.map((l) => <a key={l} href="#" className="hover:text-white">{l}</a>)}
          </nav>
        </div>
        <div className="mt-10 flex flex-col justify-between gap-2 border-t border-white/10 pt-6 text-[11px] text-neutral-600 sm:flex-row">
          <span>© 2026 ROX4X4. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-neutral-400">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-400">Terms &amp; Conditions</a>
            <a href="#" className="hover:text-neutral-400">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}