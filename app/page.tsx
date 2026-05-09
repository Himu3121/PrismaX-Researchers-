'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, Zap, BookOpen, ChevronRight, Globe } from 'lucide-react';

export default function PrismaNavigator() {
  const [lang, setLang] = useState<'bn' | 'en'>('bn');
  const [selectedTopic, setSelectedTopic] = useState<any>(null);

 const translations = {
    bn: {
      nav: { overview: "OVERVIEW", protocols: "PROTOCOLS", research: "RESEARCH", langBtn: "ENGLISH" },
      hero: { label: "INTELLIGENCE MAPPING LAYER", sub: "Seekers-দের জন্য সহজ ব্যাখ্যা" },
      protocolDetails: [
        { id: 'p1', title: "Coordination Layer", summary: "মানুষ এবং রোবটের নির্দেশনার মধ্যে নিখুঁত তালমিল বজায় রাখার স্মার্ট লেয়ার।", details: "Coordination Layer হলো PrismaX ইকোসিস্টেমের কন্ট্রোল সেন্টার। এটি নিশ্চিত করে যে একজন মানুষের দেওয়া সূক্ষ্ম কমান্ডগুলো রোবটের মেকানিক্যাল জয়েন্টে সঠিকভাবে পৌঁছাচ্ছে। এটি ডাটা ভেরিফিকেশন এবং কমান্ড এক্সিকিউশনের মধ্যে একটি সেতুবন্ধন হিসেবে কাজ করে।\n\nউদাহরণ: আপনি যখন রোবটকে হাত নাড়ানোর নির্দেশ দেন, তখন এই লেয়ারটি হিসাব করে দেখে রোবটটির মোটর ঠিক কতটুকু শক্তি প্রয়োগ করবে যাতে কোনো ক্ষতি না হয়।" },
        { id: 'p2', title: "Optimum Network", summary: "শূন্য লেটেন্সিতে রিয়েল-টাইম রোবট অপারেশনের জন্য তৈরি বিশেষ অবকাঠামো।", details: "Optimum Network হলো একটি ডিসেন্ট্রালাইজড লেয়ার-২ নেটওয়ার্ক যা রিয়েল-টাইম ডাটা ট্রান্সমিশন সম্ভব করে তোলে। এটি হাই-স্পিড ব্যান্ডউইথ এবং লো-লেটেন্সি নিশ্চিত করে।\n\nউদাহরণ: আপনি লস অ্যাঞ্জেলেসের একটি রোবটকে বাংলাদেশ থেকে চালাচ্ছেন। Optimum Network-এর কারণে আপনার মুভমেন্ট এবং রোবটের রেসপন্স হবে তাৎক্ষণিক।" },
        { id: 'p3', title: "Knowledge Hub", summary: "বিশ্বের বৃহত্তম ওপেন-সোর্স রোবটিক ইন্টেলিজেন্স ও ডাটাবেজ সিস্টেম।", details: "Knowledge Hub হলো PrismaX-এর ডিজিটাল লাইব্রেরি। এখানে সারা বিশ্বের রোবট এবং মানুষের কাছ থেকে সংগৃহীত হাই-ফিডেলিটি ডাটা জমা থাকে। ডেভেলপাররা এই ওপেন-সোর্স ডাটা ব্যবহার করে নতুন নতুন ফিজিক্যাল AI মডেল তৈরি করতে পারেন।\n\nউদাহরণ: কোনো ডেভেলপার যদি নতুন একটি কুকিং রোবট বানাতে চান, তবে তিনি Knowledge Hub থেকে প্রয়োজনীয় ডাটা নিয়ে রোবটটিকে দ্রুত ট্রেইন করতে পারবেন।" }
      ],
      whitepaperTopics: [
        { id: 1, title: "Physical AI কী?", summary: "রোবটের শরীর নিয়ন্ত্রণকারী বিশেষ কৃত্রিম বুদ্ধিমত্তা।", details: "Physical AI বাস্তব জগতের রোবট নিয়ন্ত্রণ করতে সক্ষম। এটি রোবটকে পরিবেশ বুঝতে এবং নড়াচড়া করতে শেখায়।\n\nউদাহরণ: আপনি ChatGPT-কে বললে সে আপনাকে কফি বানানোর রেসিপি লিখে দেবে, কিন্তু PrismaX-এর Physical AI রোবটকে নির্দেশ দিয়ে সত্যি সত্যি কফি বানিয়ে দিতে সক্ষম।" },
        { id: 2, title: "টেলিকন্ট্রোল (Teleoperation)", summary: "দূর থেকে রোবটকে কাজ শেখানোর আধুনিক পদ্ধতি।", details: "টেলিকন্ট্রোল হলো এমন একটি সিস্টেম যেখানে একজন মানুষ রিমোট বা ভিআর (VR) গিয়ার ব্যবহার করে দূর থেকে রোবট পরিচালনা করে। মানুষ যখন রোবটকে কন্ট্রোল করে, তখন রোবট সেই কাজটির ডাটা রেকর্ড করে নেয়।" },
        { id: 3, title: "ডাটা গ্যাপ (The Data Gap)", summary: "রোবটকে বুদ্ধিমান বানানোর জন্য বাস্তব ডাটার অভাব দূর করা।", details: "রোবটকে শেখানোর জন্য ইন্টারনেটে পর্যাপ্ত 'বাস্তব ডাটা' নেই। PrismaX এই ডাটার অভাব বা 'গ্যাপ' দূর করতে কাজ করে।" },
        { id: 4, title: "ডাটা ফ্লাইহুইল (Data Flywheel)", summary: "AI-কে নিয়মিত উন্নত করার স্বয়ংক্রিয় লার্নিং সাইকেল।", details: "মানুষ রোবটকে শেখাবে -> সেই ডাটা দিয়ে AI উন্নত হবে -> উন্নত AI দিয়ে রোবট নিজে কাজ করবে।" },
        { id: 5, title: "DePIN ও রোবটিক্স", summary: "বিকেন্দ্রীভূত ফিজিক্যাল ইনফ্রাস্ট্রাকচার নেটওয়ার্ক।", details: "বিশ্বের মানুষ তাদের রোবট হার্ডওয়্যার এবং ডাটা শেয়ার করে একটি বিশাল নেটওয়ার্ক তৈরি করে।" },
        { id: 6, title: "VLA মডেল (Vision-Language-Action)", summary: "রোবটের দেখা, মানুষের ভাষা বোঝা এবং কাজ করার ক্ষমতা।", details: "VLA হলো রোবটের একটি শক্তিশালী মাল্টিমোডাল ব্রেইন।" },
        { id: 7, title: "হাই-ফিডেলিটি ডাটা", summary: "অত্যন্ত সূক্ষ্ম এবং হাই-কোয়ালিটি সেন্সর তথ্য সংগ্রহ।", details: "এতে রোবটের প্রতিটি মোটরের ভোল্টেজ, তাপমাত্রা, এবং ওজনের নিখুঁত হিসাব থাকে।" },
        { id: 8, title: "এজ-কেস (Edge Cases) সমাধান", summary: "অস্বাভাবিক পরিস্থিতিতে সঠিক সিদ্ধান্ত নেওয়ার ক্ষমতা।", details: "মানুষ টেলিকন্ট্রোলের মাধ্যমে এই কঠিন মুহূর্তগুলোতে রোবটকে সাহায্য করে এবং রোবট শেখে।" },
        { id: 9, title: "হার্ডওয়্যার অ্যাগনস্টিক সিস্টেম", summary: "যেকোনো ধরণের রোবটে PrismaX ব্যবহারের সুবিধা।", details: "PrismaX সফটওয়্যার যেকোনো ব্র্যান্ডের রোবটিক হার্ডওয়্যারে চালানো সম্ভব।" },
        { id: 10, title: "রিয়েল-টাইম অপারেশন", summary: "রিয়েল-টাইম অপারেশনের জন্য লো-লেটেন্সি নেটওয়ার্ক।", details: "Optimum Network নিশ্চিত করে যে নির্দেশ যেন মিলিসেকেন্ডের মধ্যে রোবটের কাছে পৌঁছায়।" },
        { id: 11, title: "RLNC টেকনোলজি", summary: "দুর্বল ইন্টারনেটেও শক্তিশালী ডাটা ট্রান্সমিশন।", details: "ইন্টারনেটের প্যাকেটে সমস্যা থাকলেও ডাটা হারিয়ে যেতে দেয় না।" },
        { id: 12, title: "ডাটা মাইনিং ২.০", summary: "অংক কষে নয়, রোবট ট্রেনিং-এর মাধ্যমে রিওয়ার্ড অর্জন।", details: "আপনি যখন রোবটকে ট্রেনিং দেন, বিনিময়ে আপনি প্রিজমা পয়েন্ট বা রিওয়ার্ড পাবেন।" },
        { id: 13, title: "প্রাইভেসি ও ডাটা এনক্রিপশন", summary: "ব্যবহারকারীর নিরাপত্তা এবং গোপনীয়তা রক্ষা।", details: "রোবট যে ডাটা সংগ্রহ করে তা এনক্রিপ্ট করে কোড আকারে সেভ করা হয়।" },
        { id: 14, title: "ফাউন্ডেশন মডেল", summary: "সব রোবটের জন্য একটি সাধারণ মস্তিস্ক।", details: "একবার একটি রোবট কিছু শিখলে পৃথিবীর সব PrismaX সংযুক্ত রোবট তা শিখে যাবে।" },
        { id: 15, title: "কোঅর্ডিনেশন লেয়ার", summary: "মানুষের নির্দেশ এবং রোবটের মেকানিক্যাল আউটপুটের সমন্বয়।", details: "নিশ্চিত করে যে মানুষের দেওয়া নির্দেশ রোবটের মোটর নির্ভুলভাবে পালন করছে।" },
        { id: 16, title: "প্রুফ অফ ইউজফুল ওয়ার্ক (PoUW)", summary: "অপ্রয়োজনীয় বিদ্যুৎ নষ্ট না করে কার্যকর কাজ করা।", details: "নেটওয়ার্কের কাজ সম্পন্ন হয় দরকারী কাজের (রোবট ট্রেনিং) মাধ্যমে।" },
        { id: 17, title: "HITL (Human-in-the-Loop)", summary: "AI-এর সব কাজে মানুষের তদারকি এবং নিয়ন্ত্রণ।", details: "AI ভুল করতে গেলে একজন মানুষ তাকে থামিয়ে সঠিক পথ দেখাতে পারবে।" },
        { id: 18, title: "ডিসেন্ট্রালাইজড নোড নেটওয়ার্ক", summary: "সার্ভারের কোনো নির্দিষ্ট কেন্দ্র না থাকা।", details: "PrismaX সার্ভার সারা পৃথিবীতে ছড়িয়ে আছে, যা হ্যাক করা অসম্ভব।" },
        { id: 19, title: "স্কেলেবল ইন্টেলিজেন্স", summary: "কমিউনিটির অবদানের সাথে বুদ্ধিমত্তা বৃদ্ধির হার।", details: "যত বেশি রোবট যুক্ত হবে, ডাটা কালেকশন বাড়বে এবং AI বুদ্ধিমান হবে।" },
        { id: 20, title: "সিকার (Seeker) কমিউনিটি", summary: "ব্যবহারকারীদের হাতেই প্রজেক্টের ভবিষ্যৎ সিদ্ধান্ত।", details: "সিকারদের ভোটের মাধ্যমে প্রজেক্টের পরবর্তী পলিসি নির্ধারণ করা হবে।" }
      ]
    },
    en: {
      nav: { overview: "OVERVIEW", protocols: "PROTOCOLS", research: "RESEARCH", langBtn: "বাংলা" },
      hero: { label: "INTELLIGENCE MAPPING LAYER", sub: "Simplified for Seekers" },
      protocolDetails: [
        { id: 'p1', title: "Coordination Layer", summary: "Sync between human intent and robotic execution.", details: "Ensures human commands reach robotic joints accurately." },
        { id: 'p2', title: "Optimum Network", summary: "Zero-latency infrastructure for real-time operations.", details: "Decentralized network built to eliminate lag globally." },
        { id: 'p3', title: "Knowledge Hub", summary: "Open-source robotic intelligence database.", details: "Digital library of high-fidelity interaction data." }
      ],
      whitepaperTopics: [
        { id: 1, title: "What is Physical AI?", summary: "AI designed to control robotic bodies.", details: "AI that interacts with the physical world environments." },
        { id: 2, title: "Teleoperation", summary: "Remote method of teaching robots.", details: "Training robots remotely via human input data." },
        { id: 3, title: "The Data Gap", summary: "Bridging the lack of real robotic data.", details: "Generating the physical data missing from the internet." },
        { id: 4, title: "Data Flywheel", summary: "Self-improving AI development cycle.", details: "More training data results in smarter autonomous AI." },
        { id: 15, title: "Coordination Layer", summary: "Syncing human intent with motors.", details: "Precision command execution system." },
        { id: 16, title: "PoUW", summary: "Effective work without waste.", details: "Training robots instead of solving puzzles." },
        { id: 17, title: "Human-in-the-Loop", summary: "Human supervision over AI.", details: "Safety oversight for robotic autonomous control." },
        { id: 18, title: "Decentralized Nodes", summary: "No single point of failure.", details: "Spread across a global computer network." },
        { id: 19, title: "Scalable Intelligence", summary: "Growing with the community.", details: "AI scaling via crowd-sourced physical data." },
        { id: 20, title: "Seeker Community", summary: "User-driven governance.", details: "Project direction decided by community votes." }
      ]
    }
  };

  const current = translations[lang];

  return (
    <div className="min-h-screen bg-transparent selection:bg-[#DFD8D0]/10 font-sans text-white relative">
      
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
          <motion.div key={lang} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
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
                  className="text-center group cursor-pointer p-4"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedTopic(item);
                  }}
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

        {/* RESEARCH EXPLORER */}
        <section id="whitepaper" className="py-40 border-t border-white/5">
          <h3 className="text-4xl font-serif italic mb-24 text-center tracking-widest uppercase text-white/80">Research Explorer</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6">
            {current.whitepaperTopics.map((topic: any) => (
              <div 
                key={topic.id}
                className="flex items-center justify-between border-b border-white/5 pb-8 group cursor-pointer p-4 hover:bg-white/[0.02] transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedTopic(topic);
                }}
              >
                <div className="flex items-center gap-10 pointer-events-none">
                  <span className="text-white/10 font-serif text-2xl italic group-hover:text-[#DFD8D0] transition">
                    {topic.id < 10 ? `0${topic.id}` : topic.id}
                  </span>
                  <div>
                    <h4 className="text-2xl font-serif italic text-white/90 mb-1">{topic.title}</h4>
                    <p className="text-[10px] uppercase tracking-widest text-white/20 font-bold">{topic.summary}</p>
                  </div>
                </div>
                <ChevronRight size={18} className="text-white/20 group-hover:text-white transition pointer-events-none" />
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* POP-UP MODAL (Z-INDEX 100) */}
      <AnimatePresence>
        {selectedTopic && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 overflow-hidden">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setSelectedTopic(null)} 
              className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }} 
              animate={{ scale: 1, opacity: 1, y: 0 }} 
              exit={{ scale: 0.9, opacity: 0, y: 20 }} 
              className="relative bg-[#0a0a0a] border border-white/10 p-8 md:p-20 rounded-[40px] max-w-5xl w-full shadow-2xl overflow-y-auto max-h-[85vh] scrollbar-hide z-[101]"
            >
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedTopic(null);
                }} 
                className="absolute top-8 right-8 text-white/20 hover:text-white transition z-[102]"
              >
                <X size={40} />
              </button>

              <div className="mt-4">
                <h3 className="text-4xl md:text-7xl font-serif italic mb-10 tracking-tighter leading-none text-white">{selectedTopic.title}</h3>
                <div className="space-y-10 max-w-3xl">
                  <div className="text-[#DFD8D0] text-xl md:text-2xl italic font-light border-l-2 border-[#DFD8D0]/30 pl-6 leading-relaxed bg-white/5 p-6 rounded-r-2xl">
                    &ldquo;{selectedTopic.summary}&rdquo;
                  </div>
                  {selectedTopic.details && (
                    <div className="text-white/60 text-lg md:text-xl leading-loose font-light whitespace-pre-line">
                      {selectedTopic.details}
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-16 pt-8 border-t border-white/5 flex justify-between items-center">
                <span className="text-[9px] font-bold tracking-[0.4em] text-white/20 uppercase">PrismaX Architecture Analysis</span>
                <button 
                  onClick={() => setSelectedTopic(null)}
                  className="text-[#DFD8D0] text-[10px] font-bold uppercase tracking-widest hover:underline"
                >
                  Close Explorer
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <footer className="py-24 text-center border-t border-white/5">
        <p className="text-white/10 text-[9px] font-bold tracking-[0.6em] uppercase transition hover:text-[#DFD8D0]">
          DEV BY HIMU • 2026
        </p>
      </footer>
    </div>
  );
}