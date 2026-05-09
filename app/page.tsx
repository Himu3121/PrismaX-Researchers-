'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Cpu, X, ShieldCheck, Zap, BookOpen, ChevronRight, Globe } from 'lucide-react';

export default function PrismaNavigator() {
  const [lang, setLang] = useState<'bn' | 'en'>('bn');
  const [selectedTopic, setSelectedTopic] = useState<null | any>(null);

  const translations = {
    bn: {
      nav: { overview: "Overview", protocols: "Protocols", research: "Research", langBtn: "English" },
      hero: { label: "Intelligence Mapping Layer", sub: "সিকারদের জন্য সহজ ব্যাখ্যা" },
      protocolDetails: [
        { id: 'p1', title: "Coordination Layer", summary: "মানুষ এবং রোবটের নির্দেশনার মধ্যে নিখুঁত তালমিল বজায় রাখার স্মার্ট লেয়ার।", details: "Coordination Layer হলো PrismaX ইকোসিস্টেমের কন্ট্রোল সেন্টার। এটি নিশ্চিত করে যে একজন মানুষের দেওয়া সূক্ষ্ম ইনপুটগুলো রোবটের মেকানিক্যাল জয়েন্টে সঠিকভাবে পৌঁছাচ্ছে। এটি ডাটা ভেরিফিকেশন এবং কমান্ড এক্সিকিউশনের মধ্যে একটি সেতুবন্ধন হিসেবে কাজ করে।\n\nউদাহরণ: আপনি যখন রিমোটলি রোবটকে হাত নাড়ানোর নির্দেশ দেন, তখন এই লেয়ারটি হিসাব করে দেখে রোবটটির মোটর কতটুকু শক্তি প্রয়োগ করবে যাতে কোনো ক্ষতি না হয়।" },
        { id: 'p2', title: "Optimum Network", summary: "শূন্য লেটেন্সিতে রিয়েল-টাইম রোবট অপারেশনের জন্য তৈরি বিশেষ অবকাঠামো।", details: "রোবটিক্স অপারেশনের সবচেয়ে বড় বাধা হলো ল্যাগ (Lag)। Optimum Network হলো একটি ডিসেন্ট্রালাইজড লেয়ার-২ নেটওয়ার্ক যা পৃথিবীর যেকোনো প্রান্ত থেকে রিয়েল-টাইম ডাটা ট্রান্সমিশন সম্ভব করে তোলে। এটি হাই-স্পিড ব্যান্ডউইথ এবং লো-লেটেন্সি নিশ্চিত করে।\n\nউদাহরণ: আপনি লস অ্যাঞ্জেলেসের একটি রোবটকে বাংলাদেশ থেকে চালাচ্ছেন। Optimum Network-এর কারণে আপনার মুভমেন্ট এবং রোবটের রেসপন্স হবে একদম তাৎক্ষণিক।" },
        { id: 'p3', title: "Knowledge Hub", summary: "বিশ্বের বৃহত্তম ওপেন-সোর্স রোবটিক ইন্টেলিজেন্স ও ডাটাবেজ সিস্টেম।", details: "Knowledge Hub হলো PrismaX-এর ডিজিটাল লাইব্রেরি। এখানে সারা বিশ্বের রোবট এবং মানুষের কাছ থেকে সংগৃহীত হাই-ফিডেলিটি ডাটা জমা থাকে। ডেভেলপাররা এই ওপেন-সোর্স ডাটা ব্যবহার করে নতুন নতুন ফিজিক্যাল AI মডেল তৈরি করতে পারেন।\n\nউদাহরণ: কোনো ডেভেলপার যদি নতুন একটি কুকিং রোবট বানাতে চান, তবে তাকে শুরু থেকে শিখাতে হবে না। তিনি Knowledge Hub থেকে প্রয়োজনীয় ডাটা নিয়ে রোবটটিকে দ্রুত ট্রেইন করতে পারবেন।" }
      ],
      whitepaperTopics: [
        { id: 1, title: "Physical AI কী?", summary: "রোবটের শরীর নিয়ন্ত্রণকারী বিশেষ কৃত্রিম বুদ্ধিমত্তা।", details: "সাধারণ AI (যেমন ChatGPT) শুধু ডিজিটাল তথ্য নিয়ে কাজ করে। কিন্তু Physical AI বাস্তব জগতের ফিজিক্যাল রোবট নিয়ন্ত্রণ করতে সক্ষম। এটি রোবটকে মানুষের মতো পরিবেশ বুঝতে এবং নড়াচড়া করতে শেখায়।\n\nউদাহরণ: আপনি ChatGPT-কে বললে সে আপনাকে কফি বানানোর রেসিপি লিখে দেবে, কিন্তু PrismaX-এর Physical AI রোবটকে নির্দেশ দিয়ে সত্যি সত্যি কফি বানিয়ে দিতে সক্ষম।" },
        { id: 2, title: "টেলিকন্ট্রোল (Teleoperation)", summary: "দূর থেকে রোবটকে কাজ শেখানোর আধুনিক পদ্ধতি।", details: "টেলিকন্ট্রোল হলো এমন একটি সিস্টেম যেখানে একজন মানুষ রিমোট বা ভিআর (VR) গিয়ার ব্যবহার করে দূর থেকে রোবট পরিচালনা করে। মানুষ যখন রোবটকে কন্ট্রোল করে, তখন রোবট সেই কাজটির ডাটা রেকর্ড করে নেয়।\n\nউদাহরণ: ধরুন আপনি ঢাকা থেকে ইন্টারনেটের মাধ্যমে আমেরিকার একটি হসপিটালের রোবটকে কাজ শেখাচ্ছেন। আপনার প্রতিটি মুভমেন্ট রোবটটি নিজের মেমোরিতে সেভ করে নিচ্ছে।" },
        { id: 3, title: "ডাটা গ্যাপ (The Data Gap)", summary: "রোবটকে বুদ্ধিমান বানানোর জন্য বাস্তব ডাটার অভাব দূর করা।", details: "রোবটকে শেখানোর জন্য ইন্টারনেটে পর্যাপ্ত 'বাস্তব ডাটা' নেই। মানুষের হাঁটার ভিডিও অনেক থাকলেও রোবটের হাঁটার সময় তার জয়েন্টে কতটুকু প্রেসার লাগে সেই ডাটা PrismaX তৈরি করে।" },
        { id: 4, title: "ডাটা ফ্লাইহুইল (Data Flywheel)", summary: "AI-কে নিয়মিত উন্নত করার স্বয়ংক্রিয় লার্নিং সাইকেল।", details: "এটি একটি চক্র: মানুষ রোবটকে শেখাবে -> সেই ডাটা দিয়ে AI উন্নত হবে -> উন্নত AI দিয়ে রোবট নিজে কাজ করবে।" },
        { id: 5, title: "DePIN ও রোবটিক্স", summary: "বিকেন্দ্রীভূত ফিজিক্যাল ইনফ্রাস্ট্রাকচার নেটওয়ার্ক।", details: "প্রথাগত টেক কোম্পানিগুলোর মতো ডাটা কোনো সেন্ট্রাল সার্ভারে থাকে না। বিশ্বের মানুষ তাদের ডাটা শেয়ার করে একটি বিশাল নেটওয়ার্ক তৈরি করে।" },
        { id: 6, title: "VLA মডেল", summary: "রোবটের দেখা, মানুষের ভাষা বোঝা এবং কাজ করার ক্ষমতা।", details: "VLA হলো রোবটের একটি শক্তিশালী মাল্টিমোডাল ব্রেইন। এটি চোখ দিয়ে পরিবেশ দেখে এবং মানুষের ভাষা অনুযায়ী অ্যাকশন নেয়।" },
        { id: 7, title: "হাই-ফিডেলিটি ডাটা", summary: "অত্যন্ত সূক্ষ্ম এবং হাই-কোয়ালিটি সেন্সর তথ্য।", details: "এতে রোবটের প্রতিটি মোটরের ভোল্টেজ, তাপমাত্রা, এবং সে কতটুকু ওজন বহন করছে তার নিখুঁত হিসাব থাকে।" },
        { id: 8, title: "এজ-কেস সমাধান", summary: "অস্বাভাবিক বা নতুন পরিস্থিতিতে সঠিক সিদ্ধান্ত নেওয়ার ক্ষমতা।", details: "মানুষ টেলিকন্ট্রোলের মাধ্যমে কঠিন মুহূর্তে রোবটকে সাহায্য করে এবং রোবট সেই অভিজ্ঞতা থেকে শেখে।" },
        { id: 9, title: "হার্ডওয়্যার অ্যাগনস্টিক", summary: "যেকোনো ধরণের রোবটে PrismaX ব্যবহারের সুবিধা।", details: "আপনি PrismaX-এর ব্রেইনটি দিয়ে যেকোনো ব্র্যান্ডের রোবটিক হার্ডওয়্যার কন্ট্রোল করতে পারেন।" },
        { id: 10, title: "Optimum Network", summary: "রিয়েল-টাইম অপারেশনের লো-লেটেন্সি নেটওয়ার্ক।", details: "নিশ্চিত করে যে কন্ট্রোলারের নির্দেশ যেন মিলিসেকেন্ডের মধ্যে রোবটের কাছে পৌঁছায়।" },
        { id: 11, title: "RLNC টেকনোলজি", summary: "দুর্বল ইন্টারনেটেও শক্তিশালী ডাটা ট্রান্সমিশন।", details: "ইন্টারনেটের প্যাকেটে কোনো সমস্যা থাকলেও ডাটা হারিয়ে যেতে দেয় না।" },
        { id: 12, title: "ডাটা মাইনিং ২.০", summary: "কাজের মাধ্যমে রিওয়ার্ড অর্জন।", details: "আপনি যখন রোবটকে টেলিকন্ট্রোলের মাধ্যমে কাজ শেখান, বিনিময়ে আপনি রিওয়ার্ড পাবেন।" },
        { id: 13, title: "প্রাইভেসি ও ডাটা এনক্রিপশন", summary: "ব্যবহারকারীর নিরাপত্তা এবং গোপনীয়তা রক্ষা।", details: "ডাটাগুলো এনক্রিপ্ট করে সেভ করা হয় যাতে ইউজার বা ঘরের গোপনীয়তা বজায় থাকে।" },
        { id: 14, title: "ফাউন্ডেশন মডেল", summary: "সব রোবটের জন্য একটি সাধারণ মস্তিস্ক।", details: "একবার একটি রোবট কিছু শিখলে পৃথিবীর সব রোবট সেই কাজটি ক্লাউডের মাধ্যমে শিখে যাবে।" },
        { id: 15, title: "কোঅর্ডিনেশন লেয়ার", summary: "মানুষের নির্দেশ এবং রোবটের মেকানিক্যাল আউটপুটের সমন্বয়।", details: "এটি নিশ্চিত করে যে মানুষের দেওয়া কমান্ডগুলো রোবটের জয়েন্টগুলো নির্ভুলভাবে পালন করছে।" },
        { id: 16, title: "PoUW", summary: "অপ্রয়োজনীয় বিদ্যুৎ নষ্ট না করে কার্যকর কাজ করা।", details: "এখানে নেটওয়ার্কের কাজ সম্পন্ন হয় রোবট ট্রেনিং এর মাধ্যমে যা পৃথিবীর জন্য উপকারী।" },
        { id: 17, title: "হিউম্যান-ইন-দ্য-লুপ (HITL)", summary: "AI-এর সব কাজে মানুষের তদারকি এবং নিয়ন্ত্রণ।", details: "HITL সিস্টেম নিশ্চিত করে যে AI ভুল কিছু করতে গেলে মানুষ তাকে থামিয়ে সঠিক পথ দেখাতে পারবে।" },
        { id: 18, title: "ডিসেন্ট্রালাইজড নোড", summary: "সার্ভারের কোনো নির্দিষ্ট কেন্দ্র না থাকা।", details: "সিস্টেমটি সারা পৃথিবীতে ছড়িয়ে আছে, তাই এটি কখনো বন্ধ বা হ্যাক করা যায় না।" },
        { id: 19, title: "স্কেলেবল ইন্টেলিজেন্স", summary: "কমিউনিটির সাথে বুদ্ধিমত্তা বৃদ্ধির হার।", details: "যত বেশি রোবট যুক্ত হবে, ডাটা কালেকশন তত বাড়বে এবং AI তত দ্রুত বুদ্ধিমান হবে।" },
        { id: 20, title: "সিকার কমিউনিটি", summary: "ব্যবহারকারীদের হাতেই প্রজেক্টের ভবিষ্যৎ সিদ্ধান্ত।", details: "সিকাররা হলো সেই ইউজার যারা ভোটের মাধ্যমে প্রজেক্টের পরবর্তী পলিসি নির্ধারণ করে।" }
      ]
    },
    en: {
      nav: { overview: "Overview", protocols: "Protocols", research: "Research", langBtn: "বাংলা" },
      hero: { label: "Intelligence Mapping Layer", sub: "Simplified for Seekers" },
      protocolDetails: [
        { id: 'p1', title: "Coordination Layer", summary: "Smart layer for synchronization between human intent and robotic execution.", details: "Ensures human inputs reach robotic joints accurately. Acts like a nervous system for commands." },
        { id: 'p2', title: "Optimum Network", summary: "Zero-latency infrastructure for real-time robotic operations.", details: "Decentralized Layer-2 network for instant global data transmission, eliminating lag." },
        { id: 'p3', title: "Knowledge Hub", summary: "The world's largest open-source robotic intelligence database.", details: "Digital library storing high-fidelity interaction data for open-source AI training." }
      ],
      whitepaperTopics: [
        { id: 1, title: "What is Physical AI?", summary: "AI specifically designed to control robotic bodies.", details: "Interacts with the physical world, understanding spatial environments and hardware constraints." },
        { id: 2, title: "Teleoperation", summary: "Remote method of teaching robots via human input.", details: "Humans operate robots remotely using VR gear, and robots record this data for deep learning." },
        { id: 3, title: "The Data Gap", summary: "Bridging the lack of real-world robotic data.", details: "PrismaX creates the physical data missing from the internet, like joint torque and motor pressure." }
        // ... adding all 20 topics similarly
      ]
    }
  };

  const current = translations[lang];

  return (
    <div className="min-h-screen bg-transparent selection:bg-[#DFD8D0]/20 font-sans">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 border-b border-white/5 backdrop-blur-xl px-8 py-5 flex justify-between items-center transition-all">
        <h1 className="text-3xl font-serif text-white tracking-tight">
          Prisma<span className="text-xl align-top ml-0.5 text-[#DFD8D0] italic">(x)</span>
        </h1>
        
        <div className="flex items-center gap-10">
          <div className="hidden md:flex gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-[#DFD8D0]/60">
            <a href="#hero" className="hover:text-white transition">{current.nav.overview}</a>
            <a href="#protocols" className="hover:text-white transition">{current.nav.protocols}</a>
            <a href="#whitepaper" className="hover:text-white transition">{current.nav.research}</a>
          </div>

          <button 
            onClick={() => setLang(lang === 'bn' ? 'en' : 'bn')}
            className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full hover:bg-[#DFD8D0] hover:text-black transition-all text-[10px] font-black uppercase tracking-widest text-[#DFD8D0] border border-white/10"
          >
            <Globe size={14} />
            {current.nav.langBtn}
          </button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6">
        
        {/* HERO SECTION */}
        <section id="hero" className="pt-52 pb-32 text-center">
          <motion.div key={lang} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-[#DFD8D0] text-xs font-bold tracking-[0.5em] uppercase mb-6 block opacity-60">{current.hero.label}</span>
            <h2 className="text-6xl md:text-[8.5rem] font-serif text-white tracking-tighter leading-[0.85] mb-12">
              Prisma<span className="text-4xl md:text-6xl align-top ml-1 text-[#DFD8D0] italic">(x)</span> <br /> 
              <span className="italic text-white uppercase tracking-widest">Physical AI</span> <br />
              <span className="text-3xl md:text-4xl font-sans font-light tracking-[0.3em] text-[#DFD8D0]/40 block mt-6 uppercase">
                {current.hero.sub}
              </span>
            </h2>
          </motion.div>
        </section>

        {/* PROTOCOLS */}
        <section id="protocols" className="py-24 border-t border-white/5">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {current.protocolDetails.map((item) => (
                <div key={item.id} onClick={() => setSelectedTopic(item)} className="cursor-pointer">
                  <ProtocolCard icon={item.id === 'p1' ? <ShieldCheck /> : item.id === 'p2' ? <Zap /> : <BookOpen />} title={item.title} desc={item.summary} />
                </div>
              ))}
           </div>
        </section>

        {/* RESEARCH EXPLORER */}
        <section id="whitepaper" className="py-32 border-t border-white/5">
          <h3 className="text-5xl md:text-7xl font-serif text-white italic mb-20 tracking-tighter">{current.nav.research} Explorer</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {current.whitepaperTopics.map((topic) => (
              <motion.div key={topic.id} whileHover={{ y: -5 }} onClick={() => setSelectedTopic(topic)} className="p-10 rounded-[50px] glass-card cursor-pointer group flex justify-between items-center transition-all">
                <div className="flex gap-8 items-center">
                  <span className="text-[#DFD8D0] font-serif text-3xl opacity-10 group-hover:opacity-100 transition italic">0{topic.id}</span>
                  <div>
                    <h4 className="text-2xl font-serif text-white mb-2 italic tracking-tight">{topic.title}</h4>
                    <p className="text-[#DFD8D0]/50 text-[10px] uppercase tracking-widest">{topic.summary}</p>
                  </div>
                </div>
                <div className="p-3 rounded-full border border-white/5 group-hover:bg-[#DFD8D0] group-hover:text-black transition">
                  <ChevronRight size={18} />
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* POP-UP MODAL */}
      <AnimatePresence>
        {selectedTopic && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/95 backdrop-blur-2xl">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedTopic(null)} className="absolute inset-0" />
            <motion.div initial={{ scale: 0.95, opacity: 0, y: 50 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 50 }} className="relative bg-[#0d0d0d] border border-white/10 p-12 md:p-20 rounded-[60px] max-w-4xl w-full shadow-2xl overflow-y-auto max-h-[85vh] scrollbar-hide">
              <button onClick={() => setSelectedTopic(null)} className="absolute top-10 right-10 p-3 text-white/30 hover:text-white transition"><X size={32} /></button>
              <h3 className="text-5xl md:text-7xl font-serif text-white mb-10 italic leading-[1.1] tracking-tighter">{selectedTopic.title}</h3>
              <div className="space-y-10">
                <div className="p-8 bg-white/5 rounded-3xl italic text-[#DFD8D0] text-xl leading-relaxed">&ldquo;{selectedTopic.summary}&rdquo;</div>
                <p className="text-[#DFD8D0]/70 text-xl leading-[1.8] font-light whitespace-pre-line">{selectedTopic.details}</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <footer className="py-24 text-center border-t border-white/5">
        <p className="text-[#DFD8D0]/30 text-[10px] font-black tracking-[0.5em] uppercase">Dev by Himu &bull; 2026</p>
      </footer>
    </div>
  );
}

function ProtocolCard({ icon, title, desc }: any) {
  return (
    <div className="p-12 rounded-[50px] glass-card group transition-all h-full">
      <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center mb-8 text-[#DFD8D0] group-hover:bg-[#DFD8D0] group-hover:text-black transition">{icon}</div>
      <h4 className="text-2xl font-serif text-white mb-4 italic tracking-tight">{title}</h4>
      <p className="text-[#DFD8D0]/40 text-sm leading-relaxed font-light">{desc}</p>
    </div>
  );
}