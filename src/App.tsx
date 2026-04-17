import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import slide1Bg from './assets/backgrounds/slide_1_background.jpeg';
import uiMainMenu from './assets/screenshots/ui_main_menu.png';
import uiMobileApp from './assets/screenshots/ui_mobile_app.png';
import uiGeofence from './assets/screenshots/ui_geofence.mp4';
import uiCommunityCard from './assets/screenshots/ui_community_card.mp4';
import photoUjwal from './assets/team/photo_ujwal.jpg';
import photoHarshdeep from './assets/team/photo_harshdeep.jpeg';
import photoArda from './assets/team/photo_arda.jpg';
import {
  ChevronLeft,
  ChevronRight,
  Anchor,
  MapPin,
  AlertTriangle,
  Vibrate,
  Brain,
  Users,
  Zap,


  Heart,
  Navigation2,

  Cpu,
  Play,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface Slide {
  id: string;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

// ---------------------------------------------------------------------------
// Shared UI components
// ---------------------------------------------------------------------------

const ProgressBar = ({ current, total }: { current: number; total: number }) => (
  <div className="fixed bottom-0 left-0 w-full h-1 bg-white/5 z-50">
    <motion.div
      className="h-full bg-green-400"
      initial={{ width: 0 }}
      animate={{ width: `${((current + 1) / total) * 100}%` }}
      transition={{ duration: 0.3 }}
    />
  </div>
);

const Navigation = ({
  onPrev, onNext, current, total,
}: { onPrev: () => void; onNext: () => void; current: number; total: number }) => (
  <div className="fixed bottom-8 right-8 flex items-center gap-4 z-50">
    <div className="text-sm font-mono text-white/40 mr-4">
      {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
    </div>
    <button
      onClick={onPrev}
      disabled={current === 0}
      className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 disabled:opacity-20 disabled:cursor-not-allowed transition-all"
    >
      <ChevronLeft className="w-6 h-6" />
    </button>
    <button
      onClick={onNext}
      disabled={current === total - 1}
      className="p-3 rounded-full bg-green-500/80 hover:bg-green-400 disabled:opacity-20 disabled:cursor-not-allowed transition-all shadow-lg shadow-green-500/20"
    >
      <ChevronRight className="w-6 h-6 text-black" />
    </button>
  </div>
);

// ---------------------------------------------------------------------------
// Slide content helpers
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Slides
// ---------------------------------------------------------------------------

const slides: Slide[] = [

  // =========================================================================
  // SLIDE 1 — THE HOOK
  // =========================================================================
  {
    id: 'hook',
    title: 'The Hook',
    subtitle: undefined,
    content: (
      <div className="grid grid-cols-2 w-full max-w-7xl">

        {/* LEFT — empty, lets the person show through */}
        <div />

        {/* RIGHT — all content */}
        <div className="flex flex-col gap-7 text-left pl-12">

          {/* Logo + eyebrow */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-green-400/30 flex items-center justify-center shadow-[0_0_40px_-8px_rgba(74,222,128,0.4)]">
              <Anchor className="w-7 h-7 text-green-400" />
            </div>
            <div className="flex items-center gap-2 text-white/30 font-mono text-xs uppercase tracking-widest">
              <span>Local Lifestyle Track</span>
              <div className="w-1 h-1 rounded-full bg-white/20" />
              <span>Team Runtime Terrors</span>
            </div>
          </div>

          {/* Title */}
          <div className="space-y-2">
            <p className="text-green-400 font-mono text-sm uppercase tracking-[0.3em]">Project</p>
            <h1 className="text-8xl font-display font-bold tracking-tighter text-white leading-none">
              ANCHOR
            </h1>
            <p className="text-white/40 text-base italic font-light">
              "Your neighbourhood, always within reach."
            </p>
          </div>

          <div className="w-12 h-px bg-green-400/30" />

          {/* Info cards */}
          <div className="flex flex-col gap-3">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 mb-2 text-sky-300 font-bold text-sm uppercase tracking-wider">
                <Users className="w-4 h-4" /> Who is this for?
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Active seniors (60+) who desire to explore local hubs
                independently — without constant worry or supervision.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-amber-400/5 border border-amber-400/20">
              <div className="flex items-center gap-2 mb-2 text-amber-300 font-bold text-sm uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4" /> The Pain Point
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Seniors limit outings due to fear of disorientation —
                causing <strong className="text-white">social isolation</strong> and{' '}
                <strong className="text-white">over-protection</strong> from well-meaning families.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // =========================================================================
  // SLIDE 2 — THE CRAFTSMANSHIP
  // =========================================================================
  {
    id: 'craftsmanship',
    title: 'The Craftsmanship',
    subtitle: undefined,
    content: (
      <div className="flex flex-col w-full max-w-7xl gap-4">

        {/* 4 screen cards */}
        <div className="grid grid-cols-4 gap-3">
          {[
            {
              title: 'Main Menu',
              badge: 'WATCH UI',
              accentCls: 'border-green-400/25',
              badgeCls: 'text-green-400 bg-green-400/10 border-green-400/20',
              stripCls: 'bg-green-400',
              media: <img src={uiMainMenu} alt="Main menu" className="w-full h-full object-cover" />,
              tags: ['High-contrast colours', 'Large tap targets', 'Clear status badge'],
            },
            {
              title: 'Geofencing',
              badge: 'LIVE TRACKING',
              accentCls: 'border-amber-400/25',
              badgeCls: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
              stripCls: 'bg-amber-400',
              media: (
                <video
                  src={uiGeofence}
                  autoPlay loop muted playsInline
                  className="w-full h-full object-cover"
                />
              ),
              tags: ['Animated drift indicator', 'Distance in large text', 'Colour-coded state'],
            },
            {
              title: 'Community Card',
              badge: 'ON-WATCH ID',
              accentCls: 'border-sky-400/25',
              badgeCls: 'text-sky-300 bg-sky-400/10 border-sky-400/20',
              stripCls: 'bg-sky-400',
              media: (
                <video
                  src={uiCommunityCard}
                  autoPlay loop muted playsInline
                  className="w-full h-full object-cover"
                />
              ),
              tags: ['Smooth swipe transitions', 'Tap-to-call contact', 'Medical info on wrist'],
            },
            {
              title: 'Mobile App',
              badge: 'CAREGIVER',
              accentCls: 'border-purple-400/25',
              badgeCls: 'text-purple-300 bg-purple-400/10 border-purple-400/20',
              stripCls: 'bg-purple-400',
              media: <img src={uiMobileApp} alt="Mobile app" className="w-full h-full object-cover" />,
              tags: ['Push alert on drift', 'One-tap call back', 'Real-time GPS view'],
            },
          ].map(({ title, badge, accentCls, badgeCls, stripCls, media, tags }) => (
            <div key={title} className={`rounded-2xl bg-white/5 border ${accentCls} flex flex-col overflow-hidden`}>
              <div className={`h-0.5 w-full ${stripCls}`} />

              {/* Media */}
              <div className="relative w-full aspect-[4/5] bg-black overflow-hidden">
                {media}
              </div>

              {/* Label */}
              <div className="p-2.5 flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-white">{title}</span>
                  <span className={`text-[8px] font-mono font-bold px-1.5 py-0.5 rounded border ${badgeCls} uppercase tracking-wider`}>
                    {badge}
                  </span>
                </div>
                <ul className="space-y-0.5">
                  {tags.map((t) => (
                    <li key={t} className="flex items-center gap-1.5 text-[9px] text-white/45">
                      <div className={`w-1 h-1 rounded-full shrink-0 ${stripCls}`} />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom highlight bar */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: <Zap className="w-4 h-4 text-green-400" />,    title: 'Smooth Animations',   body: 'Swiper transitions at 260 ms — fluid enough to feel responsive, slow enough for elderly users.' },
            { icon: <Vibrate className="w-4 h-4 text-sky-300" />,  title: 'Haptic Feedback',      body: '1 gentle pulse on drift · 3 firm pulses on alert — no need to look at the screen.' },
            { icon: <Users className="w-4 h-4 text-amber-400" />,  title: 'Elderly-First Design', body: 'High-contrast dark theme, large text, minimal steps — usable without reading glasses.' },
          ].map(({ icon, title, body }) => (
            <div key={title} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
              <div className="p-1.5 rounded-lg bg-white/5 shrink-0">{icon}</div>
              <div>
                <div className="font-bold text-xs text-white mb-0.5">{title}</div>
                <div className="text-[11px] text-white/45 leading-relaxed">{body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  // =========================================================================
  // SLIDE 3 — THE LIVE DEMO
  // =========================================================================
  {
    id: 'demo',
    title: 'The Live Demo',
    subtitle: undefined,
    content: (
      <div className="flex flex-col items-center justify-center w-full max-w-lg gap-8 text-center">

        {/* Pulsing icon */}
        <div className="relative flex items-center justify-center">
          <div className="absolute w-32 h-32 rounded-full bg-green-400/10 animate-ping" />
          <div className="absolute w-24 h-24 rounded-full bg-green-400/10" />
          <div className="w-20 h-20 rounded-full bg-green-400/15 border border-green-400/40 flex items-center justify-center shadow-[0_0_40px_-8px_rgba(74,222,128,0.5)]">
            <Play className="w-8 h-8 text-green-400 ml-1" />
          </div>
        </div>

        {/* Text */}
        <div className="space-y-3">
          <p className="text-xs font-mono text-green-400/60 uppercase tracking-[0.3em]">Live Demo</p>
          <h2 className="text-4xl font-display font-bold text-white tracking-tight">In Progress</h2>
        </div>
      </div>
    ),
  },

  // =========================================================================
  // SLIDE 4 — INNOVATION HIGHLIGHT
  // =========================================================================
  {
    id: 'innovation',
    title: 'Innovation Highlight',
    subtitle: undefined,
    content: (
      <div className="grid grid-cols-2 gap-4 w-full max-w-7xl">

        {/* ── 1. ML Fall Classifier ── */}
        <div className="rounded-2xl bg-white/5 border border-purple-400/25 p-5 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-purple-400/10 shrink-0">
              <Brain className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <div className="font-bold text-white">On-Device Fall Detection</div>
              <div className="text-[10px] text-purple-300/60 mt-0.5">ML model · runs entirely on the watch</div>
            </div>
          </div>
          <p className="text-sm text-white/55 leading-relaxed">
            A Logistic Regression model trained on the SisFall dataset (38 subjects) detects falls by recognising a sharp impact followed by prolonged stillness — all processed on the watch itself, with no internet required.
          </p>
          <div className="grid grid-cols-3 gap-2 mt-auto">
            {[['38', 'subjects'], ['15', 'fall types'], ['&lt;10 s', 'to alert']].map(([val, label]) => (
              <div key={label} className="bg-black/20 border border-purple-400/15 rounded-lg p-2 text-center">
                <div className="text-sm font-bold text-purple-300" dangerouslySetInnerHTML={{ __html: val }} />
                <div className="text-[9px] text-white/30 mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 2. Dual-Signal Geofencing ── */}
        <div className="rounded-2xl bg-white/5 border border-green-400/25 p-5 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-green-400/10 shrink-0">
              <Navigation2 className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <div className="font-bold text-white">Dual-Signal Geofencing</div>
              <div className="text-[10px] text-green-400/60 mt-0.5">GPS + motion sensor · no false alarms</div>
            </div>
          </div>
          <p className="text-sm text-white/55 leading-relaxed">
            An alert only triggers when both GPS distance and motion sensor agree the senior has left the safe zone — preventing false alarms caused by GPS signal drift indoors.
          </p>
          <div className="grid grid-cols-3 gap-2 mt-auto">
            {[
              { label: 'Safe',     val: '< 30 m',  cls: 'text-green-400' },
              { label: 'Drifting', val: '30–50 m', cls: 'text-amber-400' },
              { label: 'Alert',    val: '> 50 m',  cls: 'text-red-400'   },
            ].map(({ label, val, cls }) => (
              <div key={label} className="bg-black/20 border border-white/10 rounded-lg p-2 text-center">
                <div className={`text-sm font-bold ${cls}`}>{val}</div>
                <div className="text-[9px] text-white/30 mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 3. Haversine Distance Engine ── */}
        <div className="rounded-2xl bg-white/5 border border-sky-400/25 p-5 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-sky-400/10 shrink-0">
              <MapPin className="w-5 h-5 text-sky-300" />
            </div>
            <div>
              <div className="font-bold text-white">Haversine Distance Engine</div>
              <div className="text-[10px] text-sky-300/60 mt-0.5">Accurate to metres · shows direction</div>
            </div>
          </div>
          <p className="text-sm text-white/55 leading-relaxed">
            Distance from the anchor point is calculated using the curvature of the Earth, giving metre-level accuracy. The bearing is also computed to show caregivers which direction the senior has moved.
          </p>
          <div className="grid grid-cols-2 gap-2 mt-auto">
            {[['Metre-level', 'distance accuracy'], ['Live bearing', 'direction on watch']].map(([val, label]) => (
              <div key={label} className="bg-black/20 border border-sky-400/15 rounded-lg p-2 text-center">
                <div className="text-sm font-bold text-sky-300">{val}</div>
                <div className="text-[9px] text-white/30 mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 4. Performance & Battery ── */}
        <div className="rounded-2xl bg-white/5 border border-amber-400/25 p-5 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-400/10 shrink-0">
              <Cpu className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="font-bold text-white">Performance &amp; Battery</div>
              <div className="text-[10px] text-amber-400/60 mt-0.5">Adaptive polling · built for all-day wear</div>
            </div>
          </div>
          <p className="text-sm text-white/55 leading-relaxed">
            Location updates slow down when the senior is still and speed up when they start walking — conserving battery without sacrificing responsiveness.
          </p>
          <div className="space-y-1.5 mt-auto">
            {[
              { label: 'GPS while still',    val: 'Every 60 s',   cls: 'text-white/50'  },
              { label: 'GPS while walking',  val: 'Every 10 s',   cls: 'text-amber-300' },
              { label: 'Fall confirmation',  val: '~3 s window',  cls: 'text-sky-300'   },
            ].map(({ label, val, cls }) => (
              <div key={label} className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0">
                <span className="text-xs text-white/45">{label}</span>
                <span className={`text-xs font-bold ${cls}`}>{val}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    ),
  },

  // =========================================================================
  // SLIDE 5 — THE DREAM TEAM
  // =========================================================================
  {
    id: 'team',
    title: 'The Dream Team',
    subtitle: undefined,
    content: (
      <div className="flex flex-col items-center w-full max-w-6xl gap-6">

        {/* 3 team member cards */}
        <div className="grid grid-cols-3 gap-6 w-full">
          {[
            {
              name: 'Ujwal',
              handle: 'The Sentinel',
              role: 'Security & Data Lead',
              accentCls: 'border-green-400/30',
              stripCls: 'bg-green-400',
              badgeCls: 'text-green-400 bg-green-400/10 border-green-400/20',
              nameCls: 'text-green-400',
              photo: photoUjwal,
              bio: 'MSc Cyber Security student & Former Data Scientist at Optum. Leveraging 3 years of industry experience to bridge data-driven insights with secure, agentic AI.',
              credit: 'Built the dual-signal geofencing engine — GPS + accelerometer state machine, Haversine distance, and battery-adaptive GPS polling.',
            },
            {
              name: 'Harshdeep',
              handle: 'The Professor',
              role: 'Engineering & UX Lead',
              accentCls: 'border-amber-400/30',
              stripCls: 'bg-amber-400',
              badgeCls: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
              nameCls: 'text-amber-300',
              photo: photoHarshdeep,
              bio: 'MS in AI Candidate & Former Research Intern. Experience in Reinforcement Learning, Quantum Computing, and high-dimensional optimisation challenges.',
              credit: 'Wired the smartwatch to the phone — push notifications, caregiver alerts, and real-time state sync between devices.',
            },
            {
              name: 'Ardacandra',
              handle: 'The Coder',
              role: 'AI & Algorithms Lead',
              accentCls: 'border-sky-400/30',
              stripCls: 'bg-sky-400',
              badgeCls: 'text-sky-300 bg-sky-400/10 border-sky-400/20',
              nameCls: 'text-sky-300',
              photo: photoArda,
              bio: 'MS in AI Candidate & Former Data Scientist. Bridging 3 years of ML experience with privacy-centric, on-device optimisation for wearables.',
              credit: 'Built the Community Card feature and trained the logistic regression on SisFall (38 subjects, 15 fall types) — wired into MLFallDetector.',
            },
          ].map(({ name, handle, role, accentCls, stripCls, badgeCls, nameCls, photo, bio, credit }) => (
            <div key={name} className={`rounded-2xl bg-white/5 border ${accentCls} flex flex-col overflow-hidden`}>
              <div className={`h-1 ${stripCls}`} />
              <div className="p-5 flex flex-col gap-4 flex-1">

                {/* Photo */}
                <div className={`w-full h-40 rounded-xl overflow-hidden border ${accentCls}`}>
                  <img src={photo} alt={name} className="w-full h-full object-cover object-top" />
                </div>

                {/* Name + role */}
                <div>
                  <h3 className={`text-xl font-bold font-display ${nameCls}`}>{name}</h3>
                  <div className="flex items-center gap-2 mt-1 flex-wrap">
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${badgeCls}`}>
                      {handle}
                    </span>
                    <span className="text-[10px] text-white/30">{role}</span>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-xs text-white/50 leading-relaxed">{bio}</p>

                {/* Credit */}
                <div className={`mt-auto pt-3 border-t border-white/10`}>
                  <div className="text-[9px] font-mono text-white/30 uppercase tracking-widest mb-1">Why this team</div>
                  <p className="text-xs text-white/70 leading-relaxed">{credit}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Vision statement */}
        <div className="w-full p-5 rounded-2xl bg-green-400/5 border border-green-400/20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(74,222,128,0.05),transparent_70%)] pointer-events-none" />
          <Heart className="w-5 h-5 text-green-400 mx-auto mb-2" />
          <p className="text-sm font-bold text-white relative z-10">
            Our Vision — A world where seniors explore their neighbourhood freely,
          </p>
          <p className="text-sm text-green-400 italic font-light mt-1 relative z-10">
            knowing ANCHOR is silently watching, so their families don't have to.
          </p>
        </div>
      </div>
    ),
  },
];

// ---------------------------------------------------------------------------
// Main App
// ---------------------------------------------------------------------------
export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide((s) => s + 1);
    }
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide((s) => s - 1);
    }
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); nextSlide(); }
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const slide = slides[currentSlide];

  return (
    <>
      <div className="min-h-screen bg-[#0D0D0D] text-white relative overflow-hidden font-sans">

        {/* Background glow */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          {/* Slide 1 full-screen background image */}
          <AnimatePresence>
            {currentSlide === 0 && (
              <motion.div
                key="slide1-bg"
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide1Bg})` }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              />
            )}
          </AnimatePresence>
          <div className="absolute inset-0 bg-[#0D0D0D]/60" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(74,222,128,0.06),transparent_60%)]" />
          <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-[#0D0D0D]/90 to-transparent" />
        </div>

        {/* Header */}
        <header className="fixed top-0 left-0 w-full px-8 py-5 flex justify-between items-center z-50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-green-500/20 border border-green-400/30 flex items-center justify-center shadow-lg shadow-green-500/10">
              <Anchor className="w-4 h-4 text-green-400" />
            </div>
            <span className="font-display font-bold tracking-tight text-lg text-white">ANCHOR</span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span className="text-xs font-mono text-white/20 uppercase tracking-[0.2em]">
              {slide.subtitle}
            </span>
            <div className="flex items-center gap-1">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > currentSlide ? 1 : -1); setCurrentSlide(i); }}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${i === currentSlide ? 'bg-green-400 w-4' : 'bg-white/20 hover:bg-white/40'}`}
                />
              ))}
            </div>
          </div>
        </header>

        {/* Slide title */}
        <div className="fixed top-16 left-8 z-40">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex items-center gap-2 text-xs font-mono text-green-400/60 uppercase tracking-widest mb-0.5">
                <span>{String(currentSlide + 1).padStart(2, '0')}</span>
                <span className="text-white/15">/</span>
                <span className="text-white/20">{String(slides.length).padStart(2, '0')}</span>
              </div>
              <h2 className="text-lg font-display font-bold text-white/80">{slide.title}</h2>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Main slides */}
        <main className="relative z-10 w-full h-screen overflow-hidden flex items-center justify-center pt-24 pb-16 px-8">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              initial={{ x: direction * 60, opacity: 0, scale: 0.98 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: direction * -60, opacity: 0, scale: 1.02 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-full flex items-center justify-center"
            >
              {slide.content}
            </motion.div>
          </AnimatePresence>
        </main>

        <Navigation onPrev={prevSlide} onNext={nextSlide} current={currentSlide} total={slides.length} />
        <ProgressBar current={currentSlide} total={slides.length} />
      </div>
    </>
  );
}
