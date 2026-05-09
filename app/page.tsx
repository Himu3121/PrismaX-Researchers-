'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, Zap, BookOpen, ChevronRight, Globe } from 'lucide-react';

export default function PrismaNavigator() {
  const [lang, setLang] = useState<'bn' | 'en'>('bn');
  const [selectedTopic, setSelectedTopic] = useState<any>(null);
  const [mounted, setMounted] = useState(false);

  // হাইড্রেশন এরর এড়ানোর জন্য
  useEffect(() => {
    setMounted(true);
  }, []);

  const translations = {
    bn: {
      nav: { overview: "OVERVIEW", protocols: "PROTOCOLS", research: "RESEARCH", langBtn: "ENGLISH" },
      hero: { label: "INTELLIGENCE MAPPING LAYER", sub: "Seekers-দের জন্য সহজ ব্যাখ্যা" },
      protocolDetails: [
        { id: 'p1', title: "Coordination Layer", summary: "মানুষ এবং রোবটের নির্দেশনার মধ্যে নিখুঁত তালমিল বজায় রাখার স্মার্ট লেয়ার।", details: "Coordination Layer হলো PrismaX ইকোসিস্টেমের কন্ট্রোল সেন্টার। এটি নিশ্চিত করে যে একজন মানুষের দেওয়া সূক্ষ্ম ইনপুটগুলো রোবটের মেকানিক্যাল জয়েন্টে সঠিকভাবে পৌঁছাচ্ছে।\n\nউদাহরণ: আপনি যখন রিমোটলি রোবটকে হাত নাড়ানোর নির্দেশ দেন, তখন এই লেয়ারটি হিসাব করে দেখে রোবটটির মোটর ঠিক কতটুকু শক্তি প্রয়োগ করবে।" },
        { id: 'p2', title: "Optimum Network", summary: "শূন্য লেটেন্সিতে রিয়েল-টাইম রোবট অপারেশনের জন্য তৈরি বিশেষ অবকাঠামো।", details: "Optimum Network হলো একটি ডিসেন্ট্রালাইজড লেয়ার-২ নেটওয়ার্ক যা রিয়েল-টাইম ডাটা ট্রান্সমিশন সম্ভব করে তোলে। এটি হাই-স্পিড ব্যান্ডউইথ এবং লো-লেটেন্সি নিশ্চিত করে।" },
        { id: 'p3', title: "Knowledge Hub", summary: "বিশ্বের বৃহত্তম ওপেন-সোর্স রোবটিক ইন্টেলিজেন্স ও ডাটাবেজ সিস্টেম।", details: "Knowledge Hub হলো PrismaX-এর ডিজিটাল লাইব্রেরি। এখানে সারা বিশ্বের রোবট এবং মানুষের কাছ থেকে সংগৃহীত হাই-ফিডেলিটি ডাটা জমা থাকে।" }
      ],
      whitepaperTopics: [
        { id: 1, title: "Physical AI কী?", summary: "রোবটের শরীর নিয়ন্ত্রণকারী বিশেষ কৃত্রিম বুদ্ধিমত্তা।", details: "Physical AI বাস্তব জগতের রোবট নিয়ন্ত্রণ করতে সক্ষম। এটি রোবটকে পরিবেশ বুঝতে এবং নড়াচড়া করতে শেখায়।\n\nউদাহরণ: আপনি ChatGPT-কে বললে সে আপনাকে কফি বানানোর রেসিপি লিখে দেবে, কিন্তু Physical AI রোবটকে নির্দেশ দিয়ে সত্যি সত্যি কফি বানিয়ে দিতে সক্ষম।" },
        { id: 2, title: "টেলিকন্ট্রোল (Teleoperation)", summary: "দূর থেকে রোবটকে কাজ শেখানোর আধুনিক পদ্ধতি।", details: "টেলিকন্ট্রোল হলো এমন একটি সিস্টেম যেখানে একজন মানুষ রিমোট বা ভিআর (VR) গিয়ার ব্যবহার করে দূর থেকে রোবট পরিচালনা করে।" },
        { id: 3, title: "ডাটা গ্যাপ (The Data Gap)", summary: "রোবটকে বুদ্ধিমান বানানোর জন্য বাস্তব ডাটার অভাব দূর করা।", details: "রোবটকে শেখানোর জন্য ইন্টারনেটে পর্যাপ্ত 'বাস্তব ডাটা' নেই। PrismaX এই ডাটার অভাব বা 'গ্যাপ' দূর করতে কাজ করে।" },
        { id: 4, title: "ডাটা ফ্লাইহুইল (Data Flywheel)", summary: "AI-কে নিয়মিত উন্নত করার স্বয়ংক্রিয় লার্নিং সাইকেল।", details: "মানুষ রোবটকে শেখাবে -> সেই ডাটা দিয়ে AI উন্নত হবে -> উন্নত AI দিয়ে রোবট নিজে কাজ করবে।" },
        { id: 5, title: "DePIN ও রোবটিক্স", summary: "বিকেন্দ্রীভূত ফিজিক্যাল ইনফ্রাস্ট্রাকচার নেটওয়ার্ক।", details: "প্রথাগত টেক কোম্পানিগুলোর মতো ডাটা কোনো সেন্ট্রাল সার্ভারে থাকে না। বিশ্বের মানুষ তাদের রোবট হার্ডওয়্যার শেয়ার করে একটি বিশাল নেটওয়ার্ক তৈরি করে।" },
        { id: 6, title: "VLA মডেল", summary: "রোবটের দেখা, ভাষা বোঝা এবং কাজ করার ক্ষমতা।", details: "VLA হলো রোবটের একটি শক্তিশালী মাল্টিমোডাল ব্রেইন যা পরিবেশ দেখে সরাসরি অ্যাকশন নেয়।" },
        { id: 7, title: "হাই-ফিডেলিটি ডাটা", summary: "অত্যন্ত সূক্ষ্ম এবং হাই-কোয়ালিটি সেন্সর তথ্য।", details: "এতে রোবটের প্রতিটি মোটরের ভোল্টেজ, তাপমাত্রা এবং চাপের নিখুঁত হিসাব থাকে।" },
        { id: 8, title: "এজ-কেস সমাধান", summary: "অস্বাভাবিক পরিস্থিতিতে সঠিক সিদ্ধান্ত নেওয়ার ক্ষমতা।", details: "মানুষ কঠিন মুহূর্তে রোবটকে সাহায্য করে এবং রোবট সেই অভিজ্ঞতা থেকে শেখে।" },
        { id: 9, title: "হার্ডওয়্যার অ্যাগনস্টিক", summary: "যেকোনো ধরণের রোবটে PrismaX ব্যবহারের সুবিধা।", details: "PrismaX সফটওয়্যার যেকোনো ব্র্যান্ডের রোবটিক হার্ডওয়্যারে চালানো সম্ভব।" },
        { id: 10, title: "Optimum Network", summary: "রিয়েল-টাইম অপারেশনের জন্য লো-লেটেন্সি নেটওয়ার্ক।", details: "Optimum Network নিশ্চিত করে যে নির্দেশ যেন মিলিসেকেন্ডের মধ্যে রোবটের কাছে পৌঁছায়।" },
        { id: 11, title: "RLNC টেকনোলজি", summary: "দুর্বল ইন্টারনেটেও শক্তিশালী ডাটা ট্রান্সমিশন।", details: "Random Linear Network Coding ইন্টারনেটের প্যাকেটে সমস্যা থাকলেও ডাটা হারিয়ে যেতে দেয় না।" },
        { id: 12, title: "ডাটা মাইনিং ২.০", summary: "অংক কষে নয়, রোবট ট্রেনিং-এর মাধ্যমে রিওয়ার্ড।", details: "আপনি যখন রোবটকে ট্রেনিং দেন, বিনিময়ে আপনি প্রিজমা পয়েন্ট বা রিওয়ার্ড পাবেন।" },
        { id: 13, title: "প্রাইভেসি ও এনক্রিপশন", summary: "ব্যবহারকারীর নিরাপত্তা এবং গোপনীয়তা রক্ষা।", details: "রোবট যে ডাটা সংগ্রহ করে তা এনক্রিপ্ট করে সেভ করা হয়।" },
        { id: 14, title: "ফাউন্ডেশন মডেল", summary: "সব রোবটের জন্য একটি সাধারণ মস্তিস্ক।", details: "একবার একটি রোবট কিছু শিখলে পৃথিবীর সব PrismaX রোবট তা শিখে যাবে।" },
        { id: 15, title: "কোঅর্ডিনেশন লেয়ার", summary: "মানুষের নির্দেশ ও রোবটের মোটরের সমন্বয়।", details: "নিশ্চিত করে যে মানুষের দেওয়া নির্দেশ রোবটের মোটর নির্ভুলভাবে পালন করছে।" },
        { id: 16, title: "PoUW", summary: "অপ্রয়োজনীয় বিদ্যুৎ নষ্ট না করে কার্যকর কাজ।", details: "নেটওয়ার্কের কাজ সম্পন্ন হয় দরকারী কাজের (রোবট ট্রেনিং) মাধ্যমে।" },
        { id: 17, title: "HITL", summary: "AI-এর সব কাজে মানুষের তদারকি এবং নিয়ন্ত্রণ।", details: "AI ভুল করতে গেলে একজন মানুষ তাকে থামিয়ে সঠিক পথ দেখাতে পারবে।" },
        { id: 18, title: "ডিসেন্ট্রালাইজড নোড", summary: "সার্ভারের কোনো নির্দিষ্ট কেন্দ্র না থাকা।", details: "PrismaX সার্ভার সারা পৃথিবীতে ছড়িয়ে আছে।" },
        { id: 19, title: "স্কেলেবল ইন্টেলিজেন্স", summary: "কমিউনিটির অবদানের সাথে বুদ্ধিমত্তা বৃদ্ধির হার।", details: "যত বেশি রোবট যুক্ত হবে, AI তত দ্রুত বুদ্ধিমান হবে।" },
        { id: 20, title: "Seeker কমিউনিটি", summary: "ব্যবহারকারীদের হাতেই প্রজেক্টের ভবিষ্যৎ সিদ্ধান্ত।", details: "সিকারদের ভোটের মাধ্যমে প্রজেক্টের পরবর্তী পলিসি নির্ধারণ করা হবে।" }
      ]
    },
    en: {
      nav: { overview: "OVERVIEW", protocols: "PROTOCOLS", research: "RESEARCH", langBtn: "বাংলা" },
      hero: { label: "INTELLIGENCE MAPPING LAYER", sub: "Simplified for Seekers" },
      protocolDetails: [
        { id: 'p1', title: "Coordination Layer", summary: "Sync between human intent and robotic execution.", details: "Nerve center ensuring commands reach robotic joints accurately." },
        { id: 'p2', title: "Optimum Network", summary: "Zero-latency infrastructure for real-time operations.", details: "Decentralized network built to eliminate lag." },
        { id: 'p3', title: "Knowledge Hub", summary: "Open-source robotic intelligence database.", details: "Digital library of high-fidelity interaction data." }
      ],
      whitepaperTopics: [
        { id: 1, title: "Physical AI?", summary: "AI designed to control robotic bodies.", details: "AI that interacts with physical environments." },
        { id: 2, title: "Teleoperation", summary: "Remote method of teaching robots.", details: "Training robots via human-controlled data." },
        { id: 3, title: "The Data Gap", summary: "Bridging the lack of real robotic data.", details: "Generating data missing from the current internet." },
        { id: 4, title: "Data Flywheel", summary: "Self-improving AI development cycle.", details: "More data results in smarter AI." },
        { id: 5, title: "DePIN & Robotics", summary: "Decentralized physical infrastructure.", details: "Shared ownership of robotic networks." },
        { id: 6, title: "VLA Model", summary: "Vision-Language-Action capabilities.", details: "Multi-modal brain for robots." },
        { id: 7, title: "High-Fidelity Data", summary: "Precise sensor information.", details: "Detailed motor torque and pressure data." },
        { id: 8, title: "Edge Case Solution", summary: "Handling unusual situations.", details: "AI learning from human-guided experiences." },
        { id: 9, title: "Hardware Agnostic", summary: "Universal robotic software.", details: "Runs on any brand of robotic hardware." },
        { id: 10, title: "Optimum Network", summary: "Low-latency network for robots.", details: "Millisecond response times." },
        { id: 11, title: "RLNC Technology", summary: "Robust data transmission.", details: "Prevents data loss on weak Wi-Fi." },
        { id: 12, title: "Data Mining 2.0", summary: "Earning through robot training.", details: "Rewards for contributing useful data." },
        { id: 13, title: "Privacy & Encryption", summary: "Security and data protection.", details: "Encrypted data keeps user spaces private." },
        { id: 14, title: "Foundation Model", summary: "Common brain for all robots.", details: "Skill sharing across the entire network." },
        { id: 15, title: "Coordination Layer", summary: "Human-motor synchronization.", details: "Ensuring commands are executed perfectly." },
        { id: 16, title: "PoUW", summary: "Effective work without waste.", details: "Training robots instead of solving puzzles." },
        { id: 17, title: "Human-in-the-Loop", summary: "Human supervision over AI.", details: "Safety oversight for robotic control." },
        { id: 18, title: "Decentralized Nodes", summary: "No single point of failure.", details: "Spread across global computer networks." },
        { id: 19, title: "Scalable Intelligence", summary: "Growing with community data.", details: "AI scaling via crowd-sourced data." },
        { id: 20, title: "Seeker Community", summary: "User-driven governance.", details: "Project direction decided by user votes." }
      ]
    }
  };

  if (!mounted) return null;

  const current = translations[lang];

  return (
    <div className="min-h-screen bg-transparent font-sans text-white relative">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-12 py-8 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
        <h1 className="text-3xl font-serif tracking-tight cursor-pointer">
          Prisma<span className="text-xl align-top ml-0.5 text-[#DFD8D0] italic">(x)</span>
        </h1>
        <div className="flex items-center gap-12 text-[11px] font-bold tracking-[0.3em] text-white/40">
          <a href="#hero" className="hover:text-white transition uppercase">OVERVIEW</a>
          <a href="#protocols" className="hover:text-white transition uppercase">PROTOCOLS</a>
          <a href="#whitepaper" className="hover:text-white transition uppercase">RESEARCH</a>
          <button onClick={() => setLang(lang === 'bn' ? 'en' : 'bn')} className="text-white hover:text-[#DFD8D0] transition uppercase flex items-center gap-2">
            <Globe size={14} className="opacity-40" /> {current.nav.langBtn}
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8 relative z-10">
        
        {/* HERO SECTION */}
        <section id="hero" className="pt-64 pb-40 text-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <span className="text-white/20 text-[10px] font-bold tracking-[0.6em] uppercase mb-8 block">{current.hero.label}</span>
            <h2 className="text-5xl md:text-[6rem] font-serif tracking-tighter leading-none mb-10">
              Prisma<span className="italic text-[#DFD8D0]">(x)</span> <br /> 
              <span className="uppercase text-white">Physical AI</span>
            </h2>
            <p className="text-xl md:text-2xl font-light tracking-tight text-white/30 uppercase">{current.hero.sub}</p>
          </motion.div>
        </section>

        {/* PROTOCOLS SECTION */}
        <section id="protocols" className="py-32 border-t border-white/5">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {current.protocolDetails.map((item: any) => (
                <div 
                  key={item.id} 
                  className="text-center group cursor-pointer"
                  onClick={() => setSelectedTopic(item)}
                >
                  <div className="w-20 h-20 bg-[#121212] rounded-3xl flex items-center justify-center mx-auto mb-10 border border-white/5 group-hover:border-[#DFD8D0]/30 transition-all pointer-events-none">
                    <div className="text-[#DFD8D0] scale-125">
                      {item.id === 'p1' ? <ShieldCheck /> : item.id === 'p2' ? <Zap /> : <BookOpen />}
                    </div>
                  </div>
                  <h4 className="text-3xl font-serif italic mb-6 group-hover:text-[#DFD8D0] transition pointer-events-none">{item.title}</h4>
                  <p className="text-white/40 text-sm leading-relaxed max-w-[280px] mx-auto pointer-events-none">{item.summary}</p>
                </div>
              ))}
           </div>
        </section>

        {/* RESEARCH EXPLORER - Double Column */}
        <section id="whitepaper" className="py-40 border-t border-white/5">
          <h3 className="text-4xl font-serif italic mb-24 text-center tracking-widest uppercase text-white/80">Research Explorer</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6">
            {current.whitepaperTopics.map((topic: any) => (
              <div 
                key={topic.id}
                className="flex items-center justify-between border-b border-white/5 pb-8 group cursor-pointer hover:opacity-70 transition-all"
                onClick={() => setSelectedTopic(topic)}
              >
                <div className="flex items-center gap-10">
                  <span className="text-white/10 font-serif text-2xl italic group-hover:text-[#DFD8D0] transition">
                    {topic.id < 10 ? `0${topic.id}` : topic.id}
                  </span>
                  <div>
                    <h4 className="text-2xl font-serif italic text-white/90 mb-1">{topic.title}</h4>
                    <p className="text-[10px] uppercase tracking-widest text-white/20 font-bold">{topic.summary}</p>
                  </div>
                </div>
                <ChevronRight size={18} className="text-white/20 group-hover:text-white transition" />
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* POP-UP MODAL */}
      <AnimatePresence>
        {selectedTopic && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setSelectedTopic(null)} 
              className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              exit={{ scale: 0.95, opacity: 0 }} 
              className="relative bg-[#0a0a0a] border border-white/10 p-12 md:p-20 rounded-[40px] max-w-4xl w-full shadow-2xl overflow-y-auto max-h-[85vh] scrollbar-hide z-[101]"
            >
              <button onClick={() => setSelectedTopic(null)} className="absolute top-10 right-10 text-white/20 hover:text-white transition"><X size={32} /></button>
              <h3 className="text-4xl md:text-6xl font-serif italic mb-10 tracking-tighter leading-tight text-white">{selectedTopic.title}</h3>
              <div className="space-y-10">
                <div className="p-8 bg-white/5 rounded-3xl italic text-[#DFD8D0] text-xl leading-relaxed">
                  &ldquo;{selectedTopic.summary}&rdquo;
                </div>
                <p className="text-white/50 text-lg md:text-xl leading-loose font-light whitespace-pre-line">
                  {selectedTopic.details}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <footer className="py-24 text-center border-t border-white/5">
        <p className="text-white/10 text-[9px] font-bold tracking-[0.6em] uppercase">DEV BY HIMU • 2026</p>
      </footer>
    </div>
  );
}