'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, Zap, BookOpen, ChevronRight, Globe } from 'lucide-react';

export default function PrismaNavigator() {
  const [lang, setLang] = useState<'bn' | 'en'>('bn');
  const [selectedTopic, setSelectedTopic] = useState<null | any>(null);

  const translations = {
    bn: {
      nav: { overview: "OVERVIEW", protocols: "PROTOCOLS", research: "RESEARCH", langBtn: "ENGLISH" },
      hero: { label: "INTELLIGENCE MAPPING LAYER", sub: "Seekers-দের জন্য সহজ ব্যাখ্যা" },
      protocolDetails: [
        { id: 'p1', title: "Coordination Layer", summary: "মানুষ এবং রোবটের নির্দেশনার মধ্যে নিখুঁত তালমিল বজায় রাখার স্মার্ট লেয়ার।", details: "Coordination Layer হলো PrismaX ইকোসিস্টেমের কন্ট্রোল সেন্টার। এটি নিশ্চিত করে যে একজন মানুষের দেওয়া সূক্ষ্ম ইনপুটগুলো রোবটের মেকানিক্যাল জয়েন্টে সঠিকভাবে পৌঁছাচ্ছে। এটি ডাটা ভেরিফিকেশন এবং কমান্ড এক্সিকিউশনের মধ্যে একটি সেতুবন্ধন হিসেবে কাজ করে।\n\nউদাহরণ: আপনি যখন রিমোটলি রোবটকে হাত নাড়ানোর নির্দেশ দেন, তখন এই লেয়ারটি হিসাব করে দেখে রোবটটির মোটর কতটুকু শক্তি প্রয়োগ করবে যাতে কোনো ক্ষতি না হয়।" },
        { id: 'p2', title: "Optimum Network", summary: "শূন্য লেটেন্সিতে রিয়েল-টাইম রোবট অপারেশনের জন্য তৈরি বিশেষ অবকাঠামো।", details: "রোবটিক্স অপারেশনের সবচেয়ে বড় বাধা হলো ল্যাগ (Lag)। Optimum Network হলো একটি ডিসেন্ট্রালাইজড লেয়ার-২ নেটওয়ার্ক যা পৃথিবীর যেকোনো প্রান্ত থেকে রিয়েল-টাইম ডাটা ট্রান্সমিশন সম্ভব করে তোলে। এটি হাই-স্পিড ব্যান্ডউইথ এবং লো-লেটেন্সি নিশ্চিত করে।\n\nউদাহরণ: আপনি লস অ্যাঞ্জেলেসের একটি রোবটকে বাংলাদেশ থেকে চালাচ্ছেন। Optimum Network-এর কারণে আপনার মুভমেন্ট এবং রোবটের রেসপন্স হবে একদম তাৎক্ষণিক।" },
        { id: 'p3', title: "Knowledge Hub", summary: "বিশ্বের বৃহত্তম ওপেন-সোর্স রোবটিক ইন্টেলিজেন্স ও ডাটাবেজ সিস্টেম।", details: "Knowledge Hub হলো PrismaX-এর ডিজিটাল লাইব্রেরি। এখানে সারা বিশ্বের রোবট এবং মানুষের কাছ থেকে সংগৃহীত হাই-ফিডেলিটি ডাটা জমা থাকে। ডেভেলপাররা এই ওপেন-সোর্স ডাটা ব্যবহার করে নতুন নতুন ফিজিক্যাল AI মডেল তৈরি করতে পারেন।\n\nউদাহরণ: কোনো ডেভেলপার যদি নতুন একটি কুকিং রোবট বানাতে চান, তবে তাকে শুরু থেকে শিখাতে হবে না। তিনি Knowledge Hub থেকে প্রয়োজনীয় ডাটা নিয়ে রোবটটিকে দ্রুত ট্রেইন করতে পারবেন।" }
      ],
      whitepaperTopics: [
        { id: 1, title: "Physical AI কী?", summary: "রোবটের শরীর নিয়ন্ত্রণকারী বিশেষ কৃত্রিম বুদ্ধিমত্তা।", details: "সাধারণ AI (যেমন ChatGPT) শুধু ডিজিটাল তথ্য নিয়ে কাজ করে। কিন্তু Physical AI বাস্তব জগতের ফিজিক্যাল রোবট নিয়ন্ত্রণ করতে সক্ষম। এটি রোবটকে মানুষের মতো পরিবেশ বুঝতে এবং নড়াচড়া করতে শেখায়।\n\nউদাহরণ: আপনি ChatGPT-কে বললে সে আপনাকে কফি বানানোর রেসিপি লিখে দেবে, কিন্তু PrismaX-এর Physical AI রোবটকে নির্দেশ দিয়ে সত্যি সত্যি কফি বানিয়ে দিতে সক্ষম।" },
        { id: 2, title: "টেলিকন্ট্রোল (Teleoperation)", summary: "দূর থেকে রোবটকে কাজ শেখানোর আধুনিক পদ্ধতি।", details: "টেলিকন্ট্রোল হলো এমন একটি সিস্টেম যেখানে একজন মানুষ রিমোট বা ভিআর (VR) গিয়ার ব্যবহার করে দূর থেকে রোবট পরিচালনা করে। মানুষ যখন রোবটকে কন্ট্রোল করে, তখন রোবট সেই কাজটির ডাটা রেকর্ড করে নেয়।\n\nউদাহরণ: ধরুন আপনি ঢাকা থেকে ইন্টারনেটের মাধ্যমে আমেরিকার একটি হসপিটালের রোবটকে কাজ শেখাচ্ছেন। আপনার প্রতিটি মুভমেন্ট রোবটটি নিজের মেমোরিতে সেভ করে নিচ্ছে।" },
        { id: 3, title: "ডাটা গ্যাপ (The Data Gap)", summary: "রোবটকে বুদ্ধিমান বানানোর জন্য বাস্তব ডাটার অভাব দূর করা।", details: "রোবটকে শেখানোর জন্য ইন্টারনেটে পর্যাপ্ত 'বাস্তব ডাটা' নেই। মানুষের হাঁটার ভিডিও অনেক থাকলেও রোবটের হাঁটার সময় তার জয়েন্টে কতটুকু প্রেসার লাগে সেই ডাটা PrismaX তৈরি করে।\n\nউদাহরণ: একটি ছোট বাচ্চার যেমন হাঁটতে শিখতে বাস্তব অভিজ্ঞতার প্রয়োজন হয়, রোবটকেও তেমনি বাস্তব জগতের ফিজিক্যাল ডাটা না দিলে সে কখনো দক্ষ হবে না।" },
        { id: 4, title: "ডাটা ফ্লাইহুইল (Data Flywheel)", summary: "AI-কে নিয়মিত উন্নত করার স্বয়ংক্রিয় লার্নিং সাইকেল।", details: "এটি একটি চক্র: মানুষ রোবটকে শেখাবে (ডাটা কালেকশন) -> সেই ডাটা দিয়ে AI উন্নত হবে (ট্রেনিং) -> উন্নত AI দিয়ে রোবট নিজে কাজ করবে (অটোনোমি)। এই চক্র যতবার ঘুরবে, রোবট তত দ্রুত বুদ্ধিমান হবে।" },
        { id: 5, title: "DePIN ও রোবটিক্স", summary: "বিকেন্দ্রীভূত ফিজিক্যাল ইনফ্রাস্ট্রাকচার নেটওয়ার্ক।", details: "DePIN মানে হলো ডিসেন্ট্রালাইজড ফিজিক্যাল ইনফ্রাস্ট্রাকচার নেটওয়ার্ক। প্রথাগত টেক কোম্পানিগুলোর মতো ডাটা কোনো সেন্ট্রাল সার্ভারে থাকে না। এর মাধ্যমে সারা বিশ্বের মানুষ তাদের রোবট হার্ডওয়্যার এবং ডাটা শেয়ার করে একটি বিশাল নেটওয়ার্ক তৈরি করে।" },
        { id: 6, title: "VLA মডেল (Vision-Language-Action)", summary: "রোবটের দেখা, মানুষের ভাষা বোঝা এবং কাজ করার ক্ষমতা।", details: "VLA হলো রোবটের একটি শক্তিশালী মাল্টিমোডাল ব্রেইন। এটি চোখ দিয়ে পরিবেশ দেখে (Vision), মানুষের ভাষা বা নির্দেশ শোনে (Language) এবং সেই অনুযায়ী হাত-পা দিয়ে অ্যাকশন নেয় (Action)।" },
        { id: 7, title: "হাই-ফিডেলিটি ডাটা", summary: "অত্যন্ত সূক্ষ্ম এবং হাই-কোয়ালিটি সেন্সর তথ্য সংগ্রহ।", details: "এটি শুধু সাধারণ ভিডিও ফুটেজ নয়। এতে রোবটের প্রতিটি মোটরের ভোল্টেজ, তাপমাত্রা, এবং সে কতটুকু ওজন বহন করছে তার নিখুঁত হিসাব থাকে। এই ডাটাই হলো রোবটিক AI-এর আসল জ্বালানি।" },
        { id: 8, title: "এজ-কেস (Edge Cases) সমাধান", summary: "অস্বাভাবিক পরিস্থিতিতে সঠিক সিদ্ধান্ত নেওয়ার ক্ষমতা।", details: "এজ-কেস হলো এমন পরিস্থিতি যা রোবটের ট্রেনিং ডাটাতে আগে ছিল না। মানুষ টেলিকন্ট্রোলের মাধ্যমে এই কঠিন মুহূর্তগুলোতে রোবটকে সাহায্য করে এবং রোবট সেই নতুন অভিজ্ঞতা থেকে শিখতে থাকে।" },
        { id: 9, title: "হার্ডওয়্যার অ্যাগনস্টিক সিস্টেম", summary: "যেকোনো ধরণের রোবটে PrismaX ব্যবহারের সুবিধা।", details: "PrismaX-এর সফটওয়্যার এমনভাবে তৈরি যে এটি যেকোনো ব্র্যান্ডের রোবটিক হার্ডওয়্যারে চালানো সম্ভব। এটি অনেকটা কম্পিউটারের অপারেটিং সিস্টেমের মতো।" },
        { id: 10, title: "রিয়েল-টাইম অপারেশন", summary: "রিয়েল-টাইম অপারেশনের জন্য লো-লেটেন্সি নেটওয়ার্ক।", details: "রিমোট অপারেশনের সময় যদি ভিডিওতে ল্যাগ (Lag) থাকে, তবে দুর্ঘটনা ঘটতে পারে। Optimum Network নিশ্চিত করে যে নির্দেশ যেন মিলিসেকেন্ডের মধ্যে রোবটের কাছে পৌঁছায়।" },
        { id: 11, title: "RLNC টেকনোলজি", summary: "দুর্বল ইন্টারনেটেও শক্তিশালী ডাটা ট্রান্সমিশন।", details: "Random Linear Network Coding হলো এমন একটি পদ্ধতি যা ইন্টারনেটের প্যাকেটে কোনো সমস্যা থাকলেও ডাটা হারিয়ে যেতে দেয় না। এর ফলে ইন্টারনেটের সিগন্যাল দুর্বল হলেও রোবট ডিসকানেক্ট হয় না।" },
        { id: 12, title: "ডাটা মাইনিং ২.০", summary: "অংক কষে নয়, রোবট ট্রেনিং-এর মাধ্যমে রিওয়ার্ড অর্জন।", details: "এখানে আপনি যখন রোবটকে টেলিকন্ট্রোলের মাধ্যমে কোনো কাজ শেখান, তখন আপনি নেটওয়ার্কের জন্য মূল্যবান ডাটা তৈরি করছেন। এই অবদানের বিনিময়ে আপনি রিওয়ার্ড পাবেন।" },
        { id: 13, title: "প্রাইভেসি ও ডাটা এনক্রিপশন", summary: "ব্যবহারকারীর নিরাপত্তা এবং গোপনীয়তা রক্ষা।", details: "রোবট যে ডাটা সংগ্রহ করে তা এনক্রিপ্ট করে কোড আকারে সেভ করা হয় যাতে ইউজার বা ঘরের গোপনীয়তা কোনোভাবেই নষ্ট না হয়।" },
        { id: 14, title: "ফাউন্ডেশন মডেল", summary: "সব রোবটের জন্য একটি সাধারণ মস্তিস্ক।", details: "PrismaX একটি বিশাল AI মডেল তৈরি করছে যা সব রোবটের জন্য ব্রেইন হিসেবে কাজ করবে। একবার একটি রোবট কিছু শিখলে পৃথিবীর সব রোবট সেই কাজটি শিখে যাবে।" },
        { id: 15, title: "কোঅর্ডিনেশন লেয়ার", summary: "মানুষের নির্দেশ এবং রোবটের মেকানিক্যাল আউটপুটের সমন্বয়।", details: "এটি একটি কন্ট্রোল মেকানিজম যা নিশ্চিত করে যে মানুষের দেওয়া কমান্ডগুলো রোবটের মোটর এবং জয়েন্টগুলো নির্ভুলভাবে পালন করছে।" },
        { id: 16, title: "প্রুফ অফ ইউজফুল ওয়ার্ক (PoUW)", summary: "অপ্রয়োজনীয় বিদ্যুৎ নষ্ট না করে কার্যকর কাজ করা।", details: "এখানে নেটওয়ার্কের কাজ সম্পন্ন হয় 'দরকারী কাজের' (রোবট ট্রেনিং) মাধ্যমে, যা পৃথিবীর জন্য সত্যিকার অর্থে উপকারী।" },
        { id: 17, title: "হিউম্যান-ইন-দ্য-লুপ (HITL)", summary: "AI-এর সব কাজে মানুষের তদারকি এবং নিয়ন্ত্রণ।", details: "HITL সিস্টেম নিশ্চিত করে যে AI যদি ভুল কিছু করতে যায়, তবে তৎক্ষণাৎ একজন মানুষ তাকে থামিয়ে সঠিক পথ দেখাতে পারবে।" },
        { id: 18, title: "ডিসেন্ট্রালাইজড নোড নেটওয়ার্ক", summary: "সার্ভারের কোনো নির্দিষ্ট কেন্দ্র না থাকা।", details: "PrismaX-এর সার্ভার সারা পৃথিবীতে ছড়িয়ে আছে। এর ফলে কোনো হ্যাকার বা একটি দুর্যোগ পুরো সিস্টেমকে কখনো বন্ধ করতে পারে না।" },
        { id: 19, title: "স্কেলেবল ইন্টেলিজেন্স", summary: "কমিউনিটির অবদানের সাথে বুদ্ধিমত্তা বৃদ্ধির হার।", details: "যত বেশি রোবট এবং কন্ট্রোলার এই নেটওয়ার্কে যুক্ত হবে, ডাটা কালেকশনের গতি তত বাড়বে এবং AI তত দ্রুত বুদ্ধিমান হবে।" },
        { id: 20, title: "সিকার (Seeker) কমিউনিটি", summary: "ব্যবহারকারীদের হাতেই প্রজেক্টের ভবিষ্যৎ সিদ্ধান্ত।", details: "সিকাররা হলো সেই মানুষ যারা এই প্রজেক্টের সাথে শুরু থেকেই জড়িত। ভবিষ্যতে প্রজেক্টের পলিসি সিকার কমিউনিটির ভোটের মাধ্যমে নির্ধারণ করা হবে।" }
      ]
    },
    en: {
      nav: { overview: "OVERVIEW", protocols: "PROTOCOLS", research: "RESEARCH", langBtn: "বাংলা" },
      hero: { label: "INTELLIGENCE MAPPING LAYER", sub: "Simplified for Seekers" },
      protocolDetails: [
        { id: 'p1', title: "Coordination Layer", summary: "Sync between human intent and robotic execution.", details: "The nerve center ensuring commands reach robotic joints accurately." },
        { id: 'p2', title: "Optimum Network", summary: "Zero-latency infrastructure for real-time operations.", details: "Decentralized network built to eliminate lag globally." },
        { id: 'p3', title: "Knowledge Hub", summary: "Open-source robotic intelligence database.", details: "Digital library of high-fidelity interaction data." }
      ],
      whitepaperTopics: [
        { id: 1, title: "What is Physical AI?", summary: "AI specifically designed to control robotic bodies.", details: "Interacts with physical world constraints." },
        { id: 2, title: "Teleoperation", summary: "Remote method of teaching robots via human input.", details: "Teaching robots via VR systems." },
        { id: 3, title: "The Data Gap", summary: "Bridging the lack of real robotic data.", details: "Generating the data missing from the internet." },
        { id: 4, title: "Data Flywheel", summary: "Self-improving AI development cycle.", details: "More data equals smarter AI." },
        { id: 5, title: "DePIN & Robotics", summary: "Decentralized physical infrastructure.", details: "Shared ownership of robotic data networks." },
        { id: 6, title: "VLA Model", summary: "Vision-Language-Action capabilities.", details: "Multi-modal brain for robots." },
        { id: 7, title: "High-Fidelity Data", summary: "Precise sensor information.", details: "Detailed motor torque data." },
        { id: 8, title: "Edge Case Solutions", summary: "Handling unusual situations.", details: "AI learning from guided experiences." },
        { id: 9, title: "Hardware Agnostic", summary: "Universal robotic software.", details: "Runs on any brand of robotic hardware." },
        { id: 10, title: "Real-Time Operation", summary: "Low-latency network for robots.", details: "Millisecond response times." },
        { id: 11, title: "RLNC Technology", summary: "Robust data transmission.", details: "Prevents data loss on weak Wi-Fi." },
        { id: 12, title: "Data Mining 2.0", summary: "Earning rewards through training.", details: "Get rewarded for contributing data." },
        { id: 13, title: "Privacy & Encryption", summary: "Security and data protection.", details: "Encrypted data keeps user spaces private." },
        { id: 14, title: "Foundation Model", summary: "A common brain for all robots.", details: "Skill sharing across the entire network." },
        { id: 15, title: "Coordination Layer", summary: "Human-motor synchronization.", details: "Ensuring commands are executed perfectly." },
        { id: 16, title: "PoUW", summary: "Effective work without wasting energy.", details: "Training robots instead of solving puzzles." },
        { id: 17, title: "Human-in-the-Loop", summary: "Human supervision over AI.", details: "Safety and oversight for AI control." },
        { id: 18, title: "Decentralized Nodes", summary: "No single point of failure.", details: "Spread across global computer networks." },
        { id: 19, title: "Scalable Intelligence", summary: "Growing with the community.", details: "AI scaling with crowd-sourced data." },
        { id: 20, title: "Seeker Community", summary: "User-driven governance.", details: "Project direction decided by users." }
      ]
    }
  };

  const current = translations[lang];

  return (
    <div className="min-h-screen bg-transparent selection:bg-[#DFD8D0]/10 font-sans text-white">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-12 py-8 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
        <h1 className="text-3xl font-serif tracking-tight">
          Prisma<span className="text-xl align-top ml-0.5 text-[#DFD8D0] italic">(x)</span>
        </h1>
        
        <div className="flex items-center gap-12">
          <div className="hidden lg:flex gap-10 text-[11px] font-bold tracking-[0.3em] text-white/40">
            <a href="#hero" className="hover:text-white transition">{current.nav.overview}</a>
            <a href="#protocols" className="hover:text-white transition">{current.nav.protocols}</a>
            <a href="#whitepaper" className="hover:text-white transition">{current.nav.research}</a>
          </div>

          {/* Text-only Language Button */}
          <button 
            onClick={() => setLang(lang === 'bn' ? 'en' : 'bn')}
            className="text-[11px] font-black tracking-widest uppercase hover:text-[#DFD8D0] transition-all flex items-center gap-2"
          >
            <Globe size={14} className="opacity-40" />
            {current.nav.langBtn}
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8">
        
        {/* HERO SECTION */}
        <section id="hero" className="pt-64 pb-40 text-center">
          <motion.div key={lang} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <span className="text-white/20 text-[10px] font-bold tracking-[0.6em] uppercase mb-8 block">
              {current.hero.label}
            </span>
            <h2 className="text-5xl md:text-[6rem] font-serif tracking-tighter leading-none mb-10">
              Prisma<span className="italic text-[#DFD8D0]">(x)</span> <br /> 
              <span className="uppercase text-white">Physical AI</span>
            </h2>
            <p className="text-xl md:text-2xl font-light tracking-tight text-white/30 uppercase">
              {current.hero.sub}
            </p>
          </motion.div>
        </section>

        {/* PROTOCOLS SECTION */}
        <section id="protocols" className="py-32 border-t border-white/5">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {current.protocolDetails.map((item) => (
                <div key={item.id} onClick={() => setSelectedTopic(item)} className="text-center group cursor-pointer">
                  <div className="w-20 h-20 bg-[#121212] rounded-3xl flex items-center justify-center mx-auto mb-10 border border-white/5 group-hover:border-[#DFD8D0]/30 transition-all">
                    <div className="text-[#DFD8D0] scale-125">
                      {item.id === 'p1' ? <ShieldCheck /> : item.id === 'p2' ? <Zap /> : <BookOpen />}
                    </div>
                  </div>
                  <h4 className="text-3xl font-serif italic mb-6 group-hover:text-[#DFD8D0] transition">{item.title}</h4>
                  <p className="text-white/40 text-sm leading-relaxed max-w-[280px] mx-auto">{item.summary}</p>
                </div>
              ))}
           </div>
        </section>

        {/* RESEARCH EXPLORER - Two Column Complete */}
        <section id="whitepaper" className="py-40 border-t border-white/5">
          <h3 className="text-4xl font-serif italic mb-24 text-center tracking-widest uppercase text-white/80">Research Explorer</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
            {current.whitepaperTopics.map((topic) => (
              <motion.div 
                key={topic.id} 
                whileHover={{ opacity: 0.7 }}
                onClick={() => setSelectedTopic(topic)}
                className="flex items-center justify-between border-b border-white/5 pb-8 group cursor-pointer"
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
                <div className="p-2 rounded-full border border-white/10 text-white/20 group-hover:text-white transition">
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
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/95 backdrop-blur-xl">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedTopic(null)} className="absolute inset-0" />
            <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.98, opacity: 0 }} className="relative bg-[#080808] border border-white/10 p-12 md:p-24 rounded-[40px] max-w-5xl w-full shadow-2xl overflow-y-auto max-h-[90vh] scrollbar-hide">
              <button onClick={() => setSelectedTopic(null)} className="absolute top-12 right-12 text-white/20 hover:text-white transition"><X size={40} /></button>
              <h3 className="text-5xl md:text-8xl font-serif italic mb-12 tracking-tighter leading-none">{selectedTopic.title}</h3>
              <div className="space-y-12 max-w-3xl">
                <div className="text-[#DFD8D0] text-2xl italic font-light border-l-2 border-[#DFD8D0]/30 pl-8 leading-relaxed">
                  {selectedTopic.summary}
                </div>
                {selectedTopic.details && (
                  <p className="text-white/50 text-xl leading-loose font-light whitespace-pre-line">
                    {selectedTopic.details}
                  </p>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <footer className="py-24 text-center border-t border-white/5">
        <p className="text-white/10 text-[9px] font-bold tracking-[0.6em] uppercase">
          DEV BY HIMU • 2026
        </p>
      </footer>
    </div>
  );
}